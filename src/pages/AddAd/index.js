import React, { useState, useEffect, useRef } from 'react';
import { PageArea } from './styled';

import useApi from '../../helpers/Api';

//FORMATAÇÃO DO PREÇO
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents';


const Page = () => {

    const api = useApi();




    const fileField = useRef();
    const [ categories, setCategories] = useState([]);

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [priceNegotiable, setPriceNegotiable] = useState(false);
    const [desc, setDesc] = useState('');    

    const [ disabled, setDisabled] = useState(false);
    const [ error, setError ] = useState('');
    

    useEffect(()=> {
        const getCategories = async ()=> {
            const cats = await api.getCategories();
            setCategories(cats);
        }


        getCategories();
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);

        // const json = await api.login(email, password);

        // if(json.error){
        //     setError(json.error);
        // }else {
        //     doLogin(json.token, rememberPassword);
        //     window.location.href = "/";
        // }


        //APÓS A VERIFICAÇÃO ELE DESBLOQUEIA OS CAMPOS E LIMPA OS VALUES
        setDisabled(false);
        // setEmail('');
        // setPassword('');
        // setRememberPassword('');
    }

    //FORMATAÇÃO DO PREÇO
    const priceMask = createNumberMask({
        prefix:'R$ ',
        includeThousandsSeparator:true,
        thousandsSeparatorSymbol:'.',
        allowDecimal:true,
        decimalSymbol:'.',
        decimalLimit:'4'
    });


    return(
        <PageContainer>
           <PageTitle>Post um Anuncio</PageTitle>
           <PageArea>
               {error &&
                <ErrorMessage>{error}</ErrorMessage>
               }

               <form onSubmit={handleSubmit}>
                   <label className="area">
                        <div className="area--title">Titulo</div>
                        <div className="area--input">
                            <input 
                                type="text"
                                disabled={disabled}
                                value={title}
                                onChange={e=>setTitle(e.target.value)}
                                required
                                />
                        </div>
                   </label>

                   <label className="area">
                        <div className="area--title">Categoria</div>
                        <div className="area--input">
                                <select
                                    disabled={disabled}
                                    onChange={e=>setCategory(e.target.value)}
                                    required
                                >
                                    <option></option>
                                    {categories && 
                                        categories.map(i=>
                                            <option key={i.id} value={i.id}>{i.name}</option>
                                    )}
                                </select>
                        </div>
                   </label>

                   <label className="area">
                        <div className="area--title">Preço</div>
                        <div className="area--input">
                           <MaskedInput
                                mask={priceMask}
                                placeholder="RS "
                                disabled={disabled || priceNegotiable}
                                value={price}
                                decimalLimit='4'
                                onChange={e=>setPrice(e.target.value)}                                            
                           />

                        </div>
                   </label>

                   <label className="area">
                        <div className="area--title">Preço Negociável</div>
                        <div className="area--input">
                          <input
                            type="checkbox"
                            disabled={disabled}
                            checked={priceNegotiable}
                            onChange={e=>setPriceNegotiable(!priceNegotiable)}
                          />
                        </div>
                   </label>

                   <label className="area">
                        <div className="area--title">Descrição</div>
                        <div className="area--input">
                         <textarea
                            disabled={disabled}
                            value={desc}
                            onChange={e=>setDesc(e.target.value)}
                         >
                         </textarea>
                        </div>
                   </label>

                   <label className="area">
                        <div className="area--title">Imagens</div>
                        <div className="area--input">
                         <input
                            type="file"
                            disabled={disabled}
                            ref={fileField}
                            multiple
                         />
                        </div>
                   </label>

                   <label className="area button">
                        <button >Adicionar Anúncio</button>
                   </label>

               </form>
           </PageArea>
        </PageContainer>
         )
}

export default Page;