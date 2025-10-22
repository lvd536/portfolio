import Button from "./Button.tsx";
import Title from "./Title.tsx";
import Stack from "./Stack.tsx";

export default function About() {
    return (
        <section id="about" className="pb-24 py-44 flex justify-between">
            <div className="flex flex-col">
                <Title/>
                <Button>Contact with me</Button>
            </div>
            <Stack/>
        </section>
    )
}