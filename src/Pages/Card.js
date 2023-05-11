import React from 'react';
import {Button , Container , Col , Row , Table} from "react-bootstrap";
import {useCart} from "react-use-cart";
import {useThemeHook} from "../GlobalComponents/ThemeProvider";
import {BsCartCheck , BsCartX} from "react-icons/bs";


const Card = () => {
    const [theme] = useThemeHook()
    const {
        isEmpty,
        items,
        cardTotal,
        updateItemQuantity,
        removeItem,
        emptyCard,
    } = useCart()


    return (
       <Container className='py-4 mt-5'>
           <h1 className={`${theme? 'text-light' : 'text-light-primary'}my-5 text-center`}>
               {isEmpty ? 'Your Card  is  Empty' :'The Card'}
           </h1>
           <Row className='justify-content-center'>
               <Table responsive='sm' striped bordered hover variant={theme? 'dark' :'light'} className='mb-5'>
                   <tbody>
                   {items.map((item , index)=>{
                       return(
                           <tr key={index}>
                               <td>
                                   <div style={{background:'white', height:'8rem', overflow:'hidden', display:'flex',
                                       justifyContent:'center', alignItems:'center'}}>
                                       <div style={{padding:'.1rem'}}>
                                           <img src={item.image} style={{width:'6rem'}} alt={item.title}/>
                                       </div>
                                   </div>
                               </td>
                               <td>
                                   <h6 style={{whiteSpace:'nowrap',width:'14rem', overflow:'hidden',textOverflow:'ellipsis'}}>
                                       {item.title}
                                   </h6>
                               </td>
                               <td>Rs. {item.price}</td>
                               <td>Quantity {item.quantity}</td>
                               <td>
                                   <button onClick={() => updateItemQuantity(item.id, item.quantity -1)} className='ms-2'  style={{background:'#191659' , color:'white',border:'none',padding:'5px 16px',borderRadius:'10px'}}>-</button>
                                   <button onClick={() => updateItemQuantity(item.id, item.quantity +1)} className='ms-2' style={{background:'#191659' , color:'white',border:'none',padding:'5px 16px',borderRadius:'10px'}}>+</button>
                                   <button variant='danger' onClick={() => removeItem(item.id)} className='ms-2' style={{background:'red' , color:'white',border:'none',padding:'5px 16px',borderRadius:'10px'}}>Remove Item</button>
                               </td>
                           </tr>
                       )
                   })}
                   </tbody>
               </Table>
               {!isEmpty &&
                   <Row
                   style={{position:'fixed' , bottom:'0'}}
                   className={`${theme ? 'bg-light-black text-light' : 'bg-light text-black'} justify-content-center w-100`}>
                       <Col className='py-2'>
                           <h4>Total Price:Rs.{cardTotal}</h4>
                       </Col>
                       <Col className='p-0 md={4}'>
                           <button variant='danger'
                           className='m-2'
                           onClick={() => emptyCard} style={{background:'red' , color:'white',border:'none'}}>
                               <BsCartX size='1.7rem'/>
                               Clear Card
                           </button>
                           <button variant='success'
                                   className='m-2'
                                    style={{background:'#09cc09' , color:'white',border:'none'}}>
                               <BsCartCheck size='1.7rem'/>
                               Clear Card
                           </button>
                       </Col>
                   </Row>
               }
           </Row>
       </Container>
    );
};

export default Card;