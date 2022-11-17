import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Input, message, Space } from "antd";
import React, { useEffect, useState } from 'react';
import './funtab.css';

const SearchTools = () => {

    const [seachEngine, setSearchEngine] = useState('0')//定义所选搜索引擎的key值
    const [searchContent, setSearchContent] = useState('')//定义搜索的内容
    //定义搜索下拉菜单中的图标的样式
    const imgStyle2 = {
        width: '18px',
        height: '18px',
        marginTop: '5px',
        marginBottom: '5px'
    }

    //搜索引擎下拉菜单
    const items = [
        {
            label: '百度',
            key: "0",
            link: 'https://www.baidu.com/s?wd=',
            icon: <img src='http://www.baidu.com/favicon.ico' style={imgStyle2} alt='' />,
        },
        {
            label: '必应',
            key: "1",
            link: 'https://cn.bing.com/search?q',
            icon: <img src='https://bing.com/favicon.ico' style={imgStyle2} alt='' />
        },
        {
            label: 'fsou',
            key: "2",
            link: 'https://fsoufsou.com/search?q=',
            icon: <img src='http://www.fsoufsou.com/favicon.ico' style={imgStyle2} alt='' />
        },
    ]

    //组件生命周期
    useEffect(() => {
    })

    //定义搜索选项组件
    const SearchOptions = () => {

        //当菜单被点击时，将搜索引擎切换为对应的key值
        const onClick = ({ key }) => {
            setSearchEngine(key)
        };

        //组件渲染
        return (
            <>
                <Dropdown
                    menu={{ items, onClick }}
                >
                    <Button
                        size='large'
                        type="text"
                        style={{
                            border: 'none',
                            borderRight: '2px solid #efefef',
                            marginTop: '2px',
                            marginBottom: '2px',
                            marginRight: '-85px',
                            zIndex: '9999',
                            background: 'none',
                        }}>
                        <Space>
                            {items.map((item) => {
                                if (item.key === seachEngine) {
                                    return (
                                        item.label
                                    )
                                }
                            })}
                        </Space>
                        <Space style={{ marginLeft: '8px' }}>
                            <DownOutlined />
                        </Space>
                    </Button>
                </Dropdown>
            </>
        )
    }

    const SearchOk = () => {
        return (
            <>
                <Button
                    size='large'
                    type="primary"
                    shape="round"
                    style={{
                        margin: '2px 0px 2px -77px',
                    }}
                    onClick={handleSearch}
                >
                    搜索
                </Button>
            </>
        )
    }
    //当点击搜索时候的操作方法
    function handleSearch() {
        if (searchContent === '') {
            message.error('什么都不输就想离开我？没门！')
        } else {
            window.open(items[seachEngine].link + searchContent, '_blank')//在新页面打开搜索内容
        }
    }

    //获取搜索的输入框内容
    function getSearchContent(e) {
        setSearchContent(e.target.value)
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', zIndex: 1, marginBottom: '24px' }}>
            <div className="search-input-style">
                <SearchOptions />
                <Input
                    placeholder=""
                    size='large'
                    style={{ borderRadius: '50px', padding: '0px 90px' }}
                    onChange={getSearchContent}
                />
                <SearchOk />
            </div>
        </div>
    )
}

export default SearchTools;