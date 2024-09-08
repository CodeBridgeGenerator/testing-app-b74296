import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState, useRef } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { useParams } from "react-router-dom";
import moment from "moment";
import UploadService from "../../services/uploadService";
import { InputText } from 'primereact/inputtext';
import { Dialog } from "primereact/dialog";
import { MultiSelect } from "primereact/multiselect";
import DownloadCSV from "../../utils/DownloadCSV";

const TestRunHistoryDataTable = ({ items, fields, onEditRow, onRowDelete, onRowClick, searchDialog, setSearchDialog,   showUpload, setShowUpload,
    showFilter, setShowFilter,
    showColumns, setShowColumns, onClickSaveFilteredfields ,
    selectedFilterFields, setSelectedFilterFields,
    selectedHideFields, setSelectedHideFields, onClickSaveHiddenfields, loading}) => {
    const dt = useRef(null);
    const urlParams = useParams();
    const [globalFilter, setGlobalFilter] = useState('');

const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.ServiceName}</p>
const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.TestName}</p>
const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.TestStatus}</p>
const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.ExecutionDateTimeundefined}</p>
const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.ExecutedBy}</p>
const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.ErrorType}</p>
const pTemplate6 = (rowData, { rowIndex }) => <p >{rowData.ErrorMessage}</p>
const pTemplate7 = (rowData, { rowIndex }) => <p >{rowData.FileLocation}</p>
const pTemplate8 = (rowData, { rowIndex }) => <p >{rowData.FailureLineNumber}</p>
const pTemplate9 = (rowData, { rowIndex }) => <p >{rowData.StackTrace}</p>
const pTemplate10 = (rowData, { rowIndex }) => <p >{rowData.ExecutionDuration}</p>
const pTemplate11 = (rowData, { rowIndex }) => <p >{rowData.Priority}</p>
const pTemplate12 = (rowData, { rowIndex }) => <p >{rowData.RetryCountundefined}</p>
    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowData._id)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    const pCreatedAt = (rowData, { rowIndex }) => <p>{moment(rowData.createdAt).fromNow()}</p>;
    const pUpdatedAt = (rowData, { rowIndex }) => <p>{moment(rowData.updatedAt).fromNow()}</p>;
    const pCreatedBy = (rowData, { rowIndex }) => <p>{rowData.createdBy?.name}</p>;
    const pUpdatedBy = (rowData, { rowIndex }) => <p>{rowData.updatedBy?.name}</p>;
    const paginatorLeft = <Button type="button" icon="pi pi-upload" text onClick={() => setShowUpload(true)} disabled={!false}/>;
    const paginatorRight = DownloadCSV({ data : items, fileName : "testRunHistory"});
    const exportCSV = () => {dt.current?.exportCSV();};

    return (
        <>
        <DataTable value={items} ref={dt} removableSort onRowClick={onRowClick} scrollable rowHover stripedRows paginator rows={10} rowsPerPageOptions={[10, 50, 250, 500]} size={"small"}  paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight} rowClassName="cursor-pointer" alwaysShowPaginator={!urlParams.singleUsersId} loading={loading}>
