import React, { input } from 'react'
import TopWrapper from "../../components/TopWrapper";
import { BREADCRUMB } from "./constants";

import * as S from './styles';

const Contact = () => {
  return (
    <S.ContactContainer>
      <TopWrapper titlePage="Liên hệ" breadcrumb={BREADCRUMB} />
      <S.Container>
        <S.ContactContent>
        <div id="contact" class="content-section">
                <h2 class="section-heading">CONTACT</h2>
                <p class="section-sub-heading">Fan? Drop a note!</p>                
                
                <div class="row contact-content">
                    <div class="col col-half contact-info">
                        <p><i class="ti-location-pin"></i>Los Angeles, California</p>
                        <p><i class="ti-mobile"></i>Phone: +00 161616</p>
                        <p><i class="ti-email"></i>Email: nnta@gmail.com</p>
                    </div>
                    <div class="col col-half">
                        <form action="">
                            <div class="row">
                                <div class="col col-half contact-form">
                                    <input type="text" name="" placeholder="Name" required id="" class="form-control"/>
                                </div>
                                <div class="col col-half contact-form">
                                    <input type="email" name="" placeholder="Email" required id="" class="form-control"/>
                                </div>
                            </div>
                            <div class="row mt-8">
                                <div class="col col-full contact-form">
                                    <input type="text" name="" placeholder="Message" required id="" class="form-control"/>
                                </div>
                            </div>
                            <input class="btn mt-16 pull-right" type="submit" value="SEND"/>
                        </form>
                    </div>
                </div>
            </div>
        </S.ContactContent>
      </S.Container>
    </S.ContactContainer>
  )
}

export default Contact
