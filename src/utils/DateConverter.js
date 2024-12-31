
export default function DateConverter(isoDate) {
    const date = new Date(isoDate);

    // Format options
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false // Use false for 24-hour format
    };

    const humanReadableDate = date.toLocaleString('en-GB', options);

    return humanReadableDate;
}
