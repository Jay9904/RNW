import React, { useRef, useState } from "react";

export default function Comments() {
    const [review, setReview] = useState({ name: "", comments: "" });

    const name = useRef();
    const comment = useRef();

    const commit = () => {
        setReview(...review, [{ name: name.current.value, comments: comment.current.value }]);
        console.log(review);
    }

    return <>
        <div className="container">
            <h3 className="text-center">Comment Section</h3>
            <div className="col-6 m-auto">
                <input type="text" placeholder="Name" className="form-control mb-3 border border-dark" ref={name} />
                <input type="text" placeholder="Comment" className="form-control border border-dark mb-2" ref={comment} />
                <input type="button" className="btn btn-dark d-flex m-auto" value="Comment" onClick={commit} />
            </div>
            <div className="mt-3">
                <div className="card col-4 m-auto bg-dark p-3">
                    <p className="text-light">Name : </p>
                    <p className="text-light">Review : </p>
                </div>
            </div>

        </div>
    </>
}