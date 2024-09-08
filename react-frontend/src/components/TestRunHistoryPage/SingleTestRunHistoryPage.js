import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { Tag } from 'primereact/tag';
import moment from "moment";
import { InputText } from 'primereact/inputtext';
import ProjectLayout from "../Layouts/ProjectLayout";


const SingleTestRunHistoryPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();

    

    useEffect(() => {
        //on mount
        client
            .service("testRunHistory")
            .get(urlParams.singleTestRunHistoryId, { query: { $populate: [            {
                path: "createdBy",
                service: "users",
                select: ["name"],
              },{
                path: "updatedBy",
                service: "users",
                select: ["name"],
              },] }})
            .then((res) => {
                set_entity(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "TestRunHistory", type: "error", message: error.message || "Failed get testRunHistory" });
            });
    }, [props,urlParams.singleTestRunHistoryId]);


    const goBack = () => {
        navigate("/testRunHistory");
    };

    return (
        <ProjectLayout>
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">TestRunHistory</h3>
                </div>
                <p>testRunHistory/{urlParams.singleTestRunHistoryId}</p>
                {/* ~cb-project-dashboard~ */}
            </div>
            <div className="card w-full">
                <div className="grid ">

            <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">ServiceName</label><p className="m-0 ml-3" >{_entity?.ServiceName}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">TestName</label><p className="m-0 ml-3" >{_entity?.TestName}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">TestStatus</label><p className="m-0 ml-3" >{_entity?.TestStatus}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">ExecutionDateTimeundefined</label><p className="m-0 ml-3" >{_entity?.ExecutionDateTimeundefined}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">ExecutedBy</label><p className="m-0 ml-3" >{_entity?.ExecutedBy}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">ErrorType</label><p className="m-0 ml-3" >{_entity?.ErrorType}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">ErrorMessage</label><p className="m-0 ml-3" >{_entity?.ErrorMessage}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">FileLocation</label><p className="m-0 ml-3" >{_entity?.FileLocation}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">FailureLineNumber</label><p className="m-0 ml-3" >{_entity?.FailureLineNumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">StackTrace</label><p className="m-0 ml-3" >{_entity?.StackTrace}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">ExecutionDuration</label><p className="m-0 ml-3" >{_entity?.ExecutionDuration}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Priority</label><p className="m-0 ml-3" >{_entity?.Priority}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">RetryCountundefined</label><p className="m-0 ml-3" >{_entity?.RetryCountundefined}</p></div>
            

                    <div className="col-12">&nbsp;</div>
                    <div className="col-12 md:col-6 lg:col-3">
                        <Tag value="created By:"></Tag>
                        <p className="m-0 ml-3">{_entity?.createdBy?.name}</p>
                    </div>
                    <div className="col-12 md:col-6 lg:col-3">
                        <Tag value="created At:"></Tag>
                        <p className="m-0 ml-3">{moment(_entity?.createdAt).fromNow()}</p>
                    </div>
                    <div className="col-12 md:col-6 lg:col-3">
                        <Tag value="last Updated By:"></Tag>
                        <p className="m-0 ml-3">{_entity?.updatedBy?.name}</p>
                    </div>
                    <div className="col-12 md:col-6 lg:col-3">
                        <Tag value="updated At:"></Tag>
                        <p className="m-0 ml-3">{moment(_entity?.updatedAt).fromNow()}</p>
                    </div>
                </div>
            </div>
        </div>
        
        </ProjectLayout>
    );
};

const mapState = (state) => {
    const { user, isLoggedIn } = state.auth;
    return { user, isLoggedIn };
};

const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(SingleTestRunHistoryPage);
