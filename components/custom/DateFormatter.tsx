import React from 'react';

export default function DateFormatter({dateString}:{dateString:string}): React.JSX.Element {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    });
    return (
         <time dateTime={dateString}>{formattedDate}</time>
    );
}