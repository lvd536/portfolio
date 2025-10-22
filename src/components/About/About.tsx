import Button from "./Button.tsx";
import Title from "./Title.tsx";
import Stack from "./Stack/Stack.tsx";

export default function About() {
    return (
        <section id="about" className="py-24 flex">
            <div className="flex flex-col w-6/12">
                <Title/>
                <Button>Let's check!</Button>
            </div>
            <Stack></Stack>
        </section>
    )
}