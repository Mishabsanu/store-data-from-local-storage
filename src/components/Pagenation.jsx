import { useState } from "react";

const data = [
  { id: 1, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZt0h5A35LHrauX4SLMDBlYbuwBclkGxrMkKf4JxYhyRfNNPi-boQwC3na3IgY4WI3AZo&usqp=CAU "},
  { id: 2, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5bb4UMUUlMxZJf6EIfBtbZBFL5lJ-mZ5C2Py74wLGFf0iNUbcxRnLyvn76NarG8KSJEM&usqp=CAU"},
  { id: 3, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFIx2mAxAvNdEnPQGixGCrROsqAvYMfbKwKyKTnkGDeIKLRVRkDUb_CVilRX5luEkK1vE&usqp=CAU"},

];
const Pagenation = () => {
    const itemPerPage=1

    const [curPage,setCurPage]=useState(1)
    const totalPage=Math.ceil(data.length / itemPerPage);
    const startIndex=(curPage-1) *itemPerPage;
    const endIndex=Math.min(startIndex+itemPerPage,data.length);
    
    const curData=data.slice(startIndex,endIndex)

    const handleNext=()=>{
        setCurPage((prv)=>Math.min(prv+1,totalPage))
        
    }
    const handlePrv=()=>{
        setCurPage((prv)=>Math.max(prv-1,1))

    }
    const handleChangePage=(page)=>{
        setCurPage(page)


    }
    const pageNumbers=Array.from({length:totalPage},(_,index)=>index+1)


  return (
    <div className="slider-container">
         
        {curData?.map((image)=><div className="slider" key={image.id}>
            <img src={image.image} alt="" />
            
        </div>)}
        <button onClick={handlePrv} disabled={curPage==1} >Prev</button>
        {pageNumbers.map((pageNumber)=>
        <button  style={{margin:"0 5px",fontWeight:curPage===pageNumber ? "bold":"normal"}} key={pageNumber} onClick={()=>{handleChangePage(pageNumber)}}>{pageNumber}</button>
        )}

        <button onClick={handleNext} disabled={curPage===totalPage}>Next</button>


    </div>

  );
};

export default Pagenation;
