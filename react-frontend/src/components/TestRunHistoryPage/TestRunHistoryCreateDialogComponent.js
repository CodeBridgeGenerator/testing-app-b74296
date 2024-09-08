import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import client from "../../services/restClient";
import _ from "lodash";
import initilization from "../../utils/init";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';

const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = {};
    for (const key in errorObj.errors) {
      if (Object.hasOwnProperty.call(errorObj.errors, key)) {
        const element = errorObj.errors[key];
        if (element?.message) {
          errMsg[key] = element.message;
        }
      }
    }
    return errMsg.length ? errMsg : errorObj.message ? { error : errorObj.message} : {};
};

const TestRunHistoryCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    

    useEffect(() => {
        let init  = {};
        if (!_.isEmpty(props?.entity)) {
            init = initilization({ ...props?.entity, ...init }, [], setError);
        }
        set_entity({...init});
    }, [props.show]);

    const validate = () => {
        let ret = true;
        const error = {};
          
            if (_.isEmpty(_entity?.ServiceName)) {
                error["ServiceName"] = `ServiceName field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.TestName)) {
                error["TestName"] = `TestName field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.TestStatus)) {
                error["TestStatus"] = `TestStatus field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.ExecutionDateTimeundefined)) {
                error["ExecutionDateTimeundefined"] = `ExecutionDateTimeundefined field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.ExecutedBy)) {
                error["ExecutedBy"] = `ExecutedBy field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.ErrorType)) {
                error["ErrorType"] = `ErrorType field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.ErrorMessage)) {
                error["ErrorMessage"] = `ErrorMessage field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.FileLocation)) {
                error["FileLocation"] = `FileLocation field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.FailureLineNumber)) {
                error["FailureLineNumber"] = `FailureLineNumber field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.StackTrace)) {
                error["StackTrace"] = `StackTrace field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.ExecutionDuration)) {
                error["ExecutionDuration"] = `ExecutionDuration field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.Priority)) {
                error["Priority"] = `Priority field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.RetryCountundefined)) {
                error["RetryCountundefined"] = `RetryCountundefined field is required`;
                ret = false;
            }
        if (!ret) setError(error);
        return ret;
    }

    const onSave = async () => {
        if(!validate()) return;
        let _data = {
            ServiceName: _entity?.ServiceName,TestName: _entity?.TestName,TestStatus: _entity?.TestStatus,ExecutionDateTimeundefined: _entity?.ExecutionDateTimeundefined,ExecutedBy: _entity?.ExecutedBy,ErrorType: _entity?.ErrorType,ErrorMessage: _entity?.ErrorMessage,FileLocation: _entity?.FileLocation,FailureLineNumber: _entity?.FailureLineNumber,StackTrace: _entity?.StackTrace,ExecutionDuration: _entity?.ExecutionDuration,Priority: _entity?.Priority,RetryCountundefined: _entity?.RetryCountundefined,
            createdBy: props.user._id,
            updatedBy: props.user._id
        };

        setLoading(true);

        try {
            
        const result = await client.service("testRunHistory").create(_data);
        props.onHide();
        props.alert({ type: "success", title: "Create info", message: "Info TestRunHistory created successfully" });
        props.onCreateResult(result);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create in TestRunHistory" });
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
        <Dialog header="Create TestRunHistory" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="testRunHistory-create-dialog-component">
            <div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="ServiceName">ServiceName:</label>
                <InputText id="ServiceName" className="w-full mb-3 p-inputtext-sm" value={_entity?.ServiceName} onChange={(e) => setValByKey("ServiceName", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["ServiceName"]) ? (
              <p className="m-0" key="error-ServiceName">
                {error["ServiceName"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="TestName">TestName:</label>
                <InputText id="TestName" className="w-full mb-3 p-inputtext-sm" value={_entity?.TestName} onChange={(e) => setValByKey("TestName", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["TestName"]) ? (
              <p className="m-0" key="error-TestName">
                {error["TestName"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="TestStatus">TestStatus:</label>
                <InputText id="TestStatus" className="w-full mb-3 p-inputtext-sm" value={_entity?.TestStatus} onChange={(e) => setValByKey("TestStatus", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["TestStatus"]) ? (
              <p className="m-0" key="error-TestStatus">
                {error["TestStatus"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="ExecutionDateTimeundefined">ExecutionDateTimeundefined:</label>
                <InputText id="ExecutionDateTimeundefined" className="w-full mb-3 p-inputtext-sm" value={_entity?.ExecutionDateTimeundefined} onChange={(e) => setValByKey("ExecutionDateTimeundefined", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["ExecutionDateTimeundefined"]) ? (
              <p className="m-0" key="error-ExecutionDateTimeundefined">
                {error["ExecutionDateTimeundefined"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="ExecutedBy">ExecutedBy:</label>
                <InputText id="ExecutedBy" className="w-full mb-3 p-inputtext-sm" value={_entity?.ExecutedBy} onChange={(e) => setValByKey("ExecutedBy", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["ExecutedBy"]) ? (
              <p className="m-0" key="error-ExecutedBy">
                {error["ExecutedBy"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="ErrorType">ErrorType:</label>
                <InputText id="ErrorType" className="w-full mb-3 p-inputtext-sm" value={_entity?.ErrorType} onChange={(e) => setValByKey("ErrorType", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["ErrorType"]) ? (
              <p className="m-0" key="error-ErrorType">
                {error["ErrorType"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="ErrorMessage">ErrorMessage:</label>
                <InputText id="ErrorMessage" className="w-full mb-3 p-inputtext-sm" value={_entity?.ErrorMessage} onChange={(e) => setValByKey("ErrorMessage", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["ErrorMessage"]) ? (
              <p className="m-0" key="error-ErrorMessage">
                {error["ErrorMessage"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="FileLocation">FileLocation:</label>
                <InputText id="FileLocation" className="w-full mb-3 p-inputtext-sm" value={_entity?.FileLocation} onChange={(e) => setValByKey("FileLocation", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["FileLocation"]) ? (
              <p className="m-0" key="error-FileLocation">
                {error["FileLocation"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="FailureLineNumber">FailureLineNumber:</label>
                <InputText id="FailureLineNumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.FailureLineNumber} onChange={(e) => setValByKey("FailureLineNumber", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["FailureLineNumber"]) ? (
              <p className="m-0" key="error-FailureLineNumber">
                {error["FailureLineNumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="StackTrace">StackTrace:</label>
                <InputText id="StackTrace" className="w-full mb-3 p-inputtext-sm" value={_entity?.StackTrace} onChange={(e) => setValByKey("StackTrace", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["StackTrace"]) ? (
              <p className="m-0" key="error-StackTrace">
                {error["StackTrace"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="ExecutionDuration">ExecutionDuration:</label>
                <InputText id="ExecutionDuration" className="w-full mb-3 p-inputtext-sm" value={_entity?.ExecutionDuration} onChange={(e) => setValByKey("ExecutionDuration", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["ExecutionDuration"]) ? (
              <p className="m-0" key="error-ExecutionDuration">
                {error["ExecutionDuration"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="Priority">Priority:</label>
                <InputText id="Priority" className="w-full mb-3 p-inputtext-sm" value={_entity?.Priority} onChange={(e) => setValByKey("Priority", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["Priority"]) ? (
              <p className="m-0" key="error-Priority">
                {error["Priority"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="RetryCountundefined">RetryCountundefined:</label>
                <InputText id="RetryCountundefined" className="w-full mb-3 p-inputtext-sm" value={_entity?.RetryCountundefined} onChange={(e) => setValByKey("RetryCountundefined", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["RetryCountundefined"]) ? (
              <p className="m-0" key="error-RetryCountundefined">
                {error["RetryCountundefined"]}
              </p>
            ) : null}
          </small>
            </div>
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
