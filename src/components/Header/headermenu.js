import * as React from 'react';
import './headermenu.css'
import MenuItem from './MenuItem';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export default function HeaderMenu() {

  var [cat1,setCat1]=useState([]);
  var [q1,setQ1]=useState([]);
  var [cat2,setCat2]=useState([]);
  var [q2,setQ2]=useState([]);

  var [subCat1,setSubCat1]=useState([]);
  var [subCat2,setSubCat2]=useState([]);

  var [subCat1Names,setSubCat1Names]=useState([]);
  var [subCat2Names,setSubCat2Names]=useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:8045/findChildrenByCatId/2")
      .then((response) => {
        var ab=response.data;var arr1=[];var arrQ1=[];var brr=[];var bc=[];
        for(var a of ab) {
          var t1=[];
          arr1.push(a.title);
           arrQ1.push(a.cat_id);

          axios.get("http://localhost:8045/findChildrenByCatId/"+a.cat_id)
          .then((res)=> {
        brr.push(res.data);

              
              for(var w of res.data) {
                bc.push(w.title);
        

              }
          }
          )
        } setCat1(arr1);setQ1(arrQ1);
        setSubCat1(brr);
        setSubCat1Names(bc);

      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });

      axios
      .get("http://localhost:8045/findChildrenByCatId/1")
      .then((response) => {

        var ab2=response.data;var arr2=[];var arrQ2=[];var brr2=[];var bc2;
        for(var a2 of ab2) {
          arr2.push(a2.title);
          arrQ2.push(a2.cat_id);

          axios.get("http://localhost:8045/findChildrenByCatId/"+a2.cat_id)
          .then((res)=> {
              brr2.push(res.data);
              for(var w2 of res.data) {
                bc2.push(w2.title);
              }
          }
          )
        } setCat2(arr2);setQ2(arrQ2); setSubCat2(brr2);setSubCat2Names(bc2);


      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });

  }, []);

  return (
    <div style={{display: "flex", margin: "4px 0"}}>
    
      <MenuItem title={"Wine"} subMenu={cat1} catIds={q1} subCatData={subCat1} subcatNamesProp={subCat1Names} />
      <MenuItem title={"Beer"} subMenu={cat2}  catIds={q2} subCatData={subCat2} subcatNamesProp={subCat2Names} />


    </div>
  );
}