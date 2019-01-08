export default function getPrettyDate() {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];
    let today = new Date();
    let prettyDate = `${days[today.getDay()]}, ${today.getDate()} ${months[today.getMonth()]}`;
    return prettyDate;
}