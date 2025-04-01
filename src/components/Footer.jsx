export default function Footer() {
    return (
        <>
            <footer className="m-4">
                <ul className="list-group">
                    <li
                        className="list-group-item d-flex justify-content-between align-items-center active"
                    >
                        Item 1
                        <span className="badge bg-secondary badge-pill">pill1</span>
                    </li>
                    <li
                        className="list-group-item d-flex justify-content-between align-items-center"
                    >
                        Item 2
                        <span className="badge bg-secondary badge-pill">pill2</span>
                    </li>
                    <li
                        className="list-group-item d-flex justify-content-between align-items-center"
                    >
                        Item 3
                        <span className="badge bg-secondary badge-pill">pill3</span>
                    </li>
                </ul>

            </footer>
        </>
    )
}