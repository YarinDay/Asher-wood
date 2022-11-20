import React from 'react'


export function ReviewPreview({ review}) {
    console.log('asdasdasd');
    return (
        <div className="review-preview">
            <p>{review?.review}</p>
        </div>
    )
}