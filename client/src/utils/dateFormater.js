const date = new Date(Number())
    .toLocaleDateString("en-US", {
        month: "numeric",
        day: "numeric",
        year: "numeric",
    })

export default date;