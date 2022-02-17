import styled from 'styled-components'

export const MenuContainer = styled.div`
    background-color: #333;
`;

export const MenuList = styled.div`
    background-color: #333;
    max-width: 1280px;
    width: 100%;
    height: 28px;
    margin: 0 auto;
    padding-top: 2px;
    text-align: center;

    ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 0px;
        padding-left: 0px;
        a {
            width: 100%;

            
            li {
                display: flex;
                align-items: center;
                text-align: center;
                overflow: hidden;
                color: #fff;

                span {
                    padding-left: 6px;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    font-size: 14px;
                    font-weight: 500;
                }

                &:hover {
                    color: #ccc;
                }
            }
        }
    }

  @media (min-width: 374px) and (max-width: 800px) {
          width: 100%;          
          height: 220px;
          ul {
              width: 100%;
              display: flex;
              flex-wrap: wrap;
              a {
                  width: 100%;
                  margin: 0 0.6rem;
              }
          }
      }
`;
