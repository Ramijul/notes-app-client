import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import { onError } from "../libs/errorLib";
import config from "../config";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import "./Settings.css";
// import BillingForm from "../components/BillingForm";

export default function Settings() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const stripe = loadStripe(config.STRIPE_KEY);

    function billUser(details) {
        return API.post("notes", "/billing", {
            body: details
        });
    }

    async function handleFormSubmit(storage, { token, error }) {
        if (error) {
            onError(error);
            return;
        }

        setIsLoading(true);

        try {
            await billUser({
                storage,
                source: token.id
            });
            alert("Your card has been charged successfully!");
            navigate("/");
        } catch (e) {
            onError(e);
            setIsLoading(false);
        }
    }

    return (
        <div className="Settings">
            {/* <Elements stripe={stripe}>
                <BillingForm isLoading={isLoading} onSubmit={handleFormSubmit} />
            </Elements> */}
        </div >
    );
}

