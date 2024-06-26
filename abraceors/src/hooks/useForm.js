import React, { useState } from 'react'

export default function useForm(initialState) {
    const [form, setForm] = useState(initialState)

    const onChangeForm = (event) => {
        const { name, value } = event

        setForm({ ...form, name: event.name, value: event.value })
    }

    const clearForm = () => {
        setForm(initialState)
    }
    return { form, onChangeForm, clearForm }
}
