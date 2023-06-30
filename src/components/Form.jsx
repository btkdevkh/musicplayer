import { useState } from "react"

const Form = ({ headingTitle, formData }) => {
  const [fileOne, setFileOne] = useState(null)
  const [fileTwo, setFileTwo] = useState(null)
  const [formValues, setFormValues] = useState({
    title: "",
    singer: "",
    cover: "",
    song: "",
  })

  const onChange = (e) => {
    if (e.target.name === "cover") {
      setFileOne(e.target.files[0])
    }
    if (e.target.name === "song") {
      setFileTwo(e.target.files[0])
    }

    setFormValues((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      }
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(formValues)
    console.log(fileOne)
    console.log(fileTwo)
  }

  return (
    <form
      className="form-generic"
      onSubmit={onSubmit}
      encType="multipart/form-data"
    >
      <h5>{headingTitle}</h5>
      <hr />
      {formData.length > 0 &&
        formData.map((fd) => (
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

      <input type="submit" value="Submit" />
    </form>
  )
}

export default Form
