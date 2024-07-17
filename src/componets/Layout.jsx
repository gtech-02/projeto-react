
export default function Layout (props) {
    console.log(props)
    return (
        <>
            <header>
                HEADER
            </header>
            <main>
                { props.children }
            </main>
            <footer>
                FOOTER
            </footer>
        </>
    );
}