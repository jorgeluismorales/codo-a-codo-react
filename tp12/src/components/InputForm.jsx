import { useState } from "react"
import { Button, Form, Stack } from "react-bootstrap"

const InputForm = ({ arrayLength, addImage, deleteImage }) => {

    const [inputLength, setInputLength] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault()
        arrayLength(parseInt(inputLength))
        setInputLength(0)
    }

    return (
        <Stack direction="horizontal" gap={2} className="mb-4">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Ingresa un numero</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Ingresa un numero"
                        value={inputLength}
                        onChange={(e) => setInputLength(e.target.value)}
                    />
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form.Group>
            </Form>
            <Button variant="danger" type="button" onClick={deleteImage}>
                Eliminar imagen
            </Button>
            <Button variant="warning" type="button" onClick={addImage}>
                Agregar imagen
            </Button>
        </Stack>
    )
}

export default InputForm