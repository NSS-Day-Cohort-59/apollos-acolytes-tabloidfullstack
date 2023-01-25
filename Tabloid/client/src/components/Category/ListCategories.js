import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Form, Input, Label, Table } from "reactstrap"
import { getAllCategories } from "../../modules/categoryManager"
import Pagination from "../Helpers/Pagination"
import Category from "./Category"

const ListCategories = () => {
    const [categories, setCategories] = useState([]),
        [offset, setOffset] = useState(0),
        [total, setTotal] = useState(0),
        [increment, setIncrement] = useState(10),
        navigate = useNavigate()

    useEffect(() => {
        getAllCategories(true, increment, offset)
            .then(data => {
                setCategories(data.categories)
                setTotal(data.total)
            })
    }, [offset, increment])

    return (
        <>
            <h2>Categories</h2>
            <Button color="primary" onClick={() => navigate("new")}>Create</Button>
            <Form className="d-flex" onSubmit={(e) => { e.preventDefault(); setIncrement(parseInt(document.querySelector(`input[name="increment"]`).value)) }}>
                <Label className="align-self-center" for="increment">Amount per page</Label>
                <Input className="w-auto mx-2" type="number" name="increment" />
                <Button>Update</Button>
            </Form>
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {categories?.map(c => <Category key={`category--${c.id}`} cat={c} />)}
                </tbody>
            </Table>
            <Pagination total={total} increment={increment} offset={offset} setOffset={setOffset} />
            <div>{offset + 1} - {offset + increment > total ? total : offset + increment} of {total}</div>
        </>
    )
}

export default ListCategories