import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { CardElement, injectStripe } from "@stripe/react-stripe-js";
import LoaderButton from "./LoaderButton";
import { useFormFields } from "../libs/hooksLib";
import "./BillingForm.css";

function BillingForm({ isLoading, onSubmit, ...props }) {
    const [fields, handleFieldChange] = useFormFields({
        name: "",
        storage: "",
    });
    const [isProcessing, setIsProcessing] = useState(false);
    const [isCardComplete, setIsCardComplete] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    isLoading = isProcessing || isLoading;

    function validateForm() {
        return fields.name !== "" && fields.storage !== "" && isCardComplete;
    }

    async function handleSubmitClick(event) {
        event.preventDefault();
        setIsProcessing(true);

        const cardElement = elements.getElement(CardElement);

        // Pass the Element directly to other Stripe.js methods:
        // e.g. createToken - https://stripe.com/docs/js/tokens_sources/create_token?type=cardElement
        const { token, error } = stripe.createToken(cardElement);

        // // or createPaymentMethod - https://stripe.com/docs/js/payment_methods/create_payment_method
        // const { token, error } = stripe.createPaymentMethod({
        //     type: 'card',
        //     card: cardElement,
        // });

        // const { token, error } = await stripe.createToken({
        //     name: fields.name,
        // });
        setIsProcessing(false);
        onSubmit(fields.storage, { token, error });
    }

    return (
        <Form className="BillingForm" onSubmit={handleSubmitClick}>
            <Form.Group size="lg" controlId="storage">
                <Form.Label>Storage</Form.Label>
                <Form.Control
                    min="0"
                    type="number"
                    value={fields.storage}
                    onChange={handleFieldChange}
                    placeholder="Number of notes to store"
                />
            </Form.Group>

            <hr />

            <Form.Group size="lg" controlId="name">
                <Form.Label>Cardholder&apos;s name</Form.Label>
                <Form.Control
                    type="text"
                    value={fields.name}
                    onChange={handleFieldChange}
                    placeholder="Name on the card"
                />
            </Form.Group>

            <Form.Label>Credit Card Info</Form.Label>

            <CardElement
                className="card-field"
                onChange={(e) => setIsCardComplete(e.complete)}
                options={{
                    style={
                        base: {
                            fontSize: "16px",
                            color: "#495057",
                            fontFamily: "'Open Sans', sans-serif",
                        },
                    }
                }}
            />

            <LoaderButton
                block
                size="lg"
                type="submit"
                isLoading={isLoading}
                disabled={!validateForm()}
            >
                Purchase
            </LoaderButton>
        </Form>
    );
}
export default injectStripe(BillingForm);

