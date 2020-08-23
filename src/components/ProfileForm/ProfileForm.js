import React, { useState, useEffect, createRef } from 'react';
import { FormContainer, Form, ItemLabel, ItemContainer, Select } from './ProfileForm.styles';

const ProfileForm = ({ formContent, triggered }) => {

    const [formData, setFormData] = useState([]);
    const theForm = createRef();

    useEffect(() => {
        const data = formContent.map((firstLevel => {
            return firstLevel.map(secondLevel => {
                return {
                    label: secondLevel.label,
                    value: secondLevel.options[0]
                }
            });
        }));
        setFormData(data);
    }, [formContent]);

    /*
    useEffect(() => {
        const submitForm = () => {
            if (triggered !== null) {
                theForm.current.dispatchEvent(triggered);
            }
        }
        submitForm();
    }, [triggered]);
    */

    const handleFormDataChange = (change) => {
        const newData = formData.map(firstLevel => {
            return firstLevel.map(secondLevel => {
                return {
                    label: secondLevel.label,
                    value: secondLevel.label === change.target.id ? change.target.value : secondLevel.value
                }
            })
        })
        setFormData(newData);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // This should send the data here
        console.log(formData);
    }

    return (
        <FormContainer>
            <Form onSubmit={handleFormSubmit} ref={theForm}>
                {formContent.map((item) => {
                    return item.map((item, index) => {
                        return (
                            <ItemContainer key={index}>
                                <ItemLabel>{item.label}</ItemLabel>
                                <Select id={item.label} onChange={(event) => handleFormDataChange(event)}>
                                    {item.options.map((optionsItem, optionsIndex) => {
                                        return (
                                            <option
                                                key={optionsIndex}
                                                value={optionsItem}
                                            >
                                                {optionsItem}
                                            </option>
                                        )
                                    })}
                                </Select>
                            </ItemContainer>
                        )
                    })
                })}
            </Form>
        </FormContainer>
    )
}

export default ProfileForm;
