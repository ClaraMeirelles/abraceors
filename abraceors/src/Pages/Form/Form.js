import React, { useState } from 'react'

export function Form({ formType }) {
    const [form, setForm] = useState({})


    return (
        <div>
            <h1>Formulário de cadastro para {formType}</h1>
        </div>
    )
}
