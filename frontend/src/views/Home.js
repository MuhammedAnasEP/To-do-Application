import React, { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'
import useAxiosPrivate from "../hooks/useAxiosPrivate"

export default function Home() {

    const { data, setData } = useAuth()
    const axiosPrivateInstance = useAxiosPrivate()
    

    useEffect(() => {
        async function getUser() {
            const { data } = await axiosPrivateInstance.get('todo/list')
            setData(data)
        }
    }, [])

    return (
        
        <>
            <ul class="list-group list-group-light">
                <li class="list-group-item">
                    <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                    First checkbox
                </li>
            </ul>
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}