import React, { useEffect, useRef, useState } from "react";

export default function Comments() {
    const [cards, setCards] = useState([]);
    const [nameBlank, setNameBlank] = useState();
    const [commentBlank, setCommentBlank] = useState();

    const nameInput = useRef();
    const commentInput = useRef();

    const commit = (e) => {
        if (nameInput.current.value === "") {
            setNameBlank("FILL IT");
        } else {
            const data = {
                name: nameInput.current.value,
                comments: commentInput.current.value
            };
            setCards([...cards, data]);
            e.preventDefault();
            e.target.reset();
        }
    }

    const Card = (props) => {
        return <>
            <div className="mt-3">
                <div className="card col-4 m-auto bg-dark p-3">
                    <p className="text-light">Name : {props.name}</p>
                    <p className="text-light">Review : {props.review}</p>
                </div>
            </div></>
    }

    return <>
        <div className="container">
            <h3 className="text-center">Comment Section</h3>
            <div className="col-6 m-auto">
                <form action="" onSubmit={commit} >
                    <span className="text-danger fw-semibold">{nameBlank}</span><input type="text" placeholder="Name" className="form-control mb-3 border border-dark" ref={nameInput} />
                    <span className="text-danger fw-semibold">{commentBlank}</span><input type="text" placeholder="Comment" className="form-control border border-dark mb-2" ref={commentInput} />
                    <input type="submit" className="btn btn-dark d-flex m-auto" value="Comment" />
                </form>
            </div>
            <div className="commentSection">
                {cards.map((cv, index) => (
                    < Card key={index} name={cv.name} review={cv.comments} />
                ))}
            </div>
        </div>
    </>
}