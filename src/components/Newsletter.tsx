import { useState } from "react";

const Newsletter: React.FC = () => {

    const [email, setEmail] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(`Subscribing ${email} to newsletter...`);
        setEmail("");
    };

    return (
        <section>
            <main className='flex flex-col items-center justify-center bg-gray-200  '>

            </main>
        </section>
    )
}

export default Newsletter