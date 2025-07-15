import { ChangeEvent, FormEvent, useState } from "react";
import useStorage from "../../hooks/useStorage";
import useDocument from "../../hooks/useDocument";
import { Music } from "../../types/Music";
import { FormMusicData } from "../../types/FormMusicData";

type FormProps = {
  headingTitle: string;
  formData: FormMusicData[];
};

const Form = ({ headingTitle, formData }: FormProps) => {
  const { addDocument } = useDocument();
  const { uploadFile } = useStorage();

  const [fileOne, setFileOne] = useState<File | null>(null);
  const [fileTwo, setFileTwo] = useState<File | null>(null);
  const [formValues, setFormValues] = useState<Music | null>({
    title: "",
    singer: "",
    coverUrl: "",
    songUrl: "",
    imgFilePath: "",
    songFilePath: "",
    createdAt: null,
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "cover") {
      if (e.target.files && e.target.files.length > 0) {
        setFileOne(e.target.files[0]);
      } else {
        setFileOne(null);
      }
    }
    if (e.target.name === "song") {
      if (e.target.files && e.target.files.length > 0) {
        setFileTwo(e.target.files[0]);
      } else {
        setFileTwo(null);
      }
    }

    setFormValues((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      } as Music;
    });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formValues) return;

    if (
      formValues.title === "" ||
      formValues.singer === "" ||
      fileOne == null ||
      fileTwo == null
    ) {
      return;
    }

    const fileNameOne = `${Date.now()}.${fileOne.name.split(".")[1]}`;
    const fileNameTwo = `${Date.now()}.${fileTwo.name.split(".")[1]}`;

    const coverUrl = await uploadFile(fileOne, fileNameOne);
    const songUrl = await uploadFile(fileTwo, fileNameTwo);

    if (!coverUrl || !songUrl) return;

    const newSong = {
      title: formValues.title,
      singer: formValues.singer,
      imgFilePath: `covers/${fileNameOne}`,
      songFilePath: `songs/${fileNameTwo}`,
      coverUrl,
      songUrl,
      createdAt: new Date(),
    };

    await addDocument(newSong);

    setFormValues(null);
    setFileOne(null);
    setFileTwo(null);
  };

  return (
    <form
      className="form-generic"
      onSubmit={onSubmit}
      encType="multipart/form-data"
    >
      <hr />
      <h5>{headingTitle}</h5>
      <hr />
      {formData.length > 0 &&
        formData.map((fd, i) => (
          <div key={fd.id}>
            {fd.type === "file" && fd.name === "cover" && (
              <label htmlFor={fd.id}>
                Select an image (Only JPEG, JPG, PNG)
              </label>
            )}

            {fd.type === "file" && fd.name === "song" && (
              <label htmlFor={fd.id}>Select a song (Only MP3)</label>
            )}

            <input
              type={fd.type}
              placeholder={fd.placeholder}
              id={fd.id}
              name={fd.name}
              onChange={onChange}
            />
          </div>
        ))}

      <input type="submit" value="SUBMIT" />
    </form>
  );
};

export default Form;
