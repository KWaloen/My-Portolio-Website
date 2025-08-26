import Link from 'next/link'

export default function React_Projects() {
    return (

            <div className='card'>
                <h2 className="text-xl font-bold">Web Projects</h2>

                <h2>
                    <ul>
                        <Link className="link" href="https://js-proposals.vercel.app/" target="_blank">🚀 JavaScript Proposals Project 🚀</Link>
                    </ul>
                    <ul>
                        <Link className="link" href="https://baio.netlify.app/" target="_blank"> 💬 BAIO Bioinformatics Chatbot 💬</Link>
                    </ul>
                    <ul>
                        <Link className="link" href="/ReactProjects/ToDoList"> ✔️ Todo list ✔️</Link>
                    </ul>
                    <ul>
                        <Link className="link" href="/ReactProjects/LoginPage">🔑 CTF Challenge: Login Page 🔒</Link>
                    </ul>
                    <ul>
                        <Link className="link" href="/ReactProjects/Haskell_Is_Hard">👷 Haskell Is Hard Chatbot 👷</Link>
                    </ul>
                    <ul>
                        <Link className="link" href="/ReactProjects/Java_Is_Great">👷 Java Is Great Chatbot 👷</Link>
                    </ul>
                </h2>

            </div>
    );

}