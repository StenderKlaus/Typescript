import { ReactNode } from "react"

type SectionProps = {
    title?: string,         // title? bedeutet, das eine Titeleingabe optional ist
    children: ReactNode     // Dadurch können verschiedene Arten von Inhalten, einschließlich Text,     HTML-Elementen oder anderen React-Komponenten, als Kinder dieser Komponente verwendet werden.
}

export const Section = ({ children, title = "My Subheading" }: SectionProps) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    )
}