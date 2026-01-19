import styled from 'styled-components'

export const MenuContainer = styled.div`
    background-color: #333;
    width: 100%;
`;

export const MenuList = styled.div`
    background-color: #333;
    max-width: 1280px;
    width: 100%;
    height: 40px;
    margin: 0 auto;
    display: flex;
    align-items: center;

    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin: 0;
        padding: 0;
        list-style: none;

        a {
            text-decoration: none;
            
            li {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 6px;
                color: #fff;
                white-space: nowrap;

                svg, .anticon {
                    display: flex;
                    align-items: center;
                    font-size: 14px;
                }

                span {
                    font-size: 13px;
                    font-weight: 500;
                    line-height: 1;
                }

                &:hover {
                    color: #ccc;
                    background-color: rgba(255, 255, 255, 0.1);
                }
            }
        }
    }

    @media (max-width: 1200px) {
        ul a li {
            padding: 8px 12px;
            span {
                font-size: 12px;
            }
        }
    }

    @media (max-width: 992px) {
        ul a li {
            padding: 8px 8px;
            span {
                font-size: 11px;
            }
        }
    }

    @media (max-width: 800px) {
        height: auto;
        ul {
            flex-wrap: wrap;
            justify-content: flex-start;
            
            a {
                li {
                    padding: 10px 12px;
                }
            }
        }
    }
`;
