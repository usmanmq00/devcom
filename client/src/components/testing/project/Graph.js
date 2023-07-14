import React, { useState, useEffect } from 'react';
import styles from '../../../css/testing/project/style.module.css';
import { Tree, TreeNode } from 'react-organizational-chart';
import styled from 'styled-components'

const StyledNode = styled.div`
  padding: 5px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid red;
`;

const Graph = ({ item }) => {
  return (
    <ul>
      <li>
        <span className={`${styles.graph} tf-nc`} >{item.tagName}</span>
        <ul>
          {item.childNodes && item.childNodes.map((item, i) => (
            <>
              {item?.tagName && <li>
                <span className={`${styles.graph} tf-nc`} >{item.tagName}</span>
                {item?.childNodes && Array.isArray(item.childNodes) &&
                  <ul>
                    {console.log(item, item?.childNodes && Array.isArray(item.childNodes))}
                    {item.childNodes.map((item, i) => (
                      <>
                        {item?.tagName &&
                          <li>
                            <span className={`${styles.graph} tf-nc`} >{item.tagName}</span>
                            {item?.childNodes && Array.isArray(item.childNodes) &&
                              <ul>
                                {item.childNodes.map((item, i) => (
                                  <>
                                    {item?.tagName &&
                                      <li>
                                        <span className={`${styles.graph} tf-nc`} >{item.tagName}</span>
                                        {item?.childNodes && Array.isArray(item.childNodes) &&
                                          <ul>
                                            {item.childNodes.map((item, i) => (
                                              <>
                                                {item?.tagName &&
                                                  <li>
                                                    <span className={`${styles.graph} tf-nc`} >{item.tagName}</span>
                                                    {item?.childNodes && Array.isArray(item.childNodes) &&
                                                      <ul>
                                                        {item.childNodes.map((item, i) => (
                                                          <>
                                                            {item?.tagName &&
                                                              <li>
                                                                <span className={`${styles.graph} tf-nc`} >{item.tagName}</span>
                                                              </li>
                                                            }
                                                          </>
                                                        ))}
                                                      </ul>
                                                    }
                                                  </li>
                                                }
                                              </>
                                            ))}
                                          </ul>
                                        }
                                      </li>
                                    }
                                  </>
                                ))}
                              </ul>
                            }
                          </li>
                        }
                      </>
                    ))}
                  </ul>
                }
              </li>
              }
            </>
          ))
          }
        </ul>
      </li>
    </ul>
  )

}

export default Graph;