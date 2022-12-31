import { set } from 'mobx';
import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)

    return (
        <Container className="flex flex-col justify-center items-center">
            <Button
                className="m-2 mt-4 p-2 border-2 rounded-md w-[600px] border-teal-600 hover:border-teal-600 hover:text-white hover:bg-teal-600"
                onClick={() => setTypeVisible(true)}
            >
                Добавить тип
            </Button>
            <Button
                className="m-2 p-2 border-2 rounded-md w-[600px] border-teal-600 hover:border-teal-600 hover:text-white hover:bg-teal-600"
                onClick={() => setBrandVisible(true)}
            >
                Добавить бренд
            </Button>
            <Button
                variant={"outline-dark"}
                className="m-2 p-2 border-2 rounded-md w-[600px] border-teal-600 hover:border-teal-600 hover:text-white hover:bg-teal-600"
                onClick={() => setDeviceVisible(true)}
            >
                Добавить устройство
            </Button>
            <CreateBrand  active={brandVisible} setActive={setBrandVisible}/>
            <CreateType active={typeVisible} setActive={setTypeVisible}/>
            <CreateDevice active={deviceVisible} setActive={setDeviceVisible}/>
        </Container>
    );
};

export default Admin;