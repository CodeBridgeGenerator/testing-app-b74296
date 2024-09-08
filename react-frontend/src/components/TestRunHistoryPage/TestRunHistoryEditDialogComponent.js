import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import client from "../../services/restClient";
import _ from "lodash";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Tag } from 'primereact/tag';
import moment from "moment";
import { InputText } from 'primereact/inputtext';

const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = {};
    for (const key in errorObj.errors) {
        if (Object.hasOwnProperty.call(errorObj.errors, key)) {
            const element = errorObj.errors[key];
            if (element?.message) {
                errMsg.push(element.message);
            }
        }
    }
    return errMsg.length ? errMsg : errorObj.message ? errorObj.message : null;
};

const TestRunHistoryCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);

    

    const onSave = async () => {
        let _data = {
            ServiceName: _entity?.ServiceName,
TestName: _entity?.TestName,
TestStatus: _entity?.TestStatus,
ExecutionDateTimeundefined: _entity?.ExecutionDateTimeundefined,
ExecutedBy: _entity?.ExecutedBy,
ErrorType: _entity?.ErrorType,
ErrorMessage: _entity?.ErrorMessage,
FileLocation: _entity?.FileLocation,
FailureLineNumber: _entity?.FailureLineNumber,
StackTrace: _entity?.StackTrace,
ExecutionDuration: _entity?.ExecutionDuration,
Priority: _entity?.Priority,
RetryCountundefined: _entity?.RetryCountundefined,
        };

        setLoading(true);
        try {
            
        const result = await client.service("testRunHistory").patch(_entity._id, _data);
        props.onHide();
        props.alert({ type: "success", title: "Edit info", message: "Info testRunHistory updated successfully" });
        props.onEditResult(result);
        
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to update info");
            props.alert({ type: "error", title: "Edit info", message: "Failed to update info" });
        }
        setLoading(false);
    };

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError({});
    };

    

    return (
        <Dialog header="Edit TestRunHistory" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="testRunHistory-edit-dialog-component">
                <div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="ServiceName">ServiceName:</label>
            <InputText id="ServiceName" className="w-full mb-3 p-inputtext-sm" value={_entity?.ServiceName} onChange={(e) => setValByKey("ServiceName", e.target.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="TestName">TestName:</label>
            <InputText id="TestName" className="w-full mb-3 p-inputtext-sm" value={_entity?.TestName} onChange={(e) => setValByKey("TestName", e.target.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="TestStatus">TestStatus:</label>
            <InputText id="TestStatus" className="w-full mb-3 p-inputtext-sm" value={_entity?.TestStatus} onChange={(e) => setValByKey("TestStatus", e.target.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="ExecutionDateTimeundefined">ExecutionDateTimeundefined:</label>
            <InputText id="ExecutionDateTimeundefined" className="w-full mb-3 p-inputtext-sm" value={_entity?.ExecutionDateTimeundefined} onChange={(e) => setValByKey("ExecutionDateTimeundefined", e.target.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="ExecutedBy">ExecutedBy:</label>
            <InputText id="ExecutedBy" className="w-full mb-3 p-inputtext-sm" value={_entity?.ExecutedBy} onChange={(e) => setValByKey("ExecutedBy", e.target.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="ErrorType">ErrorType:</label>
            <InputText id="ErrorType" className="w-full mb-3 p-inputtext-sm" value={_entity?.ErrorType} onChange={(e) => setValByKey("ErrorType", e.target.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="ErrorMessage">ErrorMessage:</label>
            <InputText id="ErrorMessage" className="w-full mb-3 p-inputtext-sm" value={_entity?.ErrorMessage} onChange={(e) => setValByKey("ErrorMessage", e.target.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="FileLocation">FileLocation:</label>
            <InputText id="FileLocation" className="w-full mb-3 p-inputtext-sm" value={_entity?.FileLocation} onChange={(e) => setValByKey("FileLocation", e.target.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="FailureLineNumber">FailureLineNumber:</label>
            <InputText id="FailureLineNumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.FailureLineNumber} onChange={(e) => setValByKey("FailureLineNumber", e.target.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="StackTrace">StackTrace:</label>
            <InputText id="StackTrace" className="w-full mb-3 p-inputtext-sm" value={_entity?.StackTrace} onChange={(e) => setValByKey("StackTrace", e.target.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="ExecutionDuration">ExecutionDuration:</label>
            <InputText id="ExecutionDuration" className="w-full mb-3 p-inputtext-sm" value={_entity?.ExecutionDuration} onChange={(e) => setValByKey("ExecutionDuration", e.target.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="Priority">Priority:</label>
            <InputText id="Priority" className="w-full mb-3 p-inputtext-sm" value={_entity?.Priority} onChange={(e) => setValByKey("Priority", e.target.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="RetryCountundefined">RetryCountundefined:</label>
            <InputText id="RetryCountundefined" className="w-full mb-3 p-inputtext-sm" value={_entity?.RetryCountundefined} onChange={(e) => setValByKey("RetryCountundefined", e.target.value)}  required  />
        </span>
        </div>
                <div className="col-12">&nbsp;</div>
                <div className="col-12 md:col-6 field mt-5"><p className="m-0"><Tag value="created At:"></Tag>{" " + moment(_entity?.createdAt).fromNow()}</p></div>
                <div className="col-12 md:col-6 field mt-5"><p className="m-0"><Tag value="created By:"></Tag>{" " +_entity?.createdBy?.name}</p></div>
                <div className="col-12 md:col-6 field mt-5"><p className="m-0"><Tag value="last Updated At:"></Tag>{" " + moment(_entity?.updatedAt).fromNow()}</p></div>
                <div className="col-12 md:col-6 field mt-5"><p className="m-0"><Tag value="last Updated By:"></Tag>{" " +_entity?.updatedBy?.name}</p></div>
                <small className="p-error">
                {Array.isArray(Object.keys(error))
                ? Object.keys(error).map((e, i) => (
                    <p className="m-0" key={i}>
                        {e}: {error[e]}
                    </p>
                    ))
                : error}
            </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    const { user } = state.auth;
    return { user };
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(TestRunHistoryCreateDialogComponent);