<Column field="ServiceName" header="ServiceName" body={pTemplate0} filter={selectedFilterFields.includes("ServiceName")} hidden={selectedHideFields?.includes("ServiceName")}  sortable style={{ minWidth: "8rem" }} />
<Column field="TestName" header="TestName" body={pTemplate1} filter={selectedFilterFields.includes("TestName")} hidden={selectedHideFields?.includes("TestName")}  sortable style={{ minWidth: "8rem" }} />
<Column field="TestStatus" header="TestStatus" body={pTemplate2} filter={selectedFilterFields.includes("TestStatus")} hidden={selectedHideFields?.includes("TestStatus")}  sortable style={{ minWidth: "8rem" }} />
<Column field="ExecutionDateTimeundefined" header="ExecutionDateTimeundefined" body={pTemplate3} filter={selectedFilterFields.includes("ExecutionDateTimeundefined")} hidden={selectedHideFields?.includes("ExecutionDateTimeundefined")}  sortable style={{ minWidth: "8rem" }} />
<Column field="ExecutedBy" header="ExecutedBy" body={pTemplate4} filter={selectedFilterFields.includes("ExecutedBy")} hidden={selectedHideFields?.includes("ExecutedBy")}  sortable style={{ minWidth: "8rem" }} />
<Column field="ErrorType" header="ErrorType" body={pTemplate5} filter={selectedFilterFields.includes("ErrorType")} hidden={selectedHideFields?.includes("ErrorType")}  sortable style={{ minWidth: "8rem" }} />
<Column field="ErrorMessage" header="ErrorMessage" body={pTemplate6} filter={selectedFilterFields.includes("ErrorMessage")} hidden={selectedHideFields?.includes("ErrorMessage")}  sortable style={{ minWidth: "8rem" }} />
<Column field="FileLocation" header="FileLocation" body={pTemplate7} filter={selectedFilterFields.includes("FileLocation")} hidden={selectedHideFields?.includes("FileLocation")}  sortable style={{ minWidth: "8rem" }} />
<Column field="FailureLineNumber" header="FailureLineNumber" body={pTemplate8} filter={selectedFilterFields.includes("FailureLineNumber")} hidden={selectedHideFields?.includes("FailureLineNumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="StackTrace" header="StackTrace" body={pTemplate9} filter={selectedFilterFields.includes("StackTrace")} hidden={selectedHideFields?.includes("StackTrace")}  sortable style={{ minWidth: "8rem" }} />
<Column field="ExecutionDuration" header="ExecutionDuration" body={pTemplate10} filter={selectedFilterFields.includes("ExecutionDuration")} hidden={selectedHideFields?.includes("ExecutionDuration")}  sortable style={{ minWidth: "8rem" }} />
<Column field="Priority" header="Priority" body={pTemplate11} filter={selectedFilterFields.includes("Priority")} hidden={selectedHideFields?.includes("Priority")}  sortable style={{ minWidth: "8rem" }} />
<Column field="RetryCountundefined" header="RetryCountundefined" body={pTemplate12} filter={selectedFilterFields.includes("RetryCountundefined")} hidden={selectedHideFields?.includes("RetryCountundefined")}  sortable style={{ minWidth: "8rem" }} />
            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
            {/*<Column field="createdAt" header="created" body={pCreatedAt} sortable style={{ minWidth: "8rem" }} />*/}
            {/*<Column field="updatedAt" header="updated" body={pUpdatedAt} sortable style={{ minWidth: "8rem" }} />*/}
            {/*<Column field="createdBy" header="createdBy" body={pCreatedBy} sortable style={{ minWidth: "8rem" }} />*/}
            {/*<Column field="updatedBy" header="updatedBy" body={pUpdatedBy} sortable style={{ minWidth: "8rem" }} />*/}
        </DataTable>
        <Dialog header="Upload TestRunHistory Data" visible={showUpload} onHide={() => setShowUpload(false)}>
        <UploadService />
      </Dialog>

      <Dialog header="Search TestRunHistory" visible={searchDialog} onHide={() => setSearchDialog(false)}>
      Search
    </Dialog>
    <Dialog
        header="Filter Users"
        visible={showFilter}
        onHide={() => setShowFilter(false)}
      >
        <div className="card flex justify-content-center">
          <MultiSelect
            value={selectedFilterFields}
            onChange={(e) => setSelectedFilterFields(e.value)}
            options={fields}
            optionLabel="name"
            optionValue="value"
            filter
            placeholder="Select Fields"
            maxSelectedLabels={6}
            className="w-full md:w-20rem"
          />
        </div>
        <Button
          text
          label="save as pref"
          onClick={() => {
            console.log(selectedFilterFields);
            onClickSaveFilteredfields(selectedFilterFields);
            setSelectedFilterFields(selectedFilterFields);
            setShowFilter(false)
          }}
        ></Button>
      </Dialog>

      <Dialog
        header="Hide Columns"
        visible={showColumns}
        onHide={() => setShowColumns(false)}
      >
        <div className="card flex justify-content-center">
          <MultiSelect
            value={selectedHideFields}
            onChange={(e) => setSelectedHideFields(e.value)}
            options={fields}
            optionLabel="name"
            optionValue="value"
            filter
            placeholder="Select Fields"
            maxSelectedLabels={6}
            className="w-full md:w-20rem"
          />
        </div>
        <Button
          text
          label="save as pref"
          onClick={() => {
            console.log(selectedHideFields);
            onClickSaveHiddenfields(selectedHideFields);
            setSelectedHideFields(selectedHideFields);
            setShowColumns(false)
          }}
        ></Button>
      </Dialog>
        </>
    );
};

export default TestRunHistoryDataTable;