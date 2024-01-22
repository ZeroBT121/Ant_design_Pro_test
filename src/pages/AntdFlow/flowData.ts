/**
 * @description 调用返回流程节点数据
 * @returns data 流程节点数据
 */
export function getFlowDate() {
  return {
    "nodes": [
        {
            "id": "node-5160bbbd-d720-42cb-a8ed-e49177a95d20",
            "renderKey": "CustomTerminalNode",
            "name": "CustomTerminalNode",
            "label": "关键词筛选节点",
            "width": 180,
            "height": 60,
            "ports": {
                "items": [
                    {
                        "group": "top",
                        "id": "192e15ed-3851-4208-8f11-84cbde1cd727"
                    },
                    {
                        "group": "right",
                        "id": "e2dc340d-6b0b-4c34-aebc-125ecb9ab9f2"
                    },
                    {
                        "group": "bottom",
                        "id": "1571750d-5098-46e6-9b0d-7cdf1af70527"
                    },
                    {
                        "group": "left",
                        "id": "cb543a6c-7287-4b6a-af8c-489967b627e8"
                    }
                ],
                "groups": {
                    "top": {
                        "position": {
                            "name": "top"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "right": {
                        "position": {
                            "name": "right"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "bottom": {
                        "position": {
                            "name": "bottom"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "left": {
                        "position": {
                            "name": "left"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    }
                }
            },
            "originData": {
                "component": {
                    "compare": null
                },
                "name": "CustomTerminalNode",
                "width": 180,
                "height": 60,
                "label": "自定义终端节点"
            },
            "isCustom": true,
            "x": 300,
            "y": 240,
            "zIndex": 10,
            "incomingEdges": null,
            "outgoingEdges": [
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5"
                        }
                    },
                    "id": "node-5160bbbd-d720-42cb-a8ed-e49177a95d20:e2dc340d-6b0b-4c34-aebc-125ecb9ab9f2-node-4a72f653-f0f7-433a-8161-86dc05757e93:2519a1f3-4c15-470b-a1e3-dce1e345eee8",
                    "targetPortId": "2519a1f3-4c15-470b-a1e3-dce1e345eee8",
                    "sourcePortId": "e2dc340d-6b0b-4c34-aebc-125ecb9ab9f2",
                    "zIndex": 1,
                    "data": {
                        "targetPortId": "2519a1f3-4c15-470b-a1e3-dce1e345eee8",
                        "sourcePortId": "e2dc340d-6b0b-4c34-aebc-125ecb9ab9f2",
                        "source": {
                            "cell": "node-5160bbbd-d720-42cb-a8ed-e49177a95d20",
                            "port": "e2dc340d-6b0b-4c34-aebc-125ecb9ab9f2"
                        },
                        "target": {
                            "cell": "node-4a72f653-f0f7-433a-8161-86dc05757e93",
                            "port": "2519a1f3-4c15-470b-a1e3-dce1e345eee8"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "2519a1f3-4c15-470b-a1e3-dce1e345eee8",
                            "sourcePortId": "e2dc340d-6b0b-4c34-aebc-125ecb9ab9f2",
                            "source": "node-5160bbbd-d720-42cb-a8ed-e49177a95d20",
                            "target": "node-4a72f653-f0f7-433a-8161-86dc05757e93",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "id": "node-5160bbbd-d720-42cb-a8ed-e49177a95d20:e2dc340d-6b0b-4c34-aebc-125ecb9ab9f2-node-4a72f653-f0f7-433a-8161-86dc05757e93:2519a1f3-4c15-470b-a1e3-dce1e345eee8",
                        "sourcePort": "e2dc340d-6b0b-4c34-aebc-125ecb9ab9f2",
                        "targetPort": "2519a1f3-4c15-470b-a1e3-dce1e345eee8"
                    },
                    "source": {
                        "cell": "node-5160bbbd-d720-42cb-a8ed-e49177a95d20",
                        "port": "e2dc340d-6b0b-4c34-aebc-125ecb9ab9f2"
                    },
                    "target": {
                        "cell": "node-4a72f653-f0f7-433a-8161-86dc05757e93",
                        "port": "2519a1f3-4c15-470b-a1e3-dce1e345eee8"
                    },
                    "labels": [
                        {
                            "targetPortId": "2519a1f3-4c15-470b-a1e3-dce1e345eee8",
                            "sourcePortId": "e2dc340d-6b0b-4c34-aebc-125ecb9ab9f2",
                            "source": {
                                "cell": "node-5160bbbd-d720-42cb-a8ed-e49177a95d20",
                                "port": "e2dc340d-6b0b-4c34-aebc-125ecb9ab9f2"
                            },
                            "target": {
                                "cell": "node-4a72f653-f0f7-433a-8161-86dc05757e93",
                                "port": "2519a1f3-4c15-470b-a1e3-dce1e345eee8"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "2519a1f3-4c15-470b-a1e3-dce1e345eee8",
                                "sourcePortId": "e2dc340d-6b0b-4c34-aebc-125ecb9ab9f2",
                                "source": "node-5160bbbd-d720-42cb-a8ed-e49177a95d20",
                                "target": "node-4a72f653-f0f7-433a-8161-86dc05757e93",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-5160bbbd-d720-42cb-a8ed-e49177a95d20:e2dc340d-6b0b-4c34-aebc-125ecb9ab9f2-node-4a72f653-f0f7-433a-8161-86dc05757e93:2519a1f3-4c15-470b-a1e3-dce1e345eee8",
                            "sourcePort": "e2dc340d-6b0b-4c34-aebc-125ecb9ab9f2",
                            "targetPort": "2519a1f3-4c15-470b-a1e3-dce1e345eee8"
                        }
                    ]
                }
            ],
            // "stroke": '#1890ff',
            "fontSize": 18,
            // "fill": '#1890ff',
            // 'fontFill': '#d9d9d9',
            "stroke": "#bfbfbf",
            "fill": '#f0f0f0',
            'data': {
              // 当前节点的状态  已执行 正在执行 未执行的节点 三个状态 NOT_STARTED = '未执行',  RUNNING = '正在执行',  DONE = '已执行'  
              statue: 'RUNNING',
              info: {

              },

            }
        },
        {
            "id": "node-4a72f653-f0f7-433a-8161-86dc05757e93",
            "renderKey": "JudgmentNode",
            "name": "JudgmentNode",
            "label": "跑模型",
            "width": 180,
            "height": 60,
            "ports": {
                "items": [
                    {
                        "group": "top",
                        "id": "d4a9705b-8cd2-4152-bf47-4aa6af1864eb"
                    },
                    {
                        "group": "right",
                        "id": "3678b1c4-e0ef-4b28-8757-5cf32613eac8"
                    },
                    {
                        "group": "bottom",
                        "id": "1d84d3e9-8fb5-49ae-8d08-b794afe4fb7f"
                    },
                    {
                        "group": "left",
                        "id": "2519a1f3-4c15-470b-a1e3-dce1e345eee8"
                    }
                ],
                "groups": {
                    "top": {
                        "position": {
                            "name": "top"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "right": {
                        "position": {
                            "name": "right"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "bottom": {
                        "position": {
                            "name": "bottom"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "left": {
                        "position": {
                            "name": "left"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    }
                }
            },
            "originData": {
                "component": {
                    "compare": null
                },
                "name": "JudgmentNode",
                "width": 180,
                "height": 60,
                "label": "自定义判断节点"
            },
            "isCustom": true,
            "x": 542,
            "y": 240,
            "zIndex": 10,
            "incomingEdges": [
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5"
                        }
                    },
                    "id": "node-5160bbbd-d720-42cb-a8ed-e49177a95d20:e2dc340d-6b0b-4c34-aebc-125ecb9ab9f2-node-4a72f653-f0f7-433a-8161-86dc05757e93:2519a1f3-4c15-470b-a1e3-dce1e345eee8",
                    "targetPortId": "2519a1f3-4c15-470b-a1e3-dce1e345eee8",
                    "sourcePortId": "e2dc340d-6b0b-4c34-aebc-125ecb9ab9f2",
                    "zIndex": 1,
                    "data": {
                        "targetPortId": "2519a1f3-4c15-470b-a1e3-dce1e345eee8",
                        "sourcePortId": "e2dc340d-6b0b-4c34-aebc-125ecb9ab9f2",
                        "source": {
                            "cell": "node-5160bbbd-d720-42cb-a8ed-e49177a95d20",
                            "port": "e2dc340d-6b0b-4c34-aebc-125ecb9ab9f2"
                        },
                        "target": {
                            "cell": "node-4a72f653-f0f7-433a-8161-86dc05757e93",
                            "port": "2519a1f3-4c15-470b-a1e3-dce1e345eee8"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "2519a1f3-4c15-470b-a1e3-dce1e345eee8",
                            "sourcePortId": "e2dc340d-6b0b-4c34-aebc-125ecb9ab9f2",
                            "source": "node-5160bbbd-d720-42cb-a8ed-e49177a95d20",
                            "target": "node-4a72f653-f0f7-433a-8161-86dc05757e93",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "id": "node-5160bbbd-d720-42cb-a8ed-e49177a95d20:e2dc340d-6b0b-4c34-aebc-125ecb9ab9f2-node-4a72f653-f0f7-433a-8161-86dc05757e93:2519a1f3-4c15-470b-a1e3-dce1e345eee8",
                        "sourcePort": "e2dc340d-6b0b-4c34-aebc-125ecb9ab9f2",
                        "targetPort": "2519a1f3-4c15-470b-a1e3-dce1e345eee8"
                    },
                    "source": {
                        "cell": "node-5160bbbd-d720-42cb-a8ed-e49177a95d20",
                        "port": "e2dc340d-6b0b-4c34-aebc-125ecb9ab9f2"
                    },
                    "target": {
                        "cell": "node-4a72f653-f0f7-433a-8161-86dc05757e93",
                        "port": "2519a1f3-4c15-470b-a1e3-dce1e345eee8"
                    },
                    "labels": [
                        {
                            "targetPortId": "2519a1f3-4c15-470b-a1e3-dce1e345eee8",
                            "sourcePortId": "e2dc340d-6b0b-4c34-aebc-125ecb9ab9f2",
                            "source": {
                                "cell": "node-5160bbbd-d720-42cb-a8ed-e49177a95d20",
                                "port": "e2dc340d-6b0b-4c34-aebc-125ecb9ab9f2"
                            },
                            "target": {
                                "cell": "node-4a72f653-f0f7-433a-8161-86dc05757e93",
                                "port": "2519a1f3-4c15-470b-a1e3-dce1e345eee8"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "2519a1f3-4c15-470b-a1e3-dce1e345eee8",
                                "sourcePortId": "e2dc340d-6b0b-4c34-aebc-125ecb9ab9f2",
                                "source": "node-5160bbbd-d720-42cb-a8ed-e49177a95d20",
                                "target": "node-4a72f653-f0f7-433a-8161-86dc05757e93",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-5160bbbd-d720-42cb-a8ed-e49177a95d20:e2dc340d-6b0b-4c34-aebc-125ecb9ab9f2-node-4a72f653-f0f7-433a-8161-86dc05757e93:2519a1f3-4c15-470b-a1e3-dce1e345eee8",
                            "sourcePort": "e2dc340d-6b0b-4c34-aebc-125ecb9ab9f2",
                            "targetPort": "2519a1f3-4c15-470b-a1e3-dce1e345eee8"
                        }
                    ]
                }
            ],
            "outgoingEdges": [
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5"
                        }
                    },
                    "id": "node-4a72f653-f0f7-433a-8161-86dc05757e93:3678b1c4-e0ef-4b28-8757-5cf32613eac8-node-b2ca036d-8cc0-4415-9947-c21c4a006b25:dd1064e7-ae96-48c0-9c54-6ab2b65f12e5",
                    "targetPortId": "dd1064e7-ae96-48c0-9c54-6ab2b65f12e5",
                    "sourcePortId": "3678b1c4-e0ef-4b28-8757-5cf32613eac8",
                    "zIndex": 1,
                    "data": {
                        "targetPortId": "dd1064e7-ae96-48c0-9c54-6ab2b65f12e5",
                        "sourcePortId": "3678b1c4-e0ef-4b28-8757-5cf32613eac8",
                        "source": {
                            "cell": "node-4a72f653-f0f7-433a-8161-86dc05757e93",
                            "port": "3678b1c4-e0ef-4b28-8757-5cf32613eac8"
                        },
                        "target": {
                            "cell": "node-b2ca036d-8cc0-4415-9947-c21c4a006b25",
                            "port": "dd1064e7-ae96-48c0-9c54-6ab2b65f12e5"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "dd1064e7-ae96-48c0-9c54-6ab2b65f12e5",
                            "sourcePortId": "3678b1c4-e0ef-4b28-8757-5cf32613eac8",
                            "source": "node-4a72f653-f0f7-433a-8161-86dc05757e93",
                            "target": "node-b2ca036d-8cc0-4415-9947-c21c4a006b25",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "id": "node-4a72f653-f0f7-433a-8161-86dc05757e93:3678b1c4-e0ef-4b28-8757-5cf32613eac8-node-b2ca036d-8cc0-4415-9947-c21c4a006b25:dd1064e7-ae96-48c0-9c54-6ab2b65f12e5",
                        "sourcePort": "3678b1c4-e0ef-4b28-8757-5cf32613eac8",
                        "targetPort": "dd1064e7-ae96-48c0-9c54-6ab2b65f12e5"
                    },
                    "source": {
                        "cell": "node-4a72f653-f0f7-433a-8161-86dc05757e93",
                        "port": "3678b1c4-e0ef-4b28-8757-5cf32613eac8"
                    },
                    "target": {
                        "cell": "node-b2ca036d-8cc0-4415-9947-c21c4a006b25",
                        "port": "dd1064e7-ae96-48c0-9c54-6ab2b65f12e5"
                    },
                    "labels": [
                        {
                            "targetPortId": "dd1064e7-ae96-48c0-9c54-6ab2b65f12e5",
                            "sourcePortId": "3678b1c4-e0ef-4b28-8757-5cf32613eac8",
                            "source": {
                                "cell": "node-4a72f653-f0f7-433a-8161-86dc05757e93",
                                "port": "3678b1c4-e0ef-4b28-8757-5cf32613eac8"
                            },
                            "target": {
                                "cell": "node-b2ca036d-8cc0-4415-9947-c21c4a006b25",
                                "port": "dd1064e7-ae96-48c0-9c54-6ab2b65f12e5"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "dd1064e7-ae96-48c0-9c54-6ab2b65f12e5",
                                "sourcePortId": "3678b1c4-e0ef-4b28-8757-5cf32613eac8",
                                "source": "node-4a72f653-f0f7-433a-8161-86dc05757e93",
                                "target": "node-b2ca036d-8cc0-4415-9947-c21c4a006b25",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-4a72f653-f0f7-433a-8161-86dc05757e93:3678b1c4-e0ef-4b28-8757-5cf32613eac8-node-b2ca036d-8cc0-4415-9947-c21c4a006b25:dd1064e7-ae96-48c0-9c54-6ab2b65f12e5",
                            "sourcePort": "3678b1c4-e0ef-4b28-8757-5cf32613eac8",
                            "targetPort": "dd1064e7-ae96-48c0-9c54-6ab2b65f12e5"
                        }
                    ]
                },
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5"
                        }
                    },
                    "id": "node-4a72f653-f0f7-433a-8161-86dc05757e93:d4a9705b-8cd2-4152-bf47-4aa6af1864eb-node-9009c223-0bc5-4162-bdaf-d048c0566fcd:046b070c-c4c1-419b-b647-73c0f5e8cdf2",
                    "targetPortId": "046b070c-c4c1-419b-b647-73c0f5e8cdf2",
                    "sourcePortId": "d4a9705b-8cd2-4152-bf47-4aa6af1864eb",
                    "zIndex": 1,
                    "data": {
                        "targetPortId": "046b070c-c4c1-419b-b647-73c0f5e8cdf2",
                        "sourcePortId": "d4a9705b-8cd2-4152-bf47-4aa6af1864eb",
                        "source": {
                            "cell": "node-4a72f653-f0f7-433a-8161-86dc05757e93",
                            "port": "d4a9705b-8cd2-4152-bf47-4aa6af1864eb"
                        },
                        "target": {
                            "cell": "node-9009c223-0bc5-4162-bdaf-d048c0566fcd",
                            "port": "046b070c-c4c1-419b-b647-73c0f5e8cdf2"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "046b070c-c4c1-419b-b647-73c0f5e8cdf2",
                            "sourcePortId": "d4a9705b-8cd2-4152-bf47-4aa6af1864eb",
                            "source": "node-4a72f653-f0f7-433a-8161-86dc05757e93",
                            "target": "node-9009c223-0bc5-4162-bdaf-d048c0566fcd",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "id": "node-4a72f653-f0f7-433a-8161-86dc05757e93:d4a9705b-8cd2-4152-bf47-4aa6af1864eb-node-9009c223-0bc5-4162-bdaf-d048c0566fcd:046b070c-c4c1-419b-b647-73c0f5e8cdf2",
                        "sourcePort": "d4a9705b-8cd2-4152-bf47-4aa6af1864eb",
                        "targetPort": "046b070c-c4c1-419b-b647-73c0f5e8cdf2"
                    },
                    "source": {
                        "cell": "node-4a72f653-f0f7-433a-8161-86dc05757e93",
                        "port": "d4a9705b-8cd2-4152-bf47-4aa6af1864eb"
                    },
                    "target": {
                        "cell": "node-9009c223-0bc5-4162-bdaf-d048c0566fcd",
                        "port": "046b070c-c4c1-419b-b647-73c0f5e8cdf2"
                    },
                    "labels": [
                        {
                            "targetPortId": "046b070c-c4c1-419b-b647-73c0f5e8cdf2",
                            "sourcePortId": "d4a9705b-8cd2-4152-bf47-4aa6af1864eb",
                            "source": {
                                "cell": "node-4a72f653-f0f7-433a-8161-86dc05757e93",
                                "port": "d4a9705b-8cd2-4152-bf47-4aa6af1864eb"
                            },
                            "target": {
                                "cell": "node-9009c223-0bc5-4162-bdaf-d048c0566fcd",
                                "port": "046b070c-c4c1-419b-b647-73c0f5e8cdf2"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "046b070c-c4c1-419b-b647-73c0f5e8cdf2",
                                "sourcePortId": "d4a9705b-8cd2-4152-bf47-4aa6af1864eb",
                                "source": "node-4a72f653-f0f7-433a-8161-86dc05757e93",
                                "target": "node-9009c223-0bc5-4162-bdaf-d048c0566fcd",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-4a72f653-f0f7-433a-8161-86dc05757e93:d4a9705b-8cd2-4152-bf47-4aa6af1864eb-node-9009c223-0bc5-4162-bdaf-d048c0566fcd:046b070c-c4c1-419b-b647-73c0f5e8cdf2",
                            "sourcePort": "d4a9705b-8cd2-4152-bf47-4aa6af1864eb",
                            "targetPort": "046b070c-c4c1-419b-b647-73c0f5e8cdf2"
                        }
                    ]
                }
            ],
            "fontSize": 18,
            // "stroke": "#f5a623",
            "stroke": "#bfbfbf",
            "fill": '#f0f0f0',
            // 'fontFill': '#fff',
        },
        {
            "id": "node-9009c223-0bc5-4162-bdaf-d048c0566fcd",
            "renderKey": "CustomTerminalNode",
            "name": "CustomTerminalNode",
            "label": "放弃",
            "width": 180,
            "height": 60,
            "ports": {
                "items": [
                    {
                        "group": "top",
                        "id": "1d31a921-962e-42b4-9048-971509d8e5e1"
                    },
                    {
                        "group": "right",
                        "id": "cd856d86-8247-4402-b4de-69a9e73fb688"
                    },
                    {
                        "group": "bottom",
                        "id": "046b070c-c4c1-419b-b647-73c0f5e8cdf2"
                    },
                    {
                        "group": "left",
                        "id": "d2fe4c7b-ede5-47eb-9af1-4a6e4f1a3f38"
                    }
                ],
                "groups": {
                    "top": {
                        "position": {
                            "name": "top"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "right": {
                        "position": {
                            "name": "right"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "bottom": {
                        "position": {
                            "name": "bottom"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "left": {
                        "position": {
                            "name": "left"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    }
                }
            },
            "originData": {
                "component": {
                    "compare": null
                },
                "name": "CustomTerminalNode",
                "width": 180,
                "height": 60,
                "label": "自定义终端节点"
            },
            "isCustom": true,
            "x": 542,
            "y": 93,
            "zIndex": 10,
            "incomingEdges": [
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5"
                        }
                    },
                    "id": "node-4a72f653-f0f7-433a-8161-86dc05757e93:d4a9705b-8cd2-4152-bf47-4aa6af1864eb-node-9009c223-0bc5-4162-bdaf-d048c0566fcd:046b070c-c4c1-419b-b647-73c0f5e8cdf2",
                    "targetPortId": "046b070c-c4c1-419b-b647-73c0f5e8cdf2",
                    "sourcePortId": "d4a9705b-8cd2-4152-bf47-4aa6af1864eb",
                    "zIndex": 1,
                    "data": {
                        "targetPortId": "046b070c-c4c1-419b-b647-73c0f5e8cdf2",
                        "sourcePortId": "d4a9705b-8cd2-4152-bf47-4aa6af1864eb",
                        "source": {
                            "cell": "node-4a72f653-f0f7-433a-8161-86dc05757e93",
                            "port": "d4a9705b-8cd2-4152-bf47-4aa6af1864eb"
                        },
                        "target": {
                            "cell": "node-9009c223-0bc5-4162-bdaf-d048c0566fcd",
                            "port": "046b070c-c4c1-419b-b647-73c0f5e8cdf2"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "046b070c-c4c1-419b-b647-73c0f5e8cdf2",
                            "sourcePortId": "d4a9705b-8cd2-4152-bf47-4aa6af1864eb",
                            "source": "node-4a72f653-f0f7-433a-8161-86dc05757e93",
                            "target": "node-9009c223-0bc5-4162-bdaf-d048c0566fcd",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "id": "node-4a72f653-f0f7-433a-8161-86dc05757e93:d4a9705b-8cd2-4152-bf47-4aa6af1864eb-node-9009c223-0bc5-4162-bdaf-d048c0566fcd:046b070c-c4c1-419b-b647-73c0f5e8cdf2",
                        "sourcePort": "d4a9705b-8cd2-4152-bf47-4aa6af1864eb",
                        "targetPort": "046b070c-c4c1-419b-b647-73c0f5e8cdf2"
                    },
                    "source": {
                        "cell": "node-4a72f653-f0f7-433a-8161-86dc05757e93",
                        "port": "d4a9705b-8cd2-4152-bf47-4aa6af1864eb"
                    },
                    "target": {
                        "cell": "node-9009c223-0bc5-4162-bdaf-d048c0566fcd",
                        "port": "046b070c-c4c1-419b-b647-73c0f5e8cdf2"
                    },
                    "labels": [
                        {
                            "targetPortId": "046b070c-c4c1-419b-b647-73c0f5e8cdf2",
                            "sourcePortId": "d4a9705b-8cd2-4152-bf47-4aa6af1864eb",
                            "source": {
                                "cell": "node-4a72f653-f0f7-433a-8161-86dc05757e93",
                                "port": "d4a9705b-8cd2-4152-bf47-4aa6af1864eb"
                            },
                            "target": {
                                "cell": "node-9009c223-0bc5-4162-bdaf-d048c0566fcd",
                                "port": "046b070c-c4c1-419b-b647-73c0f5e8cdf2"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "046b070c-c4c1-419b-b647-73c0f5e8cdf2",
                                "sourcePortId": "d4a9705b-8cd2-4152-bf47-4aa6af1864eb",
                                "source": "node-4a72f653-f0f7-433a-8161-86dc05757e93",
                                "target": "node-9009c223-0bc5-4162-bdaf-d048c0566fcd",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-4a72f653-f0f7-433a-8161-86dc05757e93:d4a9705b-8cd2-4152-bf47-4aa6af1864eb-node-9009c223-0bc5-4162-bdaf-d048c0566fcd:046b070c-c4c1-419b-b647-73c0f5e8cdf2",
                            "sourcePort": "d4a9705b-8cd2-4152-bf47-4aa6af1864eb",
                            "targetPort": "046b070c-c4c1-419b-b647-73c0f5e8cdf2"
                        }
                    ]
                }
            ],
            "outgoingEdges": [
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5"
                        }
                    },
                    "id": "node-9009c223-0bc5-4162-bdaf-d048c0566fcd:cd856d86-8247-4402-b4de-69a9e73fb688-node-d09f51c8-b635-4e83-bcdc-5f102f92e018:c13d80e2-94af-458f-ade5-9e49582469b3",
                    "targetPortId": "c13d80e2-94af-458f-ade5-9e49582469b3",
                    "sourcePortId": "cd856d86-8247-4402-b4de-69a9e73fb688",
                    "zIndex": 1,
                    "data": {
                        "targetPortId": "c13d80e2-94af-458f-ade5-9e49582469b3",
                        "sourcePortId": "cd856d86-8247-4402-b4de-69a9e73fb688",
                        "source": {
                            "cell": "node-9009c223-0bc5-4162-bdaf-d048c0566fcd",
                            "port": "cd856d86-8247-4402-b4de-69a9e73fb688"
                        },
                        "target": {
                            "cell": "node-d09f51c8-b635-4e83-bcdc-5f102f92e018",
                            "port": "c13d80e2-94af-458f-ade5-9e49582469b3"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "c13d80e2-94af-458f-ade5-9e49582469b3",
                            "sourcePortId": "cd856d86-8247-4402-b4de-69a9e73fb688",
                            "source": "node-9009c223-0bc5-4162-bdaf-d048c0566fcd",
                            "target": "node-d09f51c8-b635-4e83-bcdc-5f102f92e018",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "id": "node-9009c223-0bc5-4162-bdaf-d048c0566fcd:cd856d86-8247-4402-b4de-69a9e73fb688-node-d09f51c8-b635-4e83-bcdc-5f102f92e018:c13d80e2-94af-458f-ade5-9e49582469b3",
                        "sourcePort": "cd856d86-8247-4402-b4de-69a9e73fb688",
                        "targetPort": "c13d80e2-94af-458f-ade5-9e49582469b3"
                    },
                    "source": {
                        "cell": "node-9009c223-0bc5-4162-bdaf-d048c0566fcd",
                        "port": "cd856d86-8247-4402-b4de-69a9e73fb688"
                    },
                    "target": {
                        "cell": "node-d09f51c8-b635-4e83-bcdc-5f102f92e018",
                        "port": "c13d80e2-94af-458f-ade5-9e49582469b3"
                    },
                    "labels": [
                        {
                            "targetPortId": "c13d80e2-94af-458f-ade5-9e49582469b3",
                            "sourcePortId": "cd856d86-8247-4402-b4de-69a9e73fb688",
                            "source": {
                                "cell": "node-9009c223-0bc5-4162-bdaf-d048c0566fcd",
                                "port": "cd856d86-8247-4402-b4de-69a9e73fb688"
                            },
                            "target": {
                                "cell": "node-d09f51c8-b635-4e83-bcdc-5f102f92e018",
                                "port": "c13d80e2-94af-458f-ade5-9e49582469b3"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "c13d80e2-94af-458f-ade5-9e49582469b3",
                                "sourcePortId": "cd856d86-8247-4402-b4de-69a9e73fb688",
                                "source": "node-9009c223-0bc5-4162-bdaf-d048c0566fcd",
                                "target": "node-d09f51c8-b635-4e83-bcdc-5f102f92e018",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-9009c223-0bc5-4162-bdaf-d048c0566fcd:cd856d86-8247-4402-b4de-69a9e73fb688-node-d09f51c8-b635-4e83-bcdc-5f102f92e018:c13d80e2-94af-458f-ade5-9e49582469b3",
                            "sourcePort": "cd856d86-8247-4402-b4de-69a9e73fb688",
                            "targetPort": "c13d80e2-94af-458f-ade5-9e49582469b3"
                        }
                    ]
                }
            ],
            // "stroke": "#31d0c6",
            "fontSize": 18,
            "stroke": "#bfbfbf",
            "fill": '#f0f0f0',
            'fontFill': '#d9d9d9',
        },
        {
            "id": "node-b2ca036d-8cc0-4415-9947-c21c4a006b25",
            "renderKey": "JudgmentNode",
            "name": "JudgmentNode",
            "label": "新市场",
            "width": 180,
            "height": 60,
            "ports": {
                "items": [
                    {
                        "group": "top",
                        "id": "716848df-4b68-4385-8187-bb149b640f0b"
                    },
                    {
                        "group": "right",
                        "id": "3830023a-937e-4801-a2fe-407234d8bcc4"
                    },
                    {
                        "group": "bottom",
                        "id": "f8d5078b-7dfa-4c08-b3d6-c5ce04e2e385"
                    },
                    {
                        "group": "left",
                        "id": "dd1064e7-ae96-48c0-9c54-6ab2b65f12e5"
                    }
                ],
                "groups": {
                    "top": {
                        "position": {
                            "name": "top"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "right": {
                        "position": {
                            "name": "right"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "bottom": {
                        "position": {
                            "name": "bottom"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "left": {
                        "position": {
                            "name": "left"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    }
                }
            },
            "originData": {
                "component": {
                    "compare": null
                },
                "name": "JudgmentNode",
                "width": 180,
                "height": 60,
                "label": "自定义判断节点"
            },
            "isCustom": true,
            "x": 807,
            "y": 240,
            "zIndex": 10,
            "incomingEdges": [
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5"
                        }
                    },
                    "id": "node-4a72f653-f0f7-433a-8161-86dc05757e93:3678b1c4-e0ef-4b28-8757-5cf32613eac8-node-b2ca036d-8cc0-4415-9947-c21c4a006b25:dd1064e7-ae96-48c0-9c54-6ab2b65f12e5",
                    "targetPortId": "dd1064e7-ae96-48c0-9c54-6ab2b65f12e5",
                    "sourcePortId": "3678b1c4-e0ef-4b28-8757-5cf32613eac8",
                    "zIndex": 1,
                    "data": {
                        "targetPortId": "dd1064e7-ae96-48c0-9c54-6ab2b65f12e5",
                        "sourcePortId": "3678b1c4-e0ef-4b28-8757-5cf32613eac8",
                        "source": {
                            "cell": "node-4a72f653-f0f7-433a-8161-86dc05757e93",
                            "port": "3678b1c4-e0ef-4b28-8757-5cf32613eac8"
                        },
                        "target": {
                            "cell": "node-b2ca036d-8cc0-4415-9947-c21c4a006b25",
                            "port": "dd1064e7-ae96-48c0-9c54-6ab2b65f12e5"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "dd1064e7-ae96-48c0-9c54-6ab2b65f12e5",
                            "sourcePortId": "3678b1c4-e0ef-4b28-8757-5cf32613eac8",
                            "source": "node-4a72f653-f0f7-433a-8161-86dc05757e93",
                            "target": "node-b2ca036d-8cc0-4415-9947-c21c4a006b25",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "id": "node-4a72f653-f0f7-433a-8161-86dc05757e93:3678b1c4-e0ef-4b28-8757-5cf32613eac8-node-b2ca036d-8cc0-4415-9947-c21c4a006b25:dd1064e7-ae96-48c0-9c54-6ab2b65f12e5",
                        "sourcePort": "3678b1c4-e0ef-4b28-8757-5cf32613eac8",
                        "targetPort": "dd1064e7-ae96-48c0-9c54-6ab2b65f12e5"
                    },
                    "source": {
                        "cell": "node-4a72f653-f0f7-433a-8161-86dc05757e93",
                        "port": "3678b1c4-e0ef-4b28-8757-5cf32613eac8"
                    },
                    "target": {
                        "cell": "node-b2ca036d-8cc0-4415-9947-c21c4a006b25",
                        "port": "dd1064e7-ae96-48c0-9c54-6ab2b65f12e5"
                    },
                    "labels": [
                        {
                            "targetPortId": "dd1064e7-ae96-48c0-9c54-6ab2b65f12e5",
                            "sourcePortId": "3678b1c4-e0ef-4b28-8757-5cf32613eac8",
                            "source": {
                                "cell": "node-4a72f653-f0f7-433a-8161-86dc05757e93",
                                "port": "3678b1c4-e0ef-4b28-8757-5cf32613eac8"
                            },
                            "target": {
                                "cell": "node-b2ca036d-8cc0-4415-9947-c21c4a006b25",
                                "port": "dd1064e7-ae96-48c0-9c54-6ab2b65f12e5"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "dd1064e7-ae96-48c0-9c54-6ab2b65f12e5",
                                "sourcePortId": "3678b1c4-e0ef-4b28-8757-5cf32613eac8",
                                "source": "node-4a72f653-f0f7-433a-8161-86dc05757e93",
                                "target": "node-b2ca036d-8cc0-4415-9947-c21c4a006b25",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-4a72f653-f0f7-433a-8161-86dc05757e93:3678b1c4-e0ef-4b28-8757-5cf32613eac8-node-b2ca036d-8cc0-4415-9947-c21c4a006b25:dd1064e7-ae96-48c0-9c54-6ab2b65f12e5",
                            "sourcePort": "3678b1c4-e0ef-4b28-8757-5cf32613eac8",
                            "targetPort": "dd1064e7-ae96-48c0-9c54-6ab2b65f12e5"
                        }
                    ]
                }
            ],
            "outgoingEdges": [
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5",
                            "label": "否"
                        }
                    },
                    "id": "node-b2ca036d-8cc0-4415-9947-c21c4a006b25:3830023a-937e-4801-a2fe-407234d8bcc4-node-f6984c8b-d655-4b88-9bad-fb3676243be7:e64afb7d-73fb-42a3-af61-322da667d30c",
                    "targetPortId": "e64afb7d-73fb-42a3-af61-322da667d30c",
                    "sourcePortId": "3830023a-937e-4801-a2fe-407234d8bcc4",
                    "zIndex": 1,
                    "data": {
                        "id": "node-b2ca036d-8cc0-4415-9947-c21c4a006b25:3830023a-937e-4801-a2fe-407234d8bcc4-node-f6984c8b-d655-4b88-9bad-fb3676243be7:e64afb7d-73fb-42a3-af61-322da667d30c",
                        "targetPortId": "e64afb7d-73fb-42a3-af61-322da667d30c",
                        "sourcePortId": "3830023a-937e-4801-a2fe-407234d8bcc4",
                        "source": {
                            "cell": "node-b2ca036d-8cc0-4415-9947-c21c4a006b25",
                            "port": "3830023a-937e-4801-a2fe-407234d8bcc4"
                        },
                        "target": {
                            "cell": "node-f6984c8b-d655-4b88-9bad-fb3676243be7",
                            "port": "e64afb7d-73fb-42a3-af61-322da667d30c"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1,
                                "label": "否"
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "e64afb7d-73fb-42a3-af61-322da667d30c",
                            "sourcePortId": "3830023a-937e-4801-a2fe-407234d8bcc4",
                            "source": "node-b2ca036d-8cc0-4415-9947-c21c4a006b25",
                            "target": "node-f6984c8b-d655-4b88-9bad-fb3676243be7",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "sourcePort": "3830023a-937e-4801-a2fe-407234d8bcc4",
                        "targetPort": "e64afb7d-73fb-42a3-af61-322da667d30c",
                        "label": "否"
                    },
                    "source": {
                        "cell": "node-b2ca036d-8cc0-4415-9947-c21c4a006b25",
                        "port": "3830023a-937e-4801-a2fe-407234d8bcc4"
                    },
                    "target": {
                        "cell": "node-f6984c8b-d655-4b88-9bad-fb3676243be7",
                        "port": "e64afb7d-73fb-42a3-af61-322da667d30c"
                    },
                    "labels": [
                        {
                            "attrs": {
                                "label": {
                                    "text": "否"
                                }
                            }
                        }
                    ]
                },
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5",
                            "label": "是"
                        }
                    },
                    "id": "node-b2ca036d-8cc0-4415-9947-c21c4a006b25:716848df-4b68-4385-8187-bb149b640f0b-node-d09f51c8-b635-4e83-bcdc-5f102f92e018:bbac3984-e540-4e6a-9778-de4fef8f117c",
                    "targetPortId": "bbac3984-e540-4e6a-9778-de4fef8f117c",
                    "sourcePortId": "716848df-4b68-4385-8187-bb149b640f0b",
                    "zIndex": 1,
                    "data": {
                        "id": "node-b2ca036d-8cc0-4415-9947-c21c4a006b25:716848df-4b68-4385-8187-bb149b640f0b-node-d09f51c8-b635-4e83-bcdc-5f102f92e018:bbac3984-e540-4e6a-9778-de4fef8f117c",
                        "targetPortId": "bbac3984-e540-4e6a-9778-de4fef8f117c",
                        "sourcePortId": "716848df-4b68-4385-8187-bb149b640f0b",
                        "source": {
                            "cell": "node-b2ca036d-8cc0-4415-9947-c21c4a006b25",
                            "port": "716848df-4b68-4385-8187-bb149b640f0b"
                        },
                        "target": {
                            "cell": "node-d09f51c8-b635-4e83-bcdc-5f102f92e018",
                            "port": "bbac3984-e540-4e6a-9778-de4fef8f117c"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1,
                                "label": "是"
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "bbac3984-e540-4e6a-9778-de4fef8f117c",
                            "sourcePortId": "716848df-4b68-4385-8187-bb149b640f0b",
                            "source": "node-b2ca036d-8cc0-4415-9947-c21c4a006b25",
                            "target": "node-d09f51c8-b635-4e83-bcdc-5f102f92e018",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "sourcePort": "716848df-4b68-4385-8187-bb149b640f0b",
                        "targetPort": "bbac3984-e540-4e6a-9778-de4fef8f117c",
                        "label": "是"
                    },
                    "source": {
                        "cell": "node-b2ca036d-8cc0-4415-9947-c21c4a006b25",
                        "port": "716848df-4b68-4385-8187-bb149b640f0b"
                    },
                    "target": {
                        "cell": "node-d09f51c8-b635-4e83-bcdc-5f102f92e018",
                        "port": "bbac3984-e540-4e6a-9778-de4fef8f117c"
                    },
                    "labels": [
                        {
                            "attrs": {
                                "label": {
                                    "text": "是"
                                }
                            }
                        }
                    ]
                }
            ],
            "fontSize": 18,
            // "stroke": "#f5a623"
            "stroke": "#bfbfbf",
            "fill": '#f0f0f0',
        },
        {
            "id": "node-d09f51c8-b635-4e83-bcdc-5f102f92e018",
            "renderKey": "ProcessNode",
            "name": "ProcessNode",
            "label": "开发做初步策略",
            "width": 180,
            "height": 60,
            "ports": {
                "items": [
                    {
                        "group": "top",
                        "id": "66975afb-105d-4b2c-994f-179c54ab6950"
                    },
                    {
                        "group": "right",
                        "id": "8c3192aa-3b4f-4e5d-8492-247af0943a9b"
                    },
                    {
                        "group": "bottom",
                        "id": "bbac3984-e540-4e6a-9778-de4fef8f117c"
                    },
                    {
                        "group": "left",
                        "id": "c13d80e2-94af-458f-ade5-9e49582469b3"
                    }
                ],
                "groups": {
                    "top": {
                        "position": {
                            "name": "top"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "right": {
                        "position": {
                            "name": "right"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "bottom": {
                        "position": {
                            "name": "bottom"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "left": {
                        "position": {
                            "name": "left"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    }
                }
            },
            "originData": {
                "name": "ProcessNode",
                "width": 180,
                "height": 60,
                "label": "自定义步骤节点"
            },
            "isCustom": true,
            "x": 807,
            "y": 93,
            "zIndex": 10,
            "incomingEdges": [
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5",
                            "label": "是"
                        }
                    },
                    "id": "node-b2ca036d-8cc0-4415-9947-c21c4a006b25:716848df-4b68-4385-8187-bb149b640f0b-node-d09f51c8-b635-4e83-bcdc-5f102f92e018:bbac3984-e540-4e6a-9778-de4fef8f117c",
                    "targetPortId": "bbac3984-e540-4e6a-9778-de4fef8f117c",
                    "sourcePortId": "716848df-4b68-4385-8187-bb149b640f0b",
                    "zIndex": 1,
                    "data": {
                        "id": "node-b2ca036d-8cc0-4415-9947-c21c4a006b25:716848df-4b68-4385-8187-bb149b640f0b-node-d09f51c8-b635-4e83-bcdc-5f102f92e018:bbac3984-e540-4e6a-9778-de4fef8f117c",
                        "targetPortId": "bbac3984-e540-4e6a-9778-de4fef8f117c",
                        "sourcePortId": "716848df-4b68-4385-8187-bb149b640f0b",
                        "source": {
                            "cell": "node-b2ca036d-8cc0-4415-9947-c21c4a006b25",
                            "port": "716848df-4b68-4385-8187-bb149b640f0b"
                        },
                        "target": {
                            "cell": "node-d09f51c8-b635-4e83-bcdc-5f102f92e018",
                            "port": "bbac3984-e540-4e6a-9778-de4fef8f117c"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1,
                                "label": "是"
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "bbac3984-e540-4e6a-9778-de4fef8f117c",
                            "sourcePortId": "716848df-4b68-4385-8187-bb149b640f0b",
                            "source": "node-b2ca036d-8cc0-4415-9947-c21c4a006b25",
                            "target": "node-d09f51c8-b635-4e83-bcdc-5f102f92e018",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "sourcePort": "716848df-4b68-4385-8187-bb149b640f0b",
                        "targetPort": "bbac3984-e540-4e6a-9778-de4fef8f117c",
                        "label": "是"
                    },
                    "source": {
                        "cell": "node-b2ca036d-8cc0-4415-9947-c21c4a006b25",
                        "port": "716848df-4b68-4385-8187-bb149b640f0b"
                    },
                    "target": {
                        "cell": "node-d09f51c8-b635-4e83-bcdc-5f102f92e018",
                        "port": "bbac3984-e540-4e6a-9778-de4fef8f117c"
                    },
                    "labels": [
                        {
                            "attrs": {
                                "label": {
                                    "text": "是"
                                }
                            }
                        }
                    ]
                }
            ],
            "outgoingEdges": [
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5"
                        }
                    },
                    "id": "node-d09f51c8-b635-4e83-bcdc-5f102f92e018:8c3192aa-3b4f-4e5d-8492-247af0943a9b-node-5c5e445a-f775-4d1b-8a55-554efccfd476:314f73e8-5ea1-4265-aaac-3f5a20fdbbb5",
                    "targetPortId": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5",
                    "sourcePortId": "8c3192aa-3b4f-4e5d-8492-247af0943a9b",
                    "zIndex": 1,
                    "data": {
                        "targetPortId": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5",
                        "sourcePortId": "8c3192aa-3b4f-4e5d-8492-247af0943a9b",
                        "source": {
                            "cell": "node-d09f51c8-b635-4e83-bcdc-5f102f92e018",
                            "port": "8c3192aa-3b4f-4e5d-8492-247af0943a9b"
                        },
                        "target": {
                            "cell": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                            "port": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5",
                            "sourcePortId": "8c3192aa-3b4f-4e5d-8492-247af0943a9b",
                            "source": "node-d09f51c8-b635-4e83-bcdc-5f102f92e018",
                            "target": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "id": "node-d09f51c8-b635-4e83-bcdc-5f102f92e018:8c3192aa-3b4f-4e5d-8492-247af0943a9b-node-5c5e445a-f775-4d1b-8a55-554efccfd476:314f73e8-5ea1-4265-aaac-3f5a20fdbbb5",
                        "sourcePort": "8c3192aa-3b4f-4e5d-8492-247af0943a9b",
                        "targetPort": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5"
                    },
                    "source": {
                        "cell": "node-d09f51c8-b635-4e83-bcdc-5f102f92e018",
                        "port": "8c3192aa-3b4f-4e5d-8492-247af0943a9b"
                    },
                    "target": {
                        "cell": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                        "port": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5"
                    },
                    "labels": [
                        {
                            "targetPortId": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5",
                            "sourcePortId": "8c3192aa-3b4f-4e5d-8492-247af0943a9b",
                            "source": {
                                "cell": "node-d09f51c8-b635-4e83-bcdc-5f102f92e018",
                                "port": "8c3192aa-3b4f-4e5d-8492-247af0943a9b"
                            },
                            "target": {
                                "cell": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                                "port": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5",
                                "sourcePortId": "8c3192aa-3b4f-4e5d-8492-247af0943a9b",
                                "source": "node-d09f51c8-b635-4e83-bcdc-5f102f92e018",
                                "target": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-d09f51c8-b635-4e83-bcdc-5f102f92e018:8c3192aa-3b4f-4e5d-8492-247af0943a9b-node-5c5e445a-f775-4d1b-8a55-554efccfd476:314f73e8-5ea1-4265-aaac-3f5a20fdbbb5",
                            "sourcePort": "8c3192aa-3b4f-4e5d-8492-247af0943a9b",
                            "targetPort": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5"
                        }
                    ]
                }
            ],
            "fontSize": 18,
            "stroke": "#bfbfbf",
            "fill": '#f0f0f0',
        },
        {
            "id": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
            "renderKey": "JudgmentNode",
            "name": "JudgmentNode",
            "label": "初步询价",
            "width": 180,
            "height": 60,
            "ports": {
                "items": [
                    {
                        "group": "top",
                        "id": "b79e9d70-eabb-428f-9bd0-0f424154699c"
                    },
                    {
                        "group": "right",
                        "id": "df376f96-eb62-4fc4-a27d-60ba2f46d87a"
                    },
                    {
                        "group": "bottom",
                        "id": "0eda0ed5-08fa-4441-9e98-510c6408be82"
                    },
                    {
                        "group": "left",
                        "id": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5"
                    }
                ],
                "groups": {
                    "top": {
                        "position": {
                            "name": "top"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "right": {
                        "position": {
                            "name": "right"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "bottom": {
                        "position": {
                            "name": "bottom"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "left": {
                        "position": {
                            "name": "left"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    }
                }
            },
            "originData": {
                "component": {
                    "compare": null
                },
                "name": "JudgmentNode",
                "width": 180,
                "height": 60,
                "label": "自定义判断节点"
            },
            "isCustom": true,
            "x": 1073,
            "y": 90,
            "zIndex": 10,
            "incomingEdges": [
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5"
                        }
                    },
                    "id": "node-d09f51c8-b635-4e83-bcdc-5f102f92e018:8c3192aa-3b4f-4e5d-8492-247af0943a9b-node-5c5e445a-f775-4d1b-8a55-554efccfd476:314f73e8-5ea1-4265-aaac-3f5a20fdbbb5",
                    "targetPortId": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5",
                    "sourcePortId": "8c3192aa-3b4f-4e5d-8492-247af0943a9b",
                    "zIndex": 1,
                    "data": {
                        "targetPortId": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5",
                        "sourcePortId": "8c3192aa-3b4f-4e5d-8492-247af0943a9b",
                        "source": {
                            "cell": "node-d09f51c8-b635-4e83-bcdc-5f102f92e018",
                            "port": "8c3192aa-3b4f-4e5d-8492-247af0943a9b"
                        },
                        "target": {
                            "cell": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                            "port": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5",
                            "sourcePortId": "8c3192aa-3b4f-4e5d-8492-247af0943a9b",
                            "source": "node-d09f51c8-b635-4e83-bcdc-5f102f92e018",
                            "target": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "id": "node-d09f51c8-b635-4e83-bcdc-5f102f92e018:8c3192aa-3b4f-4e5d-8492-247af0943a9b-node-5c5e445a-f775-4d1b-8a55-554efccfd476:314f73e8-5ea1-4265-aaac-3f5a20fdbbb5",
                        "sourcePort": "8c3192aa-3b4f-4e5d-8492-247af0943a9b",
                        "targetPort": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5"
                    },
                    "source": {
                        "cell": "node-d09f51c8-b635-4e83-bcdc-5f102f92e018",
                        "port": "8c3192aa-3b4f-4e5d-8492-247af0943a9b"
                    },
                    "target": {
                        "cell": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                        "port": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5"
                    },
                    "labels": [
                        {
                            "targetPortId": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5",
                            "sourcePortId": "8c3192aa-3b4f-4e5d-8492-247af0943a9b",
                            "source": {
                                "cell": "node-d09f51c8-b635-4e83-bcdc-5f102f92e018",
                                "port": "8c3192aa-3b4f-4e5d-8492-247af0943a9b"
                            },
                            "target": {
                                "cell": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                                "port": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5",
                                "sourcePortId": "8c3192aa-3b4f-4e5d-8492-247af0943a9b",
                                "source": "node-d09f51c8-b635-4e83-bcdc-5f102f92e018",
                                "target": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-d09f51c8-b635-4e83-bcdc-5f102f92e018:8c3192aa-3b4f-4e5d-8492-247af0943a9b-node-5c5e445a-f775-4d1b-8a55-554efccfd476:314f73e8-5ea1-4265-aaac-3f5a20fdbbb5",
                            "sourcePort": "8c3192aa-3b4f-4e5d-8492-247af0943a9b",
                            "targetPort": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5"
                        }
                    ]
                }
            ],
            "outgoingEdges": [
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5"
                        }
                    },
                    "id": "node-5c5e445a-f775-4d1b-8a55-554efccfd476:0eda0ed5-08fa-4441-9e98-510c6408be82-node-f6984c8b-d655-4b88-9bad-fb3676243be7:8c7ab667-9308-4c6a-bc1a-27affb627c75",
                    "targetPortId": "8c7ab667-9308-4c6a-bc1a-27affb627c75",
                    "sourcePortId": "0eda0ed5-08fa-4441-9e98-510c6408be82",
                    "zIndex": 1,
                    "data": {
                        "targetPortId": "8c7ab667-9308-4c6a-bc1a-27affb627c75",
                        "sourcePortId": "0eda0ed5-08fa-4441-9e98-510c6408be82",
                        "source": {
                            "cell": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                            "port": "0eda0ed5-08fa-4441-9e98-510c6408be82"
                        },
                        "target": {
                            "cell": "node-f6984c8b-d655-4b88-9bad-fb3676243be7",
                            "port": "8c7ab667-9308-4c6a-bc1a-27affb627c75"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "8c7ab667-9308-4c6a-bc1a-27affb627c75",
                            "sourcePortId": "0eda0ed5-08fa-4441-9e98-510c6408be82",
                            "source": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                            "target": "node-f6984c8b-d655-4b88-9bad-fb3676243be7",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "id": "node-5c5e445a-f775-4d1b-8a55-554efccfd476:0eda0ed5-08fa-4441-9e98-510c6408be82-node-f6984c8b-d655-4b88-9bad-fb3676243be7:8c7ab667-9308-4c6a-bc1a-27affb627c75",
                        "sourcePort": "0eda0ed5-08fa-4441-9e98-510c6408be82",
                        "targetPort": "8c7ab667-9308-4c6a-bc1a-27affb627c75"
                    },
                    "source": {
                        "cell": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                        "port": "0eda0ed5-08fa-4441-9e98-510c6408be82"
                    },
                    "target": {
                        "cell": "node-f6984c8b-d655-4b88-9bad-fb3676243be7",
                        "port": "8c7ab667-9308-4c6a-bc1a-27affb627c75"
                    },
                    "labels": [
                        {
                            "targetPortId": "8c7ab667-9308-4c6a-bc1a-27affb627c75",
                            "sourcePortId": "0eda0ed5-08fa-4441-9e98-510c6408be82",
                            "source": {
                                "cell": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                                "port": "0eda0ed5-08fa-4441-9e98-510c6408be82"
                            },
                            "target": {
                                "cell": "node-f6984c8b-d655-4b88-9bad-fb3676243be7",
                                "port": "8c7ab667-9308-4c6a-bc1a-27affb627c75"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "8c7ab667-9308-4c6a-bc1a-27affb627c75",
                                "sourcePortId": "0eda0ed5-08fa-4441-9e98-510c6408be82",
                                "source": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                                "target": "node-f6984c8b-d655-4b88-9bad-fb3676243be7",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-5c5e445a-f775-4d1b-8a55-554efccfd476:0eda0ed5-08fa-4441-9e98-510c6408be82-node-f6984c8b-d655-4b88-9bad-fb3676243be7:8c7ab667-9308-4c6a-bc1a-27affb627c75",
                            "sourcePort": "0eda0ed5-08fa-4441-9e98-510c6408be82",
                            "targetPort": "8c7ab667-9308-4c6a-bc1a-27affb627c75"
                        }
                    ]
                }
            ],
            // "fontSize": 18,
            // "stroke": "#f5a623"
            "stroke": '#096dd9',
            "fontSize": 18,
            "fill": '#1890ff',
            'fontFill': '#fff',
            'data': {
              // 当前节点的状态  已执行 正在执行 未执行的节点 三个状态 NOT_STARTED = '未执行',  RUNNING = '正在执行',  DONE = '已执行'  
              statue: 'RUNNING',
              info: {

              },

            }
        },
        {
            "id": "node-f6984c8b-d655-4b88-9bad-fb3676243be7",
            "renderKey": "JudgmentNode",
            "name": "JudgmentNode",
            "label": "款式型产品",
            "width": 180,
            "height": 60,
            "ports": {
                "items": [
                    {
                        "group": "top",
                        "id": "8c7ab667-9308-4c6a-bc1a-27affb627c75"
                    },
                    {
                        "group": "right",
                        "id": "f14434c6-981d-4157-a0a3-a5a96887544f"
                    },
                    {
                        "group": "bottom",
                        "id": "da011eb4-995e-4d42-b4a9-aae8e2216f95"
                    },
                    {
                        "group": "left",
                        "id": "e64afb7d-73fb-42a3-af61-322da667d30c"
                    }
                ],
                "groups": {
                    "top": {
                        "position": {
                            "name": "top"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "right": {
                        "position": {
                            "name": "right"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "bottom": {
                        "position": {
                            "name": "bottom"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "left": {
                        "position": {
                            "name": "left"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    }
                }
            },
            "originData": {
                "component": {
                    "compare": null
                },
                "name": "JudgmentNode",
                "width": 180,
                "height": 60,
                "label": "自定义判断节点"
            },
            "isCustom": true,
            "x": 1073,
            "y": 240,
            "zIndex": 10,
            "incomingEdges": [
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5"
                        }
                    },
                    "id": "node-5c5e445a-f775-4d1b-8a55-554efccfd476:0eda0ed5-08fa-4441-9e98-510c6408be82-node-f6984c8b-d655-4b88-9bad-fb3676243be7:8c7ab667-9308-4c6a-bc1a-27affb627c75",
                    "targetPortId": "8c7ab667-9308-4c6a-bc1a-27affb627c75",
                    "sourcePortId": "0eda0ed5-08fa-4441-9e98-510c6408be82",
                    "zIndex": 1,
                    "data": {
                        "targetPortId": "8c7ab667-9308-4c6a-bc1a-27affb627c75",
                        "sourcePortId": "0eda0ed5-08fa-4441-9e98-510c6408be82",
                        "source": {
                            "cell": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                            "port": "0eda0ed5-08fa-4441-9e98-510c6408be82"
                        },
                        "target": {
                            "cell": "node-f6984c8b-d655-4b88-9bad-fb3676243be7",
                            "port": "8c7ab667-9308-4c6a-bc1a-27affb627c75"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "8c7ab667-9308-4c6a-bc1a-27affb627c75",
                            "sourcePortId": "0eda0ed5-08fa-4441-9e98-510c6408be82",
                            "source": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                            "target": "node-f6984c8b-d655-4b88-9bad-fb3676243be7",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "id": "node-5c5e445a-f775-4d1b-8a55-554efccfd476:0eda0ed5-08fa-4441-9e98-510c6408be82-node-f6984c8b-d655-4b88-9bad-fb3676243be7:8c7ab667-9308-4c6a-bc1a-27affb627c75",
                        "sourcePort": "0eda0ed5-08fa-4441-9e98-510c6408be82",
                        "targetPort": "8c7ab667-9308-4c6a-bc1a-27affb627c75"
                    },
                    "source": {
                        "cell": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                        "port": "0eda0ed5-08fa-4441-9e98-510c6408be82"
                    },
                    "target": {
                        "cell": "node-f6984c8b-d655-4b88-9bad-fb3676243be7",
                        "port": "8c7ab667-9308-4c6a-bc1a-27affb627c75"
                    },
                    "labels": [
                        {
                            "targetPortId": "8c7ab667-9308-4c6a-bc1a-27affb627c75",
                            "sourcePortId": "0eda0ed5-08fa-4441-9e98-510c6408be82",
                            "source": {
                                "cell": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                                "port": "0eda0ed5-08fa-4441-9e98-510c6408be82"
                            },
                            "target": {
                                "cell": "node-f6984c8b-d655-4b88-9bad-fb3676243be7",
                                "port": "8c7ab667-9308-4c6a-bc1a-27affb627c75"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "8c7ab667-9308-4c6a-bc1a-27affb627c75",
                                "sourcePortId": "0eda0ed5-08fa-4441-9e98-510c6408be82",
                                "source": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                                "target": "node-f6984c8b-d655-4b88-9bad-fb3676243be7",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-5c5e445a-f775-4d1b-8a55-554efccfd476:0eda0ed5-08fa-4441-9e98-510c6408be82-node-f6984c8b-d655-4b88-9bad-fb3676243be7:8c7ab667-9308-4c6a-bc1a-27affb627c75",
                            "sourcePort": "0eda0ed5-08fa-4441-9e98-510c6408be82",
                            "targetPort": "8c7ab667-9308-4c6a-bc1a-27affb627c75"
                        }
                    ]
                },
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5",
                            "label": "否"
                        }
                    },
                    "id": "node-b2ca036d-8cc0-4415-9947-c21c4a006b25:3830023a-937e-4801-a2fe-407234d8bcc4-node-f6984c8b-d655-4b88-9bad-fb3676243be7:e64afb7d-73fb-42a3-af61-322da667d30c",
                    "targetPortId": "e64afb7d-73fb-42a3-af61-322da667d30c",
                    "sourcePortId": "3830023a-937e-4801-a2fe-407234d8bcc4",
                    "zIndex": 1,
                    "data": {
                        "id": "node-b2ca036d-8cc0-4415-9947-c21c4a006b25:3830023a-937e-4801-a2fe-407234d8bcc4-node-f6984c8b-d655-4b88-9bad-fb3676243be7:e64afb7d-73fb-42a3-af61-322da667d30c",
                        "targetPortId": "e64afb7d-73fb-42a3-af61-322da667d30c",
                        "sourcePortId": "3830023a-937e-4801-a2fe-407234d8bcc4",
                        "source": {
                            "cell": "node-b2ca036d-8cc0-4415-9947-c21c4a006b25",
                            "port": "3830023a-937e-4801-a2fe-407234d8bcc4"
                        },
                        "target": {
                            "cell": "node-f6984c8b-d655-4b88-9bad-fb3676243be7",
                            "port": "e64afb7d-73fb-42a3-af61-322da667d30c"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1,
                                "label": "否"
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "e64afb7d-73fb-42a3-af61-322da667d30c",
                            "sourcePortId": "3830023a-937e-4801-a2fe-407234d8bcc4",
                            "source": "node-b2ca036d-8cc0-4415-9947-c21c4a006b25",
                            "target": "node-f6984c8b-d655-4b88-9bad-fb3676243be7",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "sourcePort": "3830023a-937e-4801-a2fe-407234d8bcc4",
                        "targetPort": "e64afb7d-73fb-42a3-af61-322da667d30c",
                        "label": "否"
                    },
                    "source": {
                        "cell": "node-b2ca036d-8cc0-4415-9947-c21c4a006b25",
                        "port": "3830023a-937e-4801-a2fe-407234d8bcc4"
                    },
                    "target": {
                        "cell": "node-f6984c8b-d655-4b88-9bad-fb3676243be7",
                        "port": "e64afb7d-73fb-42a3-af61-322da667d30c"
                    },
                    "labels": [
                        {
                            "attrs": {
                                "label": {
                                    "text": "否"
                                }
                            }
                        }
                    ]
                }
            ],
            "outgoingEdges": [
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5",
                            "label": "是"
                        }
                    },
                    "id": "node-f6984c8b-d655-4b88-9bad-fb3676243be7:da011eb4-995e-4d42-b4a9-aae8e2216f95-node-125b649f-a496-4a5a-81ef-d37b5a36c2a9:afbff0aa-f7c3-4471-a5e9-329ec5d2bab0",
                    "targetPortId": "afbff0aa-f7c3-4471-a5e9-329ec5d2bab0",
                    "sourcePortId": "da011eb4-995e-4d42-b4a9-aae8e2216f95",
                    "zIndex": 1,
                    "data": {
                        "id": "node-f6984c8b-d655-4b88-9bad-fb3676243be7:da011eb4-995e-4d42-b4a9-aae8e2216f95-node-125b649f-a496-4a5a-81ef-d37b5a36c2a9:afbff0aa-f7c3-4471-a5e9-329ec5d2bab0",
                        "targetPortId": "afbff0aa-f7c3-4471-a5e9-329ec5d2bab0",
                        "sourcePortId": "da011eb4-995e-4d42-b4a9-aae8e2216f95",
                        "source": {
                            "cell": "node-f6984c8b-d655-4b88-9bad-fb3676243be7",
                            "port": "da011eb4-995e-4d42-b4a9-aae8e2216f95"
                        },
                        "target": {
                            "cell": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                            "port": "afbff0aa-f7c3-4471-a5e9-329ec5d2bab0"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1,
                                "label": "是"
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "afbff0aa-f7c3-4471-a5e9-329ec5d2bab0",
                            "sourcePortId": "da011eb4-995e-4d42-b4a9-aae8e2216f95",
                            "source": "node-f6984c8b-d655-4b88-9bad-fb3676243be7",
                            "target": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "sourcePort": "da011eb4-995e-4d42-b4a9-aae8e2216f95",
                        "targetPort": "afbff0aa-f7c3-4471-a5e9-329ec5d2bab0",
                        "label": "是"
                    },
                    "source": {
                        "cell": "node-f6984c8b-d655-4b88-9bad-fb3676243be7",
                        "port": "da011eb4-995e-4d42-b4a9-aae8e2216f95"
                    },
                    "target": {
                        "cell": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                        "port": "afbff0aa-f7c3-4471-a5e9-329ec5d2bab0"
                    },
                    "labels": [
                        {
                            "attrs": {
                                "label": {
                                    "text": "是"
                                }
                            }
                        }
                    ]
                },
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5",
                            "label": "否"
                        }
                    },
                    "id": "node-f6984c8b-d655-4b88-9bad-fb3676243be7:f14434c6-981d-4157-a0a3-a5a96887544f-node-39207817-50a6-4ddd-abcd-30829227705c:bdcbf8cc-3b74-4140-8d59-809f190719e3",
                    "targetPortId": "bdcbf8cc-3b74-4140-8d59-809f190719e3",
                    "sourcePortId": "f14434c6-981d-4157-a0a3-a5a96887544f",
                    "zIndex": 1,
                    "data": {
                        "id": "node-f6984c8b-d655-4b88-9bad-fb3676243be7:f14434c6-981d-4157-a0a3-a5a96887544f-node-39207817-50a6-4ddd-abcd-30829227705c:bdcbf8cc-3b74-4140-8d59-809f190719e3",
                        "targetPortId": "bdcbf8cc-3b74-4140-8d59-809f190719e3",
                        "sourcePortId": "f14434c6-981d-4157-a0a3-a5a96887544f",
                        "source": {
                            "cell": "node-f6984c8b-d655-4b88-9bad-fb3676243be7",
                            "port": "f14434c6-981d-4157-a0a3-a5a96887544f"
                        },
                        "target": {
                            "cell": "node-39207817-50a6-4ddd-abcd-30829227705c",
                            "port": "bdcbf8cc-3b74-4140-8d59-809f190719e3"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1,
                                "label": "否"
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "bdcbf8cc-3b74-4140-8d59-809f190719e3",
                            "sourcePortId": "f14434c6-981d-4157-a0a3-a5a96887544f",
                            "source": "node-f6984c8b-d655-4b88-9bad-fb3676243be7",
                            "target": "node-39207817-50a6-4ddd-abcd-30829227705c",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "sourcePort": "f14434c6-981d-4157-a0a3-a5a96887544f",
                        "targetPort": "bdcbf8cc-3b74-4140-8d59-809f190719e3",
                        "label": "否"
                    },
                    "source": {
                        "cell": "node-f6984c8b-d655-4b88-9bad-fb3676243be7",
                        "port": "f14434c6-981d-4157-a0a3-a5a96887544f"
                    },
                    "target": {
                        "cell": "node-39207817-50a6-4ddd-abcd-30829227705c",
                        "port": "bdcbf8cc-3b74-4140-8d59-809f190719e3"
                    },
                    "labels": [
                        {
                            "attrs": {
                                "label": {
                                    "text": "否"
                                }
                            }
                        }
                    ]
                }
            ],
            "fontSize": 18,
            "stroke": "#f5a623"
        },
        {
            "id": "node-39207817-50a6-4ddd-abcd-30829227705c",
            "renderKey": "ProcessNode",
            "name": "ProcessNode",
            "label": "出性价比策略",
            "width": 180,
            "height": 60,
            "ports": {
                "items": [
                    {
                        "group": "top",
                        "id": "14cc87ad-3be8-4693-8b53-38e6ea6ceac9"
                    },
                    {
                        "group": "right",
                        "id": "d460e613-a8fe-4053-9698-d8b3040c9b74"
                    },
                    {
                        "group": "bottom",
                        "id": "e809c21e-daed-451e-ad68-2acf71e91a66"
                    },
                    {
                        "group": "left",
                        "id": "bdcbf8cc-3b74-4140-8d59-809f190719e3"
                    }
                ],
                "groups": {
                    "top": {
                        "position": {
                            "name": "top"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "right": {
                        "position": {
                            "name": "right"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "bottom": {
                        "position": {
                            "name": "bottom"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "left": {
                        "position": {
                            "name": "left"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    }
                }
            },
            "originData": {
                "name": "ProcessNode",
                "width": 180,
                "height": 60,
                "label": "自定义步骤节点"
            },
            "isCustom": true,
            "x": 1345,
            "y": 240,
            "zIndex": 10,
            "incomingEdges": [
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5",
                            "label": "否"
                        }
                    },
                    "id": "node-f6984c8b-d655-4b88-9bad-fb3676243be7:f14434c6-981d-4157-a0a3-a5a96887544f-node-39207817-50a6-4ddd-abcd-30829227705c:bdcbf8cc-3b74-4140-8d59-809f190719e3",
                    "targetPortId": "bdcbf8cc-3b74-4140-8d59-809f190719e3",
                    "sourcePortId": "f14434c6-981d-4157-a0a3-a5a96887544f",
                    "zIndex": 1,
                    "data": {
                        "id": "node-f6984c8b-d655-4b88-9bad-fb3676243be7:f14434c6-981d-4157-a0a3-a5a96887544f-node-39207817-50a6-4ddd-abcd-30829227705c:bdcbf8cc-3b74-4140-8d59-809f190719e3",
                        "targetPortId": "bdcbf8cc-3b74-4140-8d59-809f190719e3",
                        "sourcePortId": "f14434c6-981d-4157-a0a3-a5a96887544f",
                        "source": {
                            "cell": "node-f6984c8b-d655-4b88-9bad-fb3676243be7",
                            "port": "f14434c6-981d-4157-a0a3-a5a96887544f"
                        },
                        "target": {
                            "cell": "node-39207817-50a6-4ddd-abcd-30829227705c",
                            "port": "bdcbf8cc-3b74-4140-8d59-809f190719e3"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1,
                                "label": "否"
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "bdcbf8cc-3b74-4140-8d59-809f190719e3",
                            "sourcePortId": "f14434c6-981d-4157-a0a3-a5a96887544f",
                            "source": "node-f6984c8b-d655-4b88-9bad-fb3676243be7",
                            "target": "node-39207817-50a6-4ddd-abcd-30829227705c",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "sourcePort": "f14434c6-981d-4157-a0a3-a5a96887544f",
                        "targetPort": "bdcbf8cc-3b74-4140-8d59-809f190719e3",
                        "label": "否"
                    },
                    "source": {
                        "cell": "node-f6984c8b-d655-4b88-9bad-fb3676243be7",
                        "port": "f14434c6-981d-4157-a0a3-a5a96887544f"
                    },
                    "target": {
                        "cell": "node-39207817-50a6-4ddd-abcd-30829227705c",
                        "port": "bdcbf8cc-3b74-4140-8d59-809f190719e3"
                    },
                    "labels": [
                        {
                            "attrs": {
                                "label": {
                                    "text": "否"
                                }
                            }
                        }
                    ]
                }
            ],
            "outgoingEdges": [
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5"
                        }
                    },
                    "id": "node-39207817-50a6-4ddd-abcd-30829227705c:d460e613-a8fe-4053-9698-d8b3040c9b74-node-1fbcf552-d5de-43b1-ba92-edac141e477b:f7fff283-eeeb-47fe-9b56-97539000f175",
                    "targetPortId": "f7fff283-eeeb-47fe-9b56-97539000f175",
                    "sourcePortId": "d460e613-a8fe-4053-9698-d8b3040c9b74",
                    "zIndex": 1,
                    "data": {
                        "targetPortId": "f7fff283-eeeb-47fe-9b56-97539000f175",
                        "sourcePortId": "d460e613-a8fe-4053-9698-d8b3040c9b74",
                        "source": {
                            "cell": "node-39207817-50a6-4ddd-abcd-30829227705c",
                            "port": "d460e613-a8fe-4053-9698-d8b3040c9b74"
                        },
                        "target": {
                            "cell": "node-1fbcf552-d5de-43b1-ba92-edac141e477b",
                            "port": "f7fff283-eeeb-47fe-9b56-97539000f175"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "f7fff283-eeeb-47fe-9b56-97539000f175",
                            "sourcePortId": "d460e613-a8fe-4053-9698-d8b3040c9b74",
                            "source": "node-39207817-50a6-4ddd-abcd-30829227705c",
                            "target": "node-1fbcf552-d5de-43b1-ba92-edac141e477b",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "id": "node-39207817-50a6-4ddd-abcd-30829227705c:d460e613-a8fe-4053-9698-d8b3040c9b74-node-1fbcf552-d5de-43b1-ba92-edac141e477b:f7fff283-eeeb-47fe-9b56-97539000f175",
                        "sourcePort": "d460e613-a8fe-4053-9698-d8b3040c9b74",
                        "targetPort": "f7fff283-eeeb-47fe-9b56-97539000f175"
                    },
                    "source": {
                        "cell": "node-39207817-50a6-4ddd-abcd-30829227705c",
                        "port": "d460e613-a8fe-4053-9698-d8b3040c9b74"
                    },
                    "target": {
                        "cell": "node-1fbcf552-d5de-43b1-ba92-edac141e477b",
                        "port": "f7fff283-eeeb-47fe-9b56-97539000f175"
                    },
                    "labels": [
                        {
                            "targetPortId": "f7fff283-eeeb-47fe-9b56-97539000f175",
                            "sourcePortId": "d460e613-a8fe-4053-9698-d8b3040c9b74",
                            "source": {
                                "cell": "node-39207817-50a6-4ddd-abcd-30829227705c",
                                "port": "d460e613-a8fe-4053-9698-d8b3040c9b74"
                            },
                            "target": {
                                "cell": "node-1fbcf552-d5de-43b1-ba92-edac141e477b",
                                "port": "f7fff283-eeeb-47fe-9b56-97539000f175"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "f7fff283-eeeb-47fe-9b56-97539000f175",
                                "sourcePortId": "d460e613-a8fe-4053-9698-d8b3040c9b74",
                                "source": "node-39207817-50a6-4ddd-abcd-30829227705c",
                                "target": "node-1fbcf552-d5de-43b1-ba92-edac141e477b",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-39207817-50a6-4ddd-abcd-30829227705c:d460e613-a8fe-4053-9698-d8b3040c9b74-node-1fbcf552-d5de-43b1-ba92-edac141e477b:f7fff283-eeeb-47fe-9b56-97539000f175",
                            "sourcePort": "d460e613-a8fe-4053-9698-d8b3040c9b74",
                            "targetPort": "f7fff283-eeeb-47fe-9b56-97539000f175"
                        }
                    ]
                }
            ],
            "fontSize": 18,
            "stroke": "#7ed321"
        },
        {
            "id": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
            "renderKey": "ProcessNode",
            "name": "ProcessNode",
            "label": "设计款式",
            "width": 180,
            "height": 60,
            "ports": {
                "items": [
                    {
                        "group": "top",
                        "id": "afbff0aa-f7c3-4471-a5e9-329ec5d2bab0"
                    },
                    {
                        "group": "right",
                        "id": "07b4d995-8490-46d8-8cae-238bb39e2ea6"
                    },
                    {
                        "group": "bottom",
                        "id": "ff554a0b-0932-47d5-8a0c-e44f0c6df853"
                    },
                    {
                        "group": "left",
                        "id": "283352b4-41ef-43a9-b0b0-6529e3b67e9b"
                    }
                ],
                "groups": {
                    "top": {
                        "position": {
                            "name": "top"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "right": {
                        "position": {
                            "name": "right"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "bottom": {
                        "position": {
                            "name": "bottom"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "left": {
                        "position": {
                            "name": "left"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    }
                }
            },
            "originData": {
                "name": "ProcessNode",
                "width": 180,
                "height": 60,
                "label": "自定义步骤节点"
            },
            "isCustom": true,
            "x": 1073,
            "y": 487,
            "zIndex": 10,
            "incomingEdges": [
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5",
                            "label": "是"
                        }
                    },
                    "id": "node-f6984c8b-d655-4b88-9bad-fb3676243be7:da011eb4-995e-4d42-b4a9-aae8e2216f95-node-125b649f-a496-4a5a-81ef-d37b5a36c2a9:afbff0aa-f7c3-4471-a5e9-329ec5d2bab0",
                    "targetPortId": "afbff0aa-f7c3-4471-a5e9-329ec5d2bab0",
                    "sourcePortId": "da011eb4-995e-4d42-b4a9-aae8e2216f95",
                    "zIndex": 1,
                    "data": {
                        "id": "node-f6984c8b-d655-4b88-9bad-fb3676243be7:da011eb4-995e-4d42-b4a9-aae8e2216f95-node-125b649f-a496-4a5a-81ef-d37b5a36c2a9:afbff0aa-f7c3-4471-a5e9-329ec5d2bab0",
                        "targetPortId": "afbff0aa-f7c3-4471-a5e9-329ec5d2bab0",
                        "sourcePortId": "da011eb4-995e-4d42-b4a9-aae8e2216f95",
                        "source": {
                            "cell": "node-f6984c8b-d655-4b88-9bad-fb3676243be7",
                            "port": "da011eb4-995e-4d42-b4a9-aae8e2216f95"
                        },
                        "target": {
                            "cell": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                            "port": "afbff0aa-f7c3-4471-a5e9-329ec5d2bab0"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1,
                                "label": "是"
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "afbff0aa-f7c3-4471-a5e9-329ec5d2bab0",
                            "sourcePortId": "da011eb4-995e-4d42-b4a9-aae8e2216f95",
                            "source": "node-f6984c8b-d655-4b88-9bad-fb3676243be7",
                            "target": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "sourcePort": "da011eb4-995e-4d42-b4a9-aae8e2216f95",
                        "targetPort": "afbff0aa-f7c3-4471-a5e9-329ec5d2bab0",
                        "label": "是"
                    },
                    "source": {
                        "cell": "node-f6984c8b-d655-4b88-9bad-fb3676243be7",
                        "port": "da011eb4-995e-4d42-b4a9-aae8e2216f95"
                    },
                    "target": {
                        "cell": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                        "port": "afbff0aa-f7c3-4471-a5e9-329ec5d2bab0"
                    },
                    "labels": [
                        {
                            "attrs": {
                                "label": {
                                    "text": "是"
                                }
                            }
                        }
                    ]
                },
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5",
                            "label": "否"
                        }
                    },
                    "id": "node-c34e4a14-d014-456c-bcf3-67251212ce82:5581f842-9ebf-46c7-8e9c-fcbb32e4881e-node-125b649f-a496-4a5a-81ef-d37b5a36c2a9:ff554a0b-0932-47d5-8a0c-e44f0c6df853",
                    "targetPortId": "ff554a0b-0932-47d5-8a0c-e44f0c6df853",
                    "sourcePortId": "5581f842-9ebf-46c7-8e9c-fcbb32e4881e",
                    "zIndex": 1,
                    "data": {
                        "id": "node-c34e4a14-d014-456c-bcf3-67251212ce82:5581f842-9ebf-46c7-8e9c-fcbb32e4881e-node-125b649f-a496-4a5a-81ef-d37b5a36c2a9:ff554a0b-0932-47d5-8a0c-e44f0c6df853",
                        "targetPortId": "ff554a0b-0932-47d5-8a0c-e44f0c6df853",
                        "sourcePortId": "5581f842-9ebf-46c7-8e9c-fcbb32e4881e",
                        "source": {
                            "cell": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                            "port": "5581f842-9ebf-46c7-8e9c-fcbb32e4881e"
                        },
                        "target": {
                            "cell": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                            "port": "ff554a0b-0932-47d5-8a0c-e44f0c6df853"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1,
                                "label": "否"
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "ff554a0b-0932-47d5-8a0c-e44f0c6df853",
                            "sourcePortId": "5581f842-9ebf-46c7-8e9c-fcbb32e4881e",
                            "source": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                            "target": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "sourcePort": "5581f842-9ebf-46c7-8e9c-fcbb32e4881e",
                        "targetPort": "ff554a0b-0932-47d5-8a0c-e44f0c6df853",
                        "label": "否"
                    },
                    "source": {
                        "cell": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                        "port": "5581f842-9ebf-46c7-8e9c-fcbb32e4881e"
                    },
                    "target": {
                        "cell": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                        "port": "ff554a0b-0932-47d5-8a0c-e44f0c6df853"
                    },
                    "labels": [
                        {
                            "attrs": {
                                "label": {
                                    "text": "否"
                                }
                            }
                        }
                    ]
                }
            ],
            "outgoingEdges": [
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5"
                        }
                    },
                    "id": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9:07b4d995-8490-46d8-8cae-238bb39e2ea6-node-c34e4a14-d014-456c-bcf3-67251212ce82:9751fb89-7e25-4aa4-8eaf-7db41d695da9",
                    "targetPortId": "9751fb89-7e25-4aa4-8eaf-7db41d695da9",
                    "sourcePortId": "07b4d995-8490-46d8-8cae-238bb39e2ea6",
                    "zIndex": 1,
                    "data": {
                        "targetPortId": "9751fb89-7e25-4aa4-8eaf-7db41d695da9",
                        "sourcePortId": "07b4d995-8490-46d8-8cae-238bb39e2ea6",
                        "source": {
                            "cell": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                            "port": "07b4d995-8490-46d8-8cae-238bb39e2ea6"
                        },
                        "target": {
                            "cell": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                            "port": "9751fb89-7e25-4aa4-8eaf-7db41d695da9"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "9751fb89-7e25-4aa4-8eaf-7db41d695da9",
                            "sourcePortId": "07b4d995-8490-46d8-8cae-238bb39e2ea6",
                            "source": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                            "target": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "id": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9:07b4d995-8490-46d8-8cae-238bb39e2ea6-node-c34e4a14-d014-456c-bcf3-67251212ce82:9751fb89-7e25-4aa4-8eaf-7db41d695da9",
                        "sourcePort": "07b4d995-8490-46d8-8cae-238bb39e2ea6",
                        "targetPort": "9751fb89-7e25-4aa4-8eaf-7db41d695da9"
                    },
                    "source": {
                        "cell": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                        "port": "07b4d995-8490-46d8-8cae-238bb39e2ea6"
                    },
                    "target": {
                        "cell": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                        "port": "9751fb89-7e25-4aa4-8eaf-7db41d695da9"
                    },
                    "labels": [
                        {
                            "targetPortId": "9751fb89-7e25-4aa4-8eaf-7db41d695da9",
                            "sourcePortId": "07b4d995-8490-46d8-8cae-238bb39e2ea6",
                            "source": {
                                "cell": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                                "port": "07b4d995-8490-46d8-8cae-238bb39e2ea6"
                            },
                            "target": {
                                "cell": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                                "port": "9751fb89-7e25-4aa4-8eaf-7db41d695da9"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "9751fb89-7e25-4aa4-8eaf-7db41d695da9",
                                "sourcePortId": "07b4d995-8490-46d8-8cae-238bb39e2ea6",
                                "source": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                                "target": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9:07b4d995-8490-46d8-8cae-238bb39e2ea6-node-c34e4a14-d014-456c-bcf3-67251212ce82:9751fb89-7e25-4aa4-8eaf-7db41d695da9",
                            "sourcePort": "07b4d995-8490-46d8-8cae-238bb39e2ea6",
                            "targetPort": "9751fb89-7e25-4aa4-8eaf-7db41d695da9"
                        }
                    ]
                }
            ],
            "fontSize": 18,
            "stroke": "#7ed321"
        },
        {
            "id": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
            "renderKey": "JudgmentNode",
            "name": "JudgmentNode",
            "label": "产品讨论会",
            "width": 180,
            "height": 60,
            "ports": {
                "items": [
                    {
                        "group": "top",
                        "id": "db2cdff6-f584-4bb9-8a8b-84d153951b17"
                    },
                    {
                        "group": "right",
                        "id": "9b30eaae-7513-4afa-9f81-e62f16bc30e1"
                    },
                    {
                        "group": "bottom",
                        "id": "5581f842-9ebf-46c7-8e9c-fcbb32e4881e"
                    },
                    {
                        "group": "left",
                        "id": "9751fb89-7e25-4aa4-8eaf-7db41d695da9"
                    }
                ],
                "groups": {
                    "top": {
                        "position": {
                            "name": "top"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "right": {
                        "position": {
                            "name": "right"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "bottom": {
                        "position": {
                            "name": "bottom"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "left": {
                        "position": {
                            "name": "left"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    }
                }
            },
            "originData": {
                "component": {
                    "compare": null
                },
                "name": "JudgmentNode",
                "width": 180,
                "height": 60,
                "label": "自定义判断节点"
            },
            "isCustom": true,
            "x": 1345,
            "y": 487,
            "zIndex": 10,
            "incomingEdges": [
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5"
                        }
                    },
                    "id": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9:07b4d995-8490-46d8-8cae-238bb39e2ea6-node-c34e4a14-d014-456c-bcf3-67251212ce82:9751fb89-7e25-4aa4-8eaf-7db41d695da9",
                    "targetPortId": "9751fb89-7e25-4aa4-8eaf-7db41d695da9",
                    "sourcePortId": "07b4d995-8490-46d8-8cae-238bb39e2ea6",
                    "zIndex": 1,
                    "data": {
                        "targetPortId": "9751fb89-7e25-4aa4-8eaf-7db41d695da9",
                        "sourcePortId": "07b4d995-8490-46d8-8cae-238bb39e2ea6",
                        "source": {
                            "cell": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                            "port": "07b4d995-8490-46d8-8cae-238bb39e2ea6"
                        },
                        "target": {
                            "cell": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                            "port": "9751fb89-7e25-4aa4-8eaf-7db41d695da9"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "9751fb89-7e25-4aa4-8eaf-7db41d695da9",
                            "sourcePortId": "07b4d995-8490-46d8-8cae-238bb39e2ea6",
                            "source": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                            "target": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "id": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9:07b4d995-8490-46d8-8cae-238bb39e2ea6-node-c34e4a14-d014-456c-bcf3-67251212ce82:9751fb89-7e25-4aa4-8eaf-7db41d695da9",
                        "sourcePort": "07b4d995-8490-46d8-8cae-238bb39e2ea6",
                        "targetPort": "9751fb89-7e25-4aa4-8eaf-7db41d695da9"
                    },
                    "source": {
                        "cell": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                        "port": "07b4d995-8490-46d8-8cae-238bb39e2ea6"
                    },
                    "target": {
                        "cell": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                        "port": "9751fb89-7e25-4aa4-8eaf-7db41d695da9"
                    },
                    "labels": [
                        {
                            "targetPortId": "9751fb89-7e25-4aa4-8eaf-7db41d695da9",
                            "sourcePortId": "07b4d995-8490-46d8-8cae-238bb39e2ea6",
                            "source": {
                                "cell": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                                "port": "07b4d995-8490-46d8-8cae-238bb39e2ea6"
                            },
                            "target": {
                                "cell": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                                "port": "9751fb89-7e25-4aa4-8eaf-7db41d695da9"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "9751fb89-7e25-4aa4-8eaf-7db41d695da9",
                                "sourcePortId": "07b4d995-8490-46d8-8cae-238bb39e2ea6",
                                "source": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                                "target": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9:07b4d995-8490-46d8-8cae-238bb39e2ea6-node-c34e4a14-d014-456c-bcf3-67251212ce82:9751fb89-7e25-4aa4-8eaf-7db41d695da9",
                            "sourcePort": "07b4d995-8490-46d8-8cae-238bb39e2ea6",
                            "targetPort": "9751fb89-7e25-4aa4-8eaf-7db41d695da9"
                        }
                    ]
                }
            ],
            "outgoingEdges": [
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5",
                            "label": "是"
                        }
                    },
                    "id": "node-c34e4a14-d014-456c-bcf3-67251212ce82:9b30eaae-7513-4afa-9f81-e62f16bc30e1-node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0:da7c9f33-6c29-4652-b8df-4b9c4bf7e1c0",
                    "targetPortId": "da7c9f33-6c29-4652-b8df-4b9c4bf7e1c0",
                    "sourcePortId": "9b30eaae-7513-4afa-9f81-e62f16bc30e1",
                    "zIndex": 1,
                    "data": {
                        "id": "node-c34e4a14-d014-456c-bcf3-67251212ce82:9b30eaae-7513-4afa-9f81-e62f16bc30e1-node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0:da7c9f33-6c29-4652-b8df-4b9c4bf7e1c0",
                        "targetPortId": "da7c9f33-6c29-4652-b8df-4b9c4bf7e1c0",
                        "sourcePortId": "9b30eaae-7513-4afa-9f81-e62f16bc30e1",
                        "source": {
                            "cell": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                            "port": "9b30eaae-7513-4afa-9f81-e62f16bc30e1"
                        },
                        "target": {
                            "cell": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0",
                            "port": "da7c9f33-6c29-4652-b8df-4b9c4bf7e1c0"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1,
                                "label": "是"
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "da7c9f33-6c29-4652-b8df-4b9c4bf7e1c0",
                            "sourcePortId": "9b30eaae-7513-4afa-9f81-e62f16bc30e1",
                            "source": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                            "target": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "sourcePort": "9b30eaae-7513-4afa-9f81-e62f16bc30e1",
                        "targetPort": "da7c9f33-6c29-4652-b8df-4b9c4bf7e1c0",
                        "label": "是"
                    },
                    "source": {
                        "cell": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                        "port": "9b30eaae-7513-4afa-9f81-e62f16bc30e1"
                    },
                    "target": {
                        "cell": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0",
                        "port": "da7c9f33-6c29-4652-b8df-4b9c4bf7e1c0"
                    },
                    "labels": [
                        {
                            "attrs": {
                                "label": {
                                    "text": "是"
                                }
                            }
                        }
                    ]
                },
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5",
                            "label": "否"
                        }
                    },
                    "id": "node-c34e4a14-d014-456c-bcf3-67251212ce82:5581f842-9ebf-46c7-8e9c-fcbb32e4881e-node-125b649f-a496-4a5a-81ef-d37b5a36c2a9:ff554a0b-0932-47d5-8a0c-e44f0c6df853",
                    "targetPortId": "ff554a0b-0932-47d5-8a0c-e44f0c6df853",
                    "sourcePortId": "5581f842-9ebf-46c7-8e9c-fcbb32e4881e",
                    "zIndex": 1,
                    "data": {
                        "id": "node-c34e4a14-d014-456c-bcf3-67251212ce82:5581f842-9ebf-46c7-8e9c-fcbb32e4881e-node-125b649f-a496-4a5a-81ef-d37b5a36c2a9:ff554a0b-0932-47d5-8a0c-e44f0c6df853",
                        "targetPortId": "ff554a0b-0932-47d5-8a0c-e44f0c6df853",
                        "sourcePortId": "5581f842-9ebf-46c7-8e9c-fcbb32e4881e",
                        "source": {
                            "cell": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                            "port": "5581f842-9ebf-46c7-8e9c-fcbb32e4881e"
                        },
                        "target": {
                            "cell": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                            "port": "ff554a0b-0932-47d5-8a0c-e44f0c6df853"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1,
                                "label": "否"
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "ff554a0b-0932-47d5-8a0c-e44f0c6df853",
                            "sourcePortId": "5581f842-9ebf-46c7-8e9c-fcbb32e4881e",
                            "source": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                            "target": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "sourcePort": "5581f842-9ebf-46c7-8e9c-fcbb32e4881e",
                        "targetPort": "ff554a0b-0932-47d5-8a0c-e44f0c6df853",
                        "label": "否"
                    },
                    "source": {
                        "cell": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                        "port": "5581f842-9ebf-46c7-8e9c-fcbb32e4881e"
                    },
                    "target": {
                        "cell": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                        "port": "ff554a0b-0932-47d5-8a0c-e44f0c6df853"
                    },
                    "labels": [
                        {
                            "attrs": {
                                "label": {
                                    "text": "否"
                                }
                            }
                        }
                    ]
                }
            ],
            "stroke": "#f5a623",
            "fontSize": 18
        },
        {
            "id": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0",
            "renderKey": "JudgmentNode",
            "name": "JudgmentNode",
            "label": "询价",
            "width": 180,
            "height": 60,
            "ports": {
                "items": [
                    {
                        "group": "top",
                        "id": "4e080032-1831-41a9-92bb-2666d46783b4"
                    },
                    {
                        "group": "right",
                        "id": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d"
                    },
                    {
                        "group": "bottom",
                        "id": "12fc150d-8a47-4660-8cbd-7c7ccb2bc247"
                    },
                    {
                        "group": "left",
                        "id": "da7c9f33-6c29-4652-b8df-4b9c4bf7e1c0"
                    }
                ],
                "groups": {
                    "top": {
                        "position": {
                            "name": "top"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "right": {
                        "position": {
                            "name": "right"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "bottom": {
                        "position": {
                            "name": "bottom"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "left": {
                        "position": {
                            "name": "left"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    }
                }
            },
            "originData": {
                "component": {
                    "compare": null
                },
                "name": "JudgmentNode",
                "width": 180,
                "height": 60,
                "label": "自定义判断节点"
            },
            "isCustom": true,
            "x": 1595,
            "y": 487,
            "zIndex": 10,
            "incomingEdges": [
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5",
                            "label": "是"
                        }
                    },
                    "id": "node-c34e4a14-d014-456c-bcf3-67251212ce82:9b30eaae-7513-4afa-9f81-e62f16bc30e1-node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0:da7c9f33-6c29-4652-b8df-4b9c4bf7e1c0",
                    "targetPortId": "da7c9f33-6c29-4652-b8df-4b9c4bf7e1c0",
                    "sourcePortId": "9b30eaae-7513-4afa-9f81-e62f16bc30e1",
                    "zIndex": 1,
                    "data": {
                        "id": "node-c34e4a14-d014-456c-bcf3-67251212ce82:9b30eaae-7513-4afa-9f81-e62f16bc30e1-node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0:da7c9f33-6c29-4652-b8df-4b9c4bf7e1c0",
                        "targetPortId": "da7c9f33-6c29-4652-b8df-4b9c4bf7e1c0",
                        "sourcePortId": "9b30eaae-7513-4afa-9f81-e62f16bc30e1",
                        "source": {
                            "cell": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                            "port": "9b30eaae-7513-4afa-9f81-e62f16bc30e1"
                        },
                        "target": {
                            "cell": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0",
                            "port": "da7c9f33-6c29-4652-b8df-4b9c4bf7e1c0"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1,
                                "label": "是"
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "da7c9f33-6c29-4652-b8df-4b9c4bf7e1c0",
                            "sourcePortId": "9b30eaae-7513-4afa-9f81-e62f16bc30e1",
                            "source": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                            "target": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "sourcePort": "9b30eaae-7513-4afa-9f81-e62f16bc30e1",
                        "targetPort": "da7c9f33-6c29-4652-b8df-4b9c4bf7e1c0",
                        "label": "是"
                    },
                    "source": {
                        "cell": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                        "port": "9b30eaae-7513-4afa-9f81-e62f16bc30e1"
                    },
                    "target": {
                        "cell": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0",
                        "port": "da7c9f33-6c29-4652-b8df-4b9c4bf7e1c0"
                    },
                    "labels": [
                        {
                            "attrs": {
                                "label": {
                                    "text": "是"
                                }
                            }
                        }
                    ]
                }
            ],
            "outgoingEdges": [
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5"
                        }
                    },
                    "id": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0:c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d-node-164790c3-ba8f-4b4a-bef0-4006f000efa9:ec334731-f845-4b50-b660-0edf1242edd1",
                    "targetPortId": "ec334731-f845-4b50-b660-0edf1242edd1",
                    "sourcePortId": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d",
                    "zIndex": 1,
                    "data": {
                        "targetPortId": "ec334731-f845-4b50-b660-0edf1242edd1",
                        "sourcePortId": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d",
                        "source": {
                            "cell": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0",
                            "port": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d"
                        },
                        "target": {
                            "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                            "port": "ec334731-f845-4b50-b660-0edf1242edd1"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "ec334731-f845-4b50-b660-0edf1242edd1",
                            "sourcePortId": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d",
                            "source": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0",
                            "target": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "id": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0:c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d-node-164790c3-ba8f-4b4a-bef0-4006f000efa9:ec334731-f845-4b50-b660-0edf1242edd1",
                        "sourcePort": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d",
                        "targetPort": "ec334731-f845-4b50-b660-0edf1242edd1"
                    },
                    "source": {
                        "cell": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0",
                        "port": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d"
                    },
                    "target": {
                        "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                        "port": "ec334731-f845-4b50-b660-0edf1242edd1"
                    },
                    "labels": [
                        {
                            "targetPortId": "ec334731-f845-4b50-b660-0edf1242edd1",
                            "sourcePortId": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d",
                            "source": {
                                "cell": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0",
                                "port": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d"
                            },
                            "target": {
                                "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                "port": "ec334731-f845-4b50-b660-0edf1242edd1"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "ec334731-f845-4b50-b660-0edf1242edd1",
                                "sourcePortId": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d",
                                "source": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0",
                                "target": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0:c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d-node-164790c3-ba8f-4b4a-bef0-4006f000efa9:ec334731-f845-4b50-b660-0edf1242edd1",
                            "sourcePort": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d",
                            "targetPort": "ec334731-f845-4b50-b660-0edf1242edd1"
                        }
                    ]
                }
            ],
            "fontSize": 18,
            "stroke": "#f5a623"
        },
        {
            "id": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
            "renderKey": "ProcessNode",
            "name": "ProcessNode",
            "label": "安排样品",
            "width": 180,
            "height": 60,
            "ports": {
                "items": [
                    {
                        "group": "top",
                        "id": "7f3f41c3-e21e-44f0-87a4-72232643938d"
                    },
                    {
                        "group": "right",
                        "id": "4393d104-65cd-4054-a39f-6470621f5080"
                    },
                    {
                        "group": "bottom",
                        "id": "ae318dce-1814-4873-ab34-449666667d2d"
                    },
                    {
                        "group": "left",
                        "id": "ec334731-f845-4b50-b660-0edf1242edd1"
                    }
                ],
                "groups": {
                    "top": {
                        "position": {
                            "name": "top"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "right": {
                        "position": {
                            "name": "right"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "bottom": {
                        "position": {
                            "name": "bottom"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "left": {
                        "position": {
                            "name": "left"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    }
                }
            },
            "originData": {
                "name": "ProcessNode",
                "width": 180,
                "height": 60,
                "label": "自定义步骤节点"
            },
            "isCustom": true,
            "x": 1844,
            "y": 487,
            "zIndex": 10,
            "incomingEdges": [
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5"
                        }
                    },
                    "id": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0:c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d-node-164790c3-ba8f-4b4a-bef0-4006f000efa9:ec334731-f845-4b50-b660-0edf1242edd1",
                    "targetPortId": "ec334731-f845-4b50-b660-0edf1242edd1",
                    "sourcePortId": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d",
                    "zIndex": 1,
                    "data": {
                        "targetPortId": "ec334731-f845-4b50-b660-0edf1242edd1",
                        "sourcePortId": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d",
                        "source": {
                            "cell": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0",
                            "port": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d"
                        },
                        "target": {
                            "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                            "port": "ec334731-f845-4b50-b660-0edf1242edd1"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "ec334731-f845-4b50-b660-0edf1242edd1",
                            "sourcePortId": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d",
                            "source": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0",
                            "target": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "id": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0:c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d-node-164790c3-ba8f-4b4a-bef0-4006f000efa9:ec334731-f845-4b50-b660-0edf1242edd1",
                        "sourcePort": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d",
                        "targetPort": "ec334731-f845-4b50-b660-0edf1242edd1"
                    },
                    "source": {
                        "cell": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0",
                        "port": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d"
                    },
                    "target": {
                        "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                        "port": "ec334731-f845-4b50-b660-0edf1242edd1"
                    },
                    "labels": [
                        {
                            "targetPortId": "ec334731-f845-4b50-b660-0edf1242edd1",
                            "sourcePortId": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d",
                            "source": {
                                "cell": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0",
                                "port": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d"
                            },
                            "target": {
                                "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                "port": "ec334731-f845-4b50-b660-0edf1242edd1"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "ec334731-f845-4b50-b660-0edf1242edd1",
                                "sourcePortId": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d",
                                "source": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0",
                                "target": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0:c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d-node-164790c3-ba8f-4b4a-bef0-4006f000efa9:ec334731-f845-4b50-b660-0edf1242edd1",
                            "sourcePort": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d",
                            "targetPort": "ec334731-f845-4b50-b660-0edf1242edd1"
                        }
                    ]
                }
            ],
            "outgoingEdges": [
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5"
                        }
                    },
                    "id": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9:4393d104-65cd-4054-a39f-6470621f5080-node-3e41bea0-7add-4562-8270-fe4c92bca591:be415689-0e56-4fa9-8aa9-eeb1d87f3e29",
                    "targetPortId": "be415689-0e56-4fa9-8aa9-eeb1d87f3e29",
                    "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
                    "zIndex": 1,
                    "data": {
                        "targetPortId": "be415689-0e56-4fa9-8aa9-eeb1d87f3e29",
                        "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
                        "source": {
                            "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                            "port": "4393d104-65cd-4054-a39f-6470621f5080"
                        },
                        "target": {
                            "cell": "node-3e41bea0-7add-4562-8270-fe4c92bca591",
                            "port": "be415689-0e56-4fa9-8aa9-eeb1d87f3e29"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "be415689-0e56-4fa9-8aa9-eeb1d87f3e29",
                            "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
                            "source": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                            "target": "node-3e41bea0-7add-4562-8270-fe4c92bca591",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "id": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9:4393d104-65cd-4054-a39f-6470621f5080-node-3e41bea0-7add-4562-8270-fe4c92bca591:be415689-0e56-4fa9-8aa9-eeb1d87f3e29",
                        "sourcePort": "4393d104-65cd-4054-a39f-6470621f5080",
                        "targetPort": "be415689-0e56-4fa9-8aa9-eeb1d87f3e29"
                    },
                    "source": {
                        "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                        "port": "4393d104-65cd-4054-a39f-6470621f5080"
                    },
                    "target": {
                        "cell": "node-3e41bea0-7add-4562-8270-fe4c92bca591",
                        "port": "be415689-0e56-4fa9-8aa9-eeb1d87f3e29"
                    },
                    "labels": [
                        {
                            "targetPortId": "be415689-0e56-4fa9-8aa9-eeb1d87f3e29",
                            "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
                            "source": {
                                "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                "port": "4393d104-65cd-4054-a39f-6470621f5080"
                            },
                            "target": {
                                "cell": "node-3e41bea0-7add-4562-8270-fe4c92bca591",
                                "port": "be415689-0e56-4fa9-8aa9-eeb1d87f3e29"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "be415689-0e56-4fa9-8aa9-eeb1d87f3e29",
                                "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
                                "source": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                "target": "node-3e41bea0-7add-4562-8270-fe4c92bca591",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9:4393d104-65cd-4054-a39f-6470621f5080-node-3e41bea0-7add-4562-8270-fe4c92bca591:be415689-0e56-4fa9-8aa9-eeb1d87f3e29",
                            "sourcePort": "4393d104-65cd-4054-a39f-6470621f5080",
                            "targetPort": "be415689-0e56-4fa9-8aa9-eeb1d87f3e29"
                        }
                    ]
                },
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5"
                        }
                    },
                    "id": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9:4393d104-65cd-4054-a39f-6470621f5080-node-ff973138-91a5-4a94-a7ac-47f35ab2522b:76573869-aa36-44f6-857c-30ec1d45436b",
                    "targetPortId": "76573869-aa36-44f6-857c-30ec1d45436b",
                    "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
                    "zIndex": 1,
                    "data": {
                        "targetPortId": "76573869-aa36-44f6-857c-30ec1d45436b",
                        "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
                        "source": {
                            "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                            "port": "4393d104-65cd-4054-a39f-6470621f5080"
                        },
                        "target": {
                            "cell": "node-ff973138-91a5-4a94-a7ac-47f35ab2522b",
                            "port": "76573869-aa36-44f6-857c-30ec1d45436b"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "76573869-aa36-44f6-857c-30ec1d45436b",
                            "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
                            "source": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                            "target": "node-ff973138-91a5-4a94-a7ac-47f35ab2522b",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "id": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9:4393d104-65cd-4054-a39f-6470621f5080-node-ff973138-91a5-4a94-a7ac-47f35ab2522b:76573869-aa36-44f6-857c-30ec1d45436b",
                        "sourcePort": "4393d104-65cd-4054-a39f-6470621f5080",
                        "targetPort": "76573869-aa36-44f6-857c-30ec1d45436b"
                    },
                    "source": {
                        "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                        "port": "4393d104-65cd-4054-a39f-6470621f5080"
                    },
                    "target": {
                        "cell": "node-ff973138-91a5-4a94-a7ac-47f35ab2522b",
                        "port": "76573869-aa36-44f6-857c-30ec1d45436b"
                    },
                    "labels": [
                        {
                            "targetPortId": "76573869-aa36-44f6-857c-30ec1d45436b",
                            "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
                            "source": {
                                "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                "port": "4393d104-65cd-4054-a39f-6470621f5080"
                            },
                            "target": {
                                "cell": "node-ff973138-91a5-4a94-a7ac-47f35ab2522b",
                                "port": "76573869-aa36-44f6-857c-30ec1d45436b"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "76573869-aa36-44f6-857c-30ec1d45436b",
                                "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
                                "source": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                "target": "node-ff973138-91a5-4a94-a7ac-47f35ab2522b",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9:4393d104-65cd-4054-a39f-6470621f5080-node-ff973138-91a5-4a94-a7ac-47f35ab2522b:76573869-aa36-44f6-857c-30ec1d45436b",
                            "sourcePort": "4393d104-65cd-4054-a39f-6470621f5080",
                            "targetPort": "76573869-aa36-44f6-857c-30ec1d45436b"
                        }
                    ]
                },
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5"
                        }
                    },
                    "id": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9:4393d104-65cd-4054-a39f-6470621f5080-node-554557f5-ef74-4273-97c5-c64d621b0ed0:bc2e16e6-e7a8-49a1-8075-36c79877c9a6",
                    "targetPortId": "bc2e16e6-e7a8-49a1-8075-36c79877c9a6",
                    "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
                    "zIndex": 1,
                    "data": {
                        "targetPortId": "bc2e16e6-e7a8-49a1-8075-36c79877c9a6",
                        "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
                        "source": {
                            "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                            "port": "4393d104-65cd-4054-a39f-6470621f5080"
                        },
                        "target": {
                            "cell": "node-554557f5-ef74-4273-97c5-c64d621b0ed0",
                            "port": "bc2e16e6-e7a8-49a1-8075-36c79877c9a6"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "bc2e16e6-e7a8-49a1-8075-36c79877c9a6",
                            "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
                            "source": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                            "target": "node-554557f5-ef74-4273-97c5-c64d621b0ed0",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "id": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9:4393d104-65cd-4054-a39f-6470621f5080-node-554557f5-ef74-4273-97c5-c64d621b0ed0:bc2e16e6-e7a8-49a1-8075-36c79877c9a6",
                        "sourcePort": "4393d104-65cd-4054-a39f-6470621f5080",
                        "targetPort": "bc2e16e6-e7a8-49a1-8075-36c79877c9a6"
                    },
                    "source": {
                        "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                        "port": "4393d104-65cd-4054-a39f-6470621f5080"
                    },
                    "target": {
                        "cell": "node-554557f5-ef74-4273-97c5-c64d621b0ed0",
                        "port": "bc2e16e6-e7a8-49a1-8075-36c79877c9a6"
                    },
                    "labels": [
                        {
                            "targetPortId": "bc2e16e6-e7a8-49a1-8075-36c79877c9a6",
                            "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
                            "source": {
                                "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                "port": "4393d104-65cd-4054-a39f-6470621f5080"
                            },
                            "target": {
                                "cell": "node-554557f5-ef74-4273-97c5-c64d621b0ed0",
                                "port": "bc2e16e6-e7a8-49a1-8075-36c79877c9a6"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "bc2e16e6-e7a8-49a1-8075-36c79877c9a6",
                                "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
                                "source": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                "target": "node-554557f5-ef74-4273-97c5-c64d621b0ed0",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9:4393d104-65cd-4054-a39f-6470621f5080-node-554557f5-ef74-4273-97c5-c64d621b0ed0:bc2e16e6-e7a8-49a1-8075-36c79877c9a6",
                            "sourcePort": "4393d104-65cd-4054-a39f-6470621f5080",
                            "targetPort": "bc2e16e6-e7a8-49a1-8075-36c79877c9a6"
                        }
                    ]
                }
            ],
            "fontSize": 18,
            "stroke": "#7ed321"
        },
        {
            "id": "node-1fbcf552-d5de-43b1-ba92-edac141e477b",
            "renderKey": "JudgmentNode",
            "name": "JudgmentNode",
            "label": "产品讨论会",
            "width": 180,
            "height": 60,
            "ports": {
                "items": [
                    {
                        "group": "top",
                        "id": "fa18a474-4f9e-440f-98f2-83b5262b5b16"
                    },
                    {
                        "group": "right",
                        "id": "e0d81787-f6ea-49a9-a4c6-035d3aa0d1fb"
                    },
                    {
                        "group": "bottom",
                        "id": "b66dc891-8a5b-4050-afc2-b9174263e9e6"
                    },
                    {
                        "group": "left",
                        "id": "f7fff283-eeeb-47fe-9b56-97539000f175"
                    }
                ],
                "groups": {
                    "top": {
                        "position": {
                            "name": "top"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "right": {
                        "position": {
                            "name": "right"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "bottom": {
                        "position": {
                            "name": "bottom"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "left": {
                        "position": {
                            "name": "left"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    }
                }
            },
            "originData": {
                "component": {
                    "compare": null
                },
                "name": "JudgmentNode",
                "width": 180,
                "height": 60,
                "label": "自定义判断节点"
            },
            "isCustom": true,
            "x": 1595,
            "y": 240,
            "zIndex": 10,
            "incomingEdges": [
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5"
                        }
                    },
                    "id": "node-39207817-50a6-4ddd-abcd-30829227705c:d460e613-a8fe-4053-9698-d8b3040c9b74-node-1fbcf552-d5de-43b1-ba92-edac141e477b:f7fff283-eeeb-47fe-9b56-97539000f175",
                    "targetPortId": "f7fff283-eeeb-47fe-9b56-97539000f175",
                    "sourcePortId": "d460e613-a8fe-4053-9698-d8b3040c9b74",
                    "zIndex": 1,
                    "data": {
                        "targetPortId": "f7fff283-eeeb-47fe-9b56-97539000f175",
                        "sourcePortId": "d460e613-a8fe-4053-9698-d8b3040c9b74",
                        "source": {
                            "cell": "node-39207817-50a6-4ddd-abcd-30829227705c",
                            "port": "d460e613-a8fe-4053-9698-d8b3040c9b74"
                        },
                        "target": {
                            "cell": "node-1fbcf552-d5de-43b1-ba92-edac141e477b",
                            "port": "f7fff283-eeeb-47fe-9b56-97539000f175"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "f7fff283-eeeb-47fe-9b56-97539000f175",
                            "sourcePortId": "d460e613-a8fe-4053-9698-d8b3040c9b74",
                            "source": "node-39207817-50a6-4ddd-abcd-30829227705c",
                            "target": "node-1fbcf552-d5de-43b1-ba92-edac141e477b",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "id": "node-39207817-50a6-4ddd-abcd-30829227705c:d460e613-a8fe-4053-9698-d8b3040c9b74-node-1fbcf552-d5de-43b1-ba92-edac141e477b:f7fff283-eeeb-47fe-9b56-97539000f175",
                        "sourcePort": "d460e613-a8fe-4053-9698-d8b3040c9b74",
                        "targetPort": "f7fff283-eeeb-47fe-9b56-97539000f175"
                    },
                    "source": {
                        "cell": "node-39207817-50a6-4ddd-abcd-30829227705c",
                        "port": "d460e613-a8fe-4053-9698-d8b3040c9b74"
                    },
                    "target": {
                        "cell": "node-1fbcf552-d5de-43b1-ba92-edac141e477b",
                        "port": "f7fff283-eeeb-47fe-9b56-97539000f175"
                    },
                    "labels": [
                        {
                            "targetPortId": "f7fff283-eeeb-47fe-9b56-97539000f175",
                            "sourcePortId": "d460e613-a8fe-4053-9698-d8b3040c9b74",
                            "source": {
                                "cell": "node-39207817-50a6-4ddd-abcd-30829227705c",
                                "port": "d460e613-a8fe-4053-9698-d8b3040c9b74"
                            },
                            "target": {
                                "cell": "node-1fbcf552-d5de-43b1-ba92-edac141e477b",
                                "port": "f7fff283-eeeb-47fe-9b56-97539000f175"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "f7fff283-eeeb-47fe-9b56-97539000f175",
                                "sourcePortId": "d460e613-a8fe-4053-9698-d8b3040c9b74",
                                "source": "node-39207817-50a6-4ddd-abcd-30829227705c",
                                "target": "node-1fbcf552-d5de-43b1-ba92-edac141e477b",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-39207817-50a6-4ddd-abcd-30829227705c:d460e613-a8fe-4053-9698-d8b3040c9b74-node-1fbcf552-d5de-43b1-ba92-edac141e477b:f7fff283-eeeb-47fe-9b56-97539000f175",
                            "sourcePort": "d460e613-a8fe-4053-9698-d8b3040c9b74",
                            "targetPort": "f7fff283-eeeb-47fe-9b56-97539000f175"
                        }
                    ]
                }
            ],
            "outgoingEdges": [
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5"
                        }
                    },
                    "id": "node-1fbcf552-d5de-43b1-ba92-edac141e477b:e0d81787-f6ea-49a9-a4c6-035d3aa0d1fb-node-af43c6e2-dfa9-48f3-ab9d-1e0c6c234e15:970cd241-5abf-4dcd-bb95-14cb79a3269c",
                    "targetPortId": "970cd241-5abf-4dcd-bb95-14cb79a3269c",
                    "sourcePortId": "e0d81787-f6ea-49a9-a4c6-035d3aa0d1fb",
                    "zIndex": 1,
                    "data": {
                        "targetPortId": "970cd241-5abf-4dcd-bb95-14cb79a3269c",
                        "sourcePortId": "e0d81787-f6ea-49a9-a4c6-035d3aa0d1fb",
                        "source": {
                            "cell": "node-1fbcf552-d5de-43b1-ba92-edac141e477b",
                            "port": "e0d81787-f6ea-49a9-a4c6-035d3aa0d1fb"
                        },
                        "target": {
                            "cell": "node-af43c6e2-dfa9-48f3-ab9d-1e0c6c234e15",
                            "port": "970cd241-5abf-4dcd-bb95-14cb79a3269c"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "970cd241-5abf-4dcd-bb95-14cb79a3269c",
                            "sourcePortId": "e0d81787-f6ea-49a9-a4c6-035d3aa0d1fb",
                            "source": "node-1fbcf552-d5de-43b1-ba92-edac141e477b",
                            "target": "node-af43c6e2-dfa9-48f3-ab9d-1e0c6c234e15",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "id": "node-1fbcf552-d5de-43b1-ba92-edac141e477b:e0d81787-f6ea-49a9-a4c6-035d3aa0d1fb-node-af43c6e2-dfa9-48f3-ab9d-1e0c6c234e15:970cd241-5abf-4dcd-bb95-14cb79a3269c",
                        "sourcePort": "e0d81787-f6ea-49a9-a4c6-035d3aa0d1fb",
                        "targetPort": "970cd241-5abf-4dcd-bb95-14cb79a3269c"
                    },
                    "source": {
                        "cell": "node-1fbcf552-d5de-43b1-ba92-edac141e477b",
                        "port": "e0d81787-f6ea-49a9-a4c6-035d3aa0d1fb"
                    },
                    "target": {
                        "cell": "node-af43c6e2-dfa9-48f3-ab9d-1e0c6c234e15",
                        "port": "970cd241-5abf-4dcd-bb95-14cb79a3269c"
                    },
                    "labels": [
                        {
                            "targetPortId": "970cd241-5abf-4dcd-bb95-14cb79a3269c",
                            "sourcePortId": "e0d81787-f6ea-49a9-a4c6-035d3aa0d1fb",
                            "source": {
                                "cell": "node-1fbcf552-d5de-43b1-ba92-edac141e477b",
                                "port": "e0d81787-f6ea-49a9-a4c6-035d3aa0d1fb"
                            },
                            "target": {
                                "cell": "node-af43c6e2-dfa9-48f3-ab9d-1e0c6c234e15",
                                "port": "970cd241-5abf-4dcd-bb95-14cb79a3269c"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "970cd241-5abf-4dcd-bb95-14cb79a3269c",
                                "sourcePortId": "e0d81787-f6ea-49a9-a4c6-035d3aa0d1fb",
                                "source": "node-1fbcf552-d5de-43b1-ba92-edac141e477b",
                                "target": "node-af43c6e2-dfa9-48f3-ab9d-1e0c6c234e15",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-1fbcf552-d5de-43b1-ba92-edac141e477b:e0d81787-f6ea-49a9-a4c6-035d3aa0d1fb-node-af43c6e2-dfa9-48f3-ab9d-1e0c6c234e15:970cd241-5abf-4dcd-bb95-14cb79a3269c",
                            "sourcePort": "e0d81787-f6ea-49a9-a4c6-035d3aa0d1fb",
                            "targetPort": "970cd241-5abf-4dcd-bb95-14cb79a3269c"
                        }
                    ]
                }
            ],
            "fontSize": 18,
            "stroke": "#f5a623"
        },
        {
            "id": "node-af43c6e2-dfa9-48f3-ab9d-1e0c6c234e15",
            "renderKey": "JudgmentNode",
            "name": "JudgmentNode",
            "label": "询价",
            "width": 180,
            "height": 60,
            "ports": {
                "items": [
                    {
                        "group": "top",
                        "id": "12333e7a-cb9c-48cc-bc05-5faf36ebafbe"
                    },
                    {
                        "group": "right",
                        "id": "374dba2a-0d12-486d-baf8-6b9da019834c"
                    },
                    {
                        "group": "bottom",
                        "id": "9f411ee3-3772-4d9e-8161-7325ed181dcc"
                    },
                    {
                        "group": "left",
                        "id": "970cd241-5abf-4dcd-bb95-14cb79a3269c"
                    }
                ],
                "groups": {
                    "top": {
                        "position": {
                            "name": "top"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "right": {
                        "position": {
                            "name": "right"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "bottom": {
                        "position": {
                            "name": "bottom"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "left": {
                        "position": {
                            "name": "left"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    }
                }
            },
            "originData": {
                "component": {
                    "compare": null
                },
                "name": "JudgmentNode",
                "width": 180,
                "height": 60,
                "label": "自定义判断节点"
            },
            "isCustom": true,
            "x": 1844,
            "y": 240,
            "zIndex": 10,
            "incomingEdges": [
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5"
                        }
                    },
                    "id": "node-1fbcf552-d5de-43b1-ba92-edac141e477b:e0d81787-f6ea-49a9-a4c6-035d3aa0d1fb-node-af43c6e2-dfa9-48f3-ab9d-1e0c6c234e15:970cd241-5abf-4dcd-bb95-14cb79a3269c",
                    "targetPortId": "970cd241-5abf-4dcd-bb95-14cb79a3269c",
                    "sourcePortId": "e0d81787-f6ea-49a9-a4c6-035d3aa0d1fb",
                    "zIndex": 1,
                    "data": {
                        "targetPortId": "970cd241-5abf-4dcd-bb95-14cb79a3269c",
                        "sourcePortId": "e0d81787-f6ea-49a9-a4c6-035d3aa0d1fb",
                        "source": {
                            "cell": "node-1fbcf552-d5de-43b1-ba92-edac141e477b",
                            "port": "e0d81787-f6ea-49a9-a4c6-035d3aa0d1fb"
                        },
                        "target": {
                            "cell": "node-af43c6e2-dfa9-48f3-ab9d-1e0c6c234e15",
                            "port": "970cd241-5abf-4dcd-bb95-14cb79a3269c"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "970cd241-5abf-4dcd-bb95-14cb79a3269c",
                            "sourcePortId": "e0d81787-f6ea-49a9-a4c6-035d3aa0d1fb",
                            "source": "node-1fbcf552-d5de-43b1-ba92-edac141e477b",
                            "target": "node-af43c6e2-dfa9-48f3-ab9d-1e0c6c234e15",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "id": "node-1fbcf552-d5de-43b1-ba92-edac141e477b:e0d81787-f6ea-49a9-a4c6-035d3aa0d1fb-node-af43c6e2-dfa9-48f3-ab9d-1e0c6c234e15:970cd241-5abf-4dcd-bb95-14cb79a3269c",
                        "sourcePort": "e0d81787-f6ea-49a9-a4c6-035d3aa0d1fb",
                        "targetPort": "970cd241-5abf-4dcd-bb95-14cb79a3269c"
                    },
                    "source": {
                        "cell": "node-1fbcf552-d5de-43b1-ba92-edac141e477b",
                        "port": "e0d81787-f6ea-49a9-a4c6-035d3aa0d1fb"
                    },
                    "target": {
                        "cell": "node-af43c6e2-dfa9-48f3-ab9d-1e0c6c234e15",
                        "port": "970cd241-5abf-4dcd-bb95-14cb79a3269c"
                    },
                    "labels": [
                        {
                            "targetPortId": "970cd241-5abf-4dcd-bb95-14cb79a3269c",
                            "sourcePortId": "e0d81787-f6ea-49a9-a4c6-035d3aa0d1fb",
                            "source": {
                                "cell": "node-1fbcf552-d5de-43b1-ba92-edac141e477b",
                                "port": "e0d81787-f6ea-49a9-a4c6-035d3aa0d1fb"
                            },
                            "target": {
                                "cell": "node-af43c6e2-dfa9-48f3-ab9d-1e0c6c234e15",
                                "port": "970cd241-5abf-4dcd-bb95-14cb79a3269c"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "970cd241-5abf-4dcd-bb95-14cb79a3269c",
                                "sourcePortId": "e0d81787-f6ea-49a9-a4c6-035d3aa0d1fb",
                                "source": "node-1fbcf552-d5de-43b1-ba92-edac141e477b",
                                "target": "node-af43c6e2-dfa9-48f3-ab9d-1e0c6c234e15",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-1fbcf552-d5de-43b1-ba92-edac141e477b:e0d81787-f6ea-49a9-a4c6-035d3aa0d1fb-node-af43c6e2-dfa9-48f3-ab9d-1e0c6c234e15:970cd241-5abf-4dcd-bb95-14cb79a3269c",
                            "sourcePort": "e0d81787-f6ea-49a9-a4c6-035d3aa0d1fb",
                            "targetPort": "970cd241-5abf-4dcd-bb95-14cb79a3269c"
                        }
                    ]
                }
            ],
            "outgoingEdges": [
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5"
                        }
                    },
                    "id": "node-af43c6e2-dfa9-48f3-ab9d-1e0c6c234e15:374dba2a-0d12-486d-baf8-6b9da019834c-node-bb23ee69-0ac6-4970-b168-9143336cc41c:e3cea855-88ab-48f6-96ea-251b9a6dc084",
                    "targetPortId": "e3cea855-88ab-48f6-96ea-251b9a6dc084",
                    "sourcePortId": "374dba2a-0d12-486d-baf8-6b9da019834c",
                    "zIndex": 1,
                    "data": {
                        "targetPortId": "e3cea855-88ab-48f6-96ea-251b9a6dc084",
                        "sourcePortId": "374dba2a-0d12-486d-baf8-6b9da019834c",
                        "source": {
                            "cell": "node-af43c6e2-dfa9-48f3-ab9d-1e0c6c234e15",
                            "port": "374dba2a-0d12-486d-baf8-6b9da019834c"
                        },
                        "target": {
                            "cell": "node-bb23ee69-0ac6-4970-b168-9143336cc41c",
                            "port": "e3cea855-88ab-48f6-96ea-251b9a6dc084"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "e3cea855-88ab-48f6-96ea-251b9a6dc084",
                            "sourcePortId": "374dba2a-0d12-486d-baf8-6b9da019834c",
                            "source": "node-af43c6e2-dfa9-48f3-ab9d-1e0c6c234e15",
                            "target": "node-bb23ee69-0ac6-4970-b168-9143336cc41c",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "id": "node-af43c6e2-dfa9-48f3-ab9d-1e0c6c234e15:374dba2a-0d12-486d-baf8-6b9da019834c-node-bb23ee69-0ac6-4970-b168-9143336cc41c:e3cea855-88ab-48f6-96ea-251b9a6dc084",
                        "sourcePort": "374dba2a-0d12-486d-baf8-6b9da019834c",
                        "targetPort": "e3cea855-88ab-48f6-96ea-251b9a6dc084"
                    },
                    "source": {
                        "cell": "node-af43c6e2-dfa9-48f3-ab9d-1e0c6c234e15",
                        "port": "374dba2a-0d12-486d-baf8-6b9da019834c"
                    },
                    "target": {
                        "cell": "node-bb23ee69-0ac6-4970-b168-9143336cc41c",
                        "port": "e3cea855-88ab-48f6-96ea-251b9a6dc084"
                    },
                    "labels": [
                        {
                            "targetPortId": "e3cea855-88ab-48f6-96ea-251b9a6dc084",
                            "sourcePortId": "374dba2a-0d12-486d-baf8-6b9da019834c",
                            "source": {
                                "cell": "node-af43c6e2-dfa9-48f3-ab9d-1e0c6c234e15",
                                "port": "374dba2a-0d12-486d-baf8-6b9da019834c"
                            },
                            "target": {
                                "cell": "node-bb23ee69-0ac6-4970-b168-9143336cc41c",
                                "port": "e3cea855-88ab-48f6-96ea-251b9a6dc084"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "e3cea855-88ab-48f6-96ea-251b9a6dc084",
                                "sourcePortId": "374dba2a-0d12-486d-baf8-6b9da019834c",
                                "source": "node-af43c6e2-dfa9-48f3-ab9d-1e0c6c234e15",
                                "target": "node-bb23ee69-0ac6-4970-b168-9143336cc41c",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-af43c6e2-dfa9-48f3-ab9d-1e0c6c234e15:374dba2a-0d12-486d-baf8-6b9da019834c-node-bb23ee69-0ac6-4970-b168-9143336cc41c:e3cea855-88ab-48f6-96ea-251b9a6dc084",
                            "sourcePort": "374dba2a-0d12-486d-baf8-6b9da019834c",
                            "targetPort": "e3cea855-88ab-48f6-96ea-251b9a6dc084"
                        }
                    ]
                }
            ],
            "fontSize": 18,
            "stroke": "#f5a623"
        },
        {
            "id": "node-bb23ee69-0ac6-4970-b168-9143336cc41c",
            "renderKey": "ProcessNode",
            "name": "ProcessNode",
            "label": "安排样品",
            "width": 180,
            "height": 60,
            "ports": {
                "items": [
                    {
                        "group": "top",
                        "id": "ff1fe6c6-aa6c-4880-9f7b-837a6d3f0503"
                    },
                    {
                        "group": "right",
                        "id": "918b08dd-c56c-471b-a24c-d22462cf6ae6"
                    },
                    {
                        "group": "bottom",
                        "id": "680de50d-09aa-46a1-a0b4-a1aa7e20a127"
                    },
                    {
                        "group": "left",
                        "id": "e3cea855-88ab-48f6-96ea-251b9a6dc084"
                    }
                ],
                "groups": {
                    "top": {
                        "position": {
                            "name": "top"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "right": {
                        "position": {
                            "name": "right"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "bottom": {
                        "position": {
                            "name": "bottom"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "left": {
                        "position": {
                            "name": "left"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    }
                }
            },
            "originData": {
                "name": "ProcessNode",
                "width": 180,
                "height": 60,
                "label": "自定义步骤节点"
            },
            "isCustom": true,
            "x": 2119,
            "y": 240,
            "zIndex": 10,
            "incomingEdges": [
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5"
                        }
                    },
                    "id": "node-af43c6e2-dfa9-48f3-ab9d-1e0c6c234e15:374dba2a-0d12-486d-baf8-6b9da019834c-node-bb23ee69-0ac6-4970-b168-9143336cc41c:e3cea855-88ab-48f6-96ea-251b9a6dc084",
                    "targetPortId": "e3cea855-88ab-48f6-96ea-251b9a6dc084",
                    "sourcePortId": "374dba2a-0d12-486d-baf8-6b9da019834c",
                    "zIndex": 1,
                    "data": {
                        "targetPortId": "e3cea855-88ab-48f6-96ea-251b9a6dc084",
                        "sourcePortId": "374dba2a-0d12-486d-baf8-6b9da019834c",
                        "source": {
                            "cell": "node-af43c6e2-dfa9-48f3-ab9d-1e0c6c234e15",
                            "port": "374dba2a-0d12-486d-baf8-6b9da019834c"
                        },
                        "target": {
                            "cell": "node-bb23ee69-0ac6-4970-b168-9143336cc41c",
                            "port": "e3cea855-88ab-48f6-96ea-251b9a6dc084"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "e3cea855-88ab-48f6-96ea-251b9a6dc084",
                            "sourcePortId": "374dba2a-0d12-486d-baf8-6b9da019834c",
                            "source": "node-af43c6e2-dfa9-48f3-ab9d-1e0c6c234e15",
                            "target": "node-bb23ee69-0ac6-4970-b168-9143336cc41c",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "id": "node-af43c6e2-dfa9-48f3-ab9d-1e0c6c234e15:374dba2a-0d12-486d-baf8-6b9da019834c-node-bb23ee69-0ac6-4970-b168-9143336cc41c:e3cea855-88ab-48f6-96ea-251b9a6dc084",
                        "sourcePort": "374dba2a-0d12-486d-baf8-6b9da019834c",
                        "targetPort": "e3cea855-88ab-48f6-96ea-251b9a6dc084"
                    },
                    "source": {
                        "cell": "node-af43c6e2-dfa9-48f3-ab9d-1e0c6c234e15",
                        "port": "374dba2a-0d12-486d-baf8-6b9da019834c"
                    },
                    "target": {
                        "cell": "node-bb23ee69-0ac6-4970-b168-9143336cc41c",
                        "port": "e3cea855-88ab-48f6-96ea-251b9a6dc084"
                    },
                    "labels": [
                        {
                            "targetPortId": "e3cea855-88ab-48f6-96ea-251b9a6dc084",
                            "sourcePortId": "374dba2a-0d12-486d-baf8-6b9da019834c",
                            "source": {
                                "cell": "node-af43c6e2-dfa9-48f3-ab9d-1e0c6c234e15",
                                "port": "374dba2a-0d12-486d-baf8-6b9da019834c"
                            },
                            "target": {
                                "cell": "node-bb23ee69-0ac6-4970-b168-9143336cc41c",
                                "port": "e3cea855-88ab-48f6-96ea-251b9a6dc084"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "e3cea855-88ab-48f6-96ea-251b9a6dc084",
                                "sourcePortId": "374dba2a-0d12-486d-baf8-6b9da019834c",
                                "source": "node-af43c6e2-dfa9-48f3-ab9d-1e0c6c234e15",
                                "target": "node-bb23ee69-0ac6-4970-b168-9143336cc41c",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-af43c6e2-dfa9-48f3-ab9d-1e0c6c234e15:374dba2a-0d12-486d-baf8-6b9da019834c-node-bb23ee69-0ac6-4970-b168-9143336cc41c:e3cea855-88ab-48f6-96ea-251b9a6dc084",
                            "sourcePort": "374dba2a-0d12-486d-baf8-6b9da019834c",
                            "targetPort": "e3cea855-88ab-48f6-96ea-251b9a6dc084"
                        }
                    ]
                }
            ],
            "outgoingEdges": [
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5"
                        }
                    },
                    "id": "node-bb23ee69-0ac6-4970-b168-9143336cc41c:918b08dd-c56c-471b-a24c-d22462cf6ae6-node-12235844-15cc-47f2-9788-94faf1850078:e3fd3785-09ef-4aac-91af-431dccda2009",
                    "targetPortId": "e3fd3785-09ef-4aac-91af-431dccda2009",
                    "sourcePortId": "918b08dd-c56c-471b-a24c-d22462cf6ae6",
                    "zIndex": 1,
                    "data": {
                        "targetPortId": "e3fd3785-09ef-4aac-91af-431dccda2009",
                        "sourcePortId": "918b08dd-c56c-471b-a24c-d22462cf6ae6",
                        "source": {
                            "cell": "node-bb23ee69-0ac6-4970-b168-9143336cc41c",
                            "port": "918b08dd-c56c-471b-a24c-d22462cf6ae6"
                        },
                        "target": {
                            "cell": "node-12235844-15cc-47f2-9788-94faf1850078",
                            "port": "e3fd3785-09ef-4aac-91af-431dccda2009"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "e3fd3785-09ef-4aac-91af-431dccda2009",
                            "sourcePortId": "918b08dd-c56c-471b-a24c-d22462cf6ae6",
                            "source": "node-bb23ee69-0ac6-4970-b168-9143336cc41c",
                            "target": "node-12235844-15cc-47f2-9788-94faf1850078",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "id": "node-bb23ee69-0ac6-4970-b168-9143336cc41c:918b08dd-c56c-471b-a24c-d22462cf6ae6-node-12235844-15cc-47f2-9788-94faf1850078:e3fd3785-09ef-4aac-91af-431dccda2009",
                        "sourcePort": "918b08dd-c56c-471b-a24c-d22462cf6ae6",
                        "targetPort": "e3fd3785-09ef-4aac-91af-431dccda2009"
                    },
                    "source": {
                        "cell": "node-bb23ee69-0ac6-4970-b168-9143336cc41c",
                        "port": "918b08dd-c56c-471b-a24c-d22462cf6ae6"
                    },
                    "target": {
                        "cell": "node-12235844-15cc-47f2-9788-94faf1850078",
                        "port": "e3fd3785-09ef-4aac-91af-431dccda2009"
                    },
                    "labels": [
                        {
                            "targetPortId": "e3fd3785-09ef-4aac-91af-431dccda2009",
                            "sourcePortId": "918b08dd-c56c-471b-a24c-d22462cf6ae6",
                            "source": {
                                "cell": "node-bb23ee69-0ac6-4970-b168-9143336cc41c",
                                "port": "918b08dd-c56c-471b-a24c-d22462cf6ae6"
                            },
                            "target": {
                                "cell": "node-12235844-15cc-47f2-9788-94faf1850078",
                                "port": "e3fd3785-09ef-4aac-91af-431dccda2009"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "e3fd3785-09ef-4aac-91af-431dccda2009",
                                "sourcePortId": "918b08dd-c56c-471b-a24c-d22462cf6ae6",
                                "source": "node-bb23ee69-0ac6-4970-b168-9143336cc41c",
                                "target": "node-12235844-15cc-47f2-9788-94faf1850078",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-bb23ee69-0ac6-4970-b168-9143336cc41c:918b08dd-c56c-471b-a24c-d22462cf6ae6-node-12235844-15cc-47f2-9788-94faf1850078:e3fd3785-09ef-4aac-91af-431dccda2009",
                            "sourcePort": "918b08dd-c56c-471b-a24c-d22462cf6ae6",
                            "targetPort": "e3fd3785-09ef-4aac-91af-431dccda2009"
                        }
                    ]
                }
            ],
            "stroke": "#7ed321",
            "fontSize": 18
        },
        {
            "id": "node-12235844-15cc-47f2-9788-94faf1850078",
            "renderKey": "JudgmentNode",
            "name": "JudgmentNode",
            "label": "质量测试",
            "width": 180,
            "height": 60,
            "ports": {
                "items": [
                    {
                        "group": "top",
                        "id": "5e8f15b1-d914-42f9-bb78-c29bfb0b7ee4"
                    },
                    {
                        "group": "right",
                        "id": "04268d80-307f-4e78-9b9c-135772b44e56"
                    },
                    {
                        "group": "bottom",
                        "id": "9bf9c799-076e-4925-bf58-c89105ed5b3a"
                    },
                    {
                        "group": "left",
                        "id": "e3fd3785-09ef-4aac-91af-431dccda2009"
                    }
                ],
                "groups": {
                    "top": {
                        "position": {
                            "name": "top"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "right": {
                        "position": {
                            "name": "right"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "bottom": {
                        "position": {
                            "name": "bottom"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "left": {
                        "position": {
                            "name": "left"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    }
                }
            },
            "originData": {
                "component": {
                    "compare": null
                },
                "name": "JudgmentNode",
                "width": 180,
                "height": 60,
                "label": "自定义判断节点"
            },
            "isCustom": true,
            "x": 2376,
            "y": 240,
            "zIndex": 10,
            "incomingEdges": [
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5"
                        }
                    },
                    "id": "node-bb23ee69-0ac6-4970-b168-9143336cc41c:918b08dd-c56c-471b-a24c-d22462cf6ae6-node-12235844-15cc-47f2-9788-94faf1850078:e3fd3785-09ef-4aac-91af-431dccda2009",
                    "targetPortId": "e3fd3785-09ef-4aac-91af-431dccda2009",
                    "sourcePortId": "918b08dd-c56c-471b-a24c-d22462cf6ae6",
                    "zIndex": 1,
                    "data": {
                        "targetPortId": "e3fd3785-09ef-4aac-91af-431dccda2009",
                        "sourcePortId": "918b08dd-c56c-471b-a24c-d22462cf6ae6",
                        "source": {
                            "cell": "node-bb23ee69-0ac6-4970-b168-9143336cc41c",
                            "port": "918b08dd-c56c-471b-a24c-d22462cf6ae6"
                        },
                        "target": {
                            "cell": "node-12235844-15cc-47f2-9788-94faf1850078",
                            "port": "e3fd3785-09ef-4aac-91af-431dccda2009"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "e3fd3785-09ef-4aac-91af-431dccda2009",
                            "sourcePortId": "918b08dd-c56c-471b-a24c-d22462cf6ae6",
                            "source": "node-bb23ee69-0ac6-4970-b168-9143336cc41c",
                            "target": "node-12235844-15cc-47f2-9788-94faf1850078",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "id": "node-bb23ee69-0ac6-4970-b168-9143336cc41c:918b08dd-c56c-471b-a24c-d22462cf6ae6-node-12235844-15cc-47f2-9788-94faf1850078:e3fd3785-09ef-4aac-91af-431dccda2009",
                        "sourcePort": "918b08dd-c56c-471b-a24c-d22462cf6ae6",
                        "targetPort": "e3fd3785-09ef-4aac-91af-431dccda2009"
                    },
                    "source": {
                        "cell": "node-bb23ee69-0ac6-4970-b168-9143336cc41c",
                        "port": "918b08dd-c56c-471b-a24c-d22462cf6ae6"
                    },
                    "target": {
                        "cell": "node-12235844-15cc-47f2-9788-94faf1850078",
                        "port": "e3fd3785-09ef-4aac-91af-431dccda2009"
                    },
                    "labels": [
                        {
                            "targetPortId": "e3fd3785-09ef-4aac-91af-431dccda2009",
                            "sourcePortId": "918b08dd-c56c-471b-a24c-d22462cf6ae6",
                            "source": {
                                "cell": "node-bb23ee69-0ac6-4970-b168-9143336cc41c",
                                "port": "918b08dd-c56c-471b-a24c-d22462cf6ae6"
                            },
                            "target": {
                                "cell": "node-12235844-15cc-47f2-9788-94faf1850078",
                                "port": "e3fd3785-09ef-4aac-91af-431dccda2009"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "e3fd3785-09ef-4aac-91af-431dccda2009",
                                "sourcePortId": "918b08dd-c56c-471b-a24c-d22462cf6ae6",
                                "source": "node-bb23ee69-0ac6-4970-b168-9143336cc41c",
                                "target": "node-12235844-15cc-47f2-9788-94faf1850078",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-bb23ee69-0ac6-4970-b168-9143336cc41c:918b08dd-c56c-471b-a24c-d22462cf6ae6-node-12235844-15cc-47f2-9788-94faf1850078:e3fd3785-09ef-4aac-91af-431dccda2009",
                            "sourcePort": "918b08dd-c56c-471b-a24c-d22462cf6ae6",
                            "targetPort": "e3fd3785-09ef-4aac-91af-431dccda2009"
                        }
                    ]
                }
            ],
            "outgoingEdges": [
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5"
                        }
                    },
                    "id": "node-12235844-15cc-47f2-9788-94faf1850078:04268d80-307f-4e78-9b9c-135772b44e56-node-6a62bba8-c258-4c77-8c0b-38580873f617:6fabb6ad-f76c-4fe3-87d0-42d38a42ebec",
                    "targetPortId": "6fabb6ad-f76c-4fe3-87d0-42d38a42ebec",
                    "sourcePortId": "04268d80-307f-4e78-9b9c-135772b44e56",
                    "zIndex": 1,
                    "data": {
                        "targetPortId": "6fabb6ad-f76c-4fe3-87d0-42d38a42ebec",
                        "sourcePortId": "04268d80-307f-4e78-9b9c-135772b44e56",
                        "source": {
                            "cell": "node-12235844-15cc-47f2-9788-94faf1850078",
                            "port": "04268d80-307f-4e78-9b9c-135772b44e56"
                        },
                        "target": {
                            "cell": "node-6a62bba8-c258-4c77-8c0b-38580873f617",
                            "port": "6fabb6ad-f76c-4fe3-87d0-42d38a42ebec"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "6fabb6ad-f76c-4fe3-87d0-42d38a42ebec",
                            "sourcePortId": "04268d80-307f-4e78-9b9c-135772b44e56",
                            "source": "node-12235844-15cc-47f2-9788-94faf1850078",
                            "target": "node-6a62bba8-c258-4c77-8c0b-38580873f617",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "id": "node-12235844-15cc-47f2-9788-94faf1850078:04268d80-307f-4e78-9b9c-135772b44e56-node-6a62bba8-c258-4c77-8c0b-38580873f617:6fabb6ad-f76c-4fe3-87d0-42d38a42ebec",
                        "sourcePort": "04268d80-307f-4e78-9b9c-135772b44e56",
                        "targetPort": "6fabb6ad-f76c-4fe3-87d0-42d38a42ebec"
                    },
                    "source": {
                        "cell": "node-12235844-15cc-47f2-9788-94faf1850078",
                        "port": "04268d80-307f-4e78-9b9c-135772b44e56"
                    },
                    "target": {
                        "cell": "node-6a62bba8-c258-4c77-8c0b-38580873f617",
                        "port": "6fabb6ad-f76c-4fe3-87d0-42d38a42ebec"
                    },
                    "labels": [
                        {
                            "targetPortId": "6fabb6ad-f76c-4fe3-87d0-42d38a42ebec",
                            "sourcePortId": "04268d80-307f-4e78-9b9c-135772b44e56",
                            "source": {
                                "cell": "node-12235844-15cc-47f2-9788-94faf1850078",
                                "port": "04268d80-307f-4e78-9b9c-135772b44e56"
                            },
                            "target": {
                                "cell": "node-6a62bba8-c258-4c77-8c0b-38580873f617",
                                "port": "6fabb6ad-f76c-4fe3-87d0-42d38a42ebec"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "6fabb6ad-f76c-4fe3-87d0-42d38a42ebec",
                                "sourcePortId": "04268d80-307f-4e78-9b9c-135772b44e56",
                                "source": "node-12235844-15cc-47f2-9788-94faf1850078",
                                "target": "node-6a62bba8-c258-4c77-8c0b-38580873f617",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-12235844-15cc-47f2-9788-94faf1850078:04268d80-307f-4e78-9b9c-135772b44e56-node-6a62bba8-c258-4c77-8c0b-38580873f617:6fabb6ad-f76c-4fe3-87d0-42d38a42ebec",
                            "sourcePort": "04268d80-307f-4e78-9b9c-135772b44e56",
                            "targetPort": "6fabb6ad-f76c-4fe3-87d0-42d38a42ebec"
                        }
                    ]
                }
            ],
            "fontSize": 18,
            "stroke": "#f5a623"
        },
        {
            "id": "node-6a62bba8-c258-4c77-8c0b-38580873f617",
            "renderKey": "ProcessNode",
            "name": "ProcessNode",
            "label": "创建产品表",
            "width": 180,
            "height": 60,
            "ports": {
                "items": [
                    {
                        "group": "top",
                        "id": "9ede7737-1972-404f-9e9f-b74eb159f68b"
                    },
                    {
                        "group": "right",
                        "id": "d7dd1ef0-a5f8-4d3b-be7a-c1493d914eda"
                    },
                    {
                        "group": "bottom",
                        "id": "5d5d4c82-a1ff-4c97-af45-f7f7d420b702"
                    },
                    {
                        "group": "left",
                        "id": "6fabb6ad-f76c-4fe3-87d0-42d38a42ebec"
                    }
                ],
                "groups": {
                    "top": {
                        "position": {
                            "name": "top"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "right": {
                        "position": {
                            "name": "right"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "bottom": {
                        "position": {
                            "name": "bottom"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "left": {
                        "position": {
                            "name": "left"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    }
                }
            },
            "originData": {
                "name": "ProcessNode",
                "width": 180,
                "height": 60,
                "label": "自定义步骤节点"
            },
            "isCustom": true,
            "x": 2639,
            "y": 240,
            "zIndex": 10,
            "incomingEdges": [
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5"
                        }
                    },
                    "id": "node-12235844-15cc-47f2-9788-94faf1850078:04268d80-307f-4e78-9b9c-135772b44e56-node-6a62bba8-c258-4c77-8c0b-38580873f617:6fabb6ad-f76c-4fe3-87d0-42d38a42ebec",
                    "targetPortId": "6fabb6ad-f76c-4fe3-87d0-42d38a42ebec",
                    "sourcePortId": "04268d80-307f-4e78-9b9c-135772b44e56",
                    "zIndex": 1,
                    "data": {
                        "id": "node-12235844-15cc-47f2-9788-94faf1850078:04268d80-307f-4e78-9b9c-135772b44e56-node-6a62bba8-c258-4c77-8c0b-38580873f617:6fabb6ad-f76c-4fe3-87d0-42d38a42ebec",
                        "targetPortId": "6fabb6ad-f76c-4fe3-87d0-42d38a42ebec",
                        "sourcePortId": "04268d80-307f-4e78-9b9c-135772b44e56",
                        "source": {
                            "cell": "node-12235844-15cc-47f2-9788-94faf1850078",
                            "port": "04268d80-307f-4e78-9b9c-135772b44e56"
                        },
                        "target": {
                            "cell": "node-6a62bba8-c258-4c77-8c0b-38580873f617",
                            "port": "6fabb6ad-f76c-4fe3-87d0-42d38a42ebec"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "6fabb6ad-f76c-4fe3-87d0-42d38a42ebec",
                            "sourcePortId": "04268d80-307f-4e78-9b9c-135772b44e56",
                            "source": "node-12235844-15cc-47f2-9788-94faf1850078",
                            "target": "node-6a62bba8-c258-4c77-8c0b-38580873f617",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "sourcePort": "04268d80-307f-4e78-9b9c-135772b44e56",
                        "targetPort": "6fabb6ad-f76c-4fe3-87d0-42d38a42ebec"
                    },
                    "source": {
                        "cell": "node-12235844-15cc-47f2-9788-94faf1850078",
                        "port": "04268d80-307f-4e78-9b9c-135772b44e56"
                    },
                    "target": {
                        "cell": "node-6a62bba8-c258-4c77-8c0b-38580873f617",
                        "port": "6fabb6ad-f76c-4fe3-87d0-42d38a42ebec"
                    },
                    "labels": [
                        {
                            "id": "node-12235844-15cc-47f2-9788-94faf1850078:04268d80-307f-4e78-9b9c-135772b44e56-node-6a62bba8-c258-4c77-8c0b-38580873f617:6fabb6ad-f76c-4fe3-87d0-42d38a42ebec",
                            "targetPortId": "6fabb6ad-f76c-4fe3-87d0-42d38a42ebec",
                            "sourcePortId": "04268d80-307f-4e78-9b9c-135772b44e56",
                            "source": {
                                "cell": "node-12235844-15cc-47f2-9788-94faf1850078",
                                "port": "04268d80-307f-4e78-9b9c-135772b44e56"
                            },
                            "target": {
                                "cell": "node-6a62bba8-c258-4c77-8c0b-38580873f617",
                                "port": "6fabb6ad-f76c-4fe3-87d0-42d38a42ebec"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "6fabb6ad-f76c-4fe3-87d0-42d38a42ebec",
                                "sourcePortId": "04268d80-307f-4e78-9b9c-135772b44e56",
                                "source": "node-12235844-15cc-47f2-9788-94faf1850078",
                                "target": "node-6a62bba8-c258-4c77-8c0b-38580873f617",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "sourcePort": "04268d80-307f-4e78-9b9c-135772b44e56",
                            "targetPort": "6fabb6ad-f76c-4fe3-87d0-42d38a42ebec"
                        }
                    ]
                }
            ],
            "outgoingEdges": [
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5"
                        }
                    },
                    "id": "node-6a62bba8-c258-4c77-8c0b-38580873f617:d7dd1ef0-a5f8-4d3b-be7a-c1493d914eda-node-17f391ea-aaa1-4a27-b6cc-1e7299afedac:625a203d-7e28-4782-902e-72c7c4edb208",
                    "targetPortId": "625a203d-7e28-4782-902e-72c7c4edb208",
                    "sourcePortId": "d7dd1ef0-a5f8-4d3b-be7a-c1493d914eda",
                    "zIndex": 1,
                    "data": {
                        "targetPortId": "625a203d-7e28-4782-902e-72c7c4edb208",
                        "sourcePortId": "d7dd1ef0-a5f8-4d3b-be7a-c1493d914eda",
                        "source": {
                            "cell": "node-6a62bba8-c258-4c77-8c0b-38580873f617",
                            "port": "d7dd1ef0-a5f8-4d3b-be7a-c1493d914eda"
                        },
                        "target": {
                            "cell": "node-17f391ea-aaa1-4a27-b6cc-1e7299afedac",
                            "port": "625a203d-7e28-4782-902e-72c7c4edb208"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "625a203d-7e28-4782-902e-72c7c4edb208",
                            "sourcePortId": "d7dd1ef0-a5f8-4d3b-be7a-c1493d914eda",
                            "source": "node-6a62bba8-c258-4c77-8c0b-38580873f617",
                            "target": "node-17f391ea-aaa1-4a27-b6cc-1e7299afedac",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "id": "node-6a62bba8-c258-4c77-8c0b-38580873f617:d7dd1ef0-a5f8-4d3b-be7a-c1493d914eda-node-17f391ea-aaa1-4a27-b6cc-1e7299afedac:625a203d-7e28-4782-902e-72c7c4edb208",
                        "sourcePort": "d7dd1ef0-a5f8-4d3b-be7a-c1493d914eda",
                        "targetPort": "625a203d-7e28-4782-902e-72c7c4edb208"
                    },
                    "source": {
                        "cell": "node-6a62bba8-c258-4c77-8c0b-38580873f617",
                        "port": "d7dd1ef0-a5f8-4d3b-be7a-c1493d914eda"
                    },
                    "target": {
                        "cell": "node-17f391ea-aaa1-4a27-b6cc-1e7299afedac",
                        "port": "625a203d-7e28-4782-902e-72c7c4edb208"
                    },
                    "labels": [
                        {
                            "targetPortId": "625a203d-7e28-4782-902e-72c7c4edb208",
                            "sourcePortId": "d7dd1ef0-a5f8-4d3b-be7a-c1493d914eda",
                            "source": {
                                "cell": "node-6a62bba8-c258-4c77-8c0b-38580873f617",
                                "port": "d7dd1ef0-a5f8-4d3b-be7a-c1493d914eda"
                            },
                            "target": {
                                "cell": "node-17f391ea-aaa1-4a27-b6cc-1e7299afedac",
                                "port": "625a203d-7e28-4782-902e-72c7c4edb208"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "625a203d-7e28-4782-902e-72c7c4edb208",
                                "sourcePortId": "d7dd1ef0-a5f8-4d3b-be7a-c1493d914eda",
                                "source": "node-6a62bba8-c258-4c77-8c0b-38580873f617",
                                "target": "node-17f391ea-aaa1-4a27-b6cc-1e7299afedac",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-6a62bba8-c258-4c77-8c0b-38580873f617:d7dd1ef0-a5f8-4d3b-be7a-c1493d914eda-node-17f391ea-aaa1-4a27-b6cc-1e7299afedac:625a203d-7e28-4782-902e-72c7c4edb208",
                            "sourcePort": "d7dd1ef0-a5f8-4d3b-be7a-c1493d914eda",
                            "targetPort": "625a203d-7e28-4782-902e-72c7c4edb208"
                        }
                    ]
                }
            ],
            "fontSize": 17,
            "stroke": "#7ed321"
        },
        {
            "id": "node-554557f5-ef74-4273-97c5-c64d621b0ed0",
            "renderKey": "JudgmentNode",
            "name": "JudgmentNode",
            "label": "产品效果测试",
            "width": 180,
            "height": 60,
            "ports": {
                "items": [
                    {
                        "group": "top",
                        "id": "03889faa-7446-4c72-8a14-df0e50c5e0bc"
                    },
                    {
                        "group": "right",
                        "id": "4aa36143-2862-444a-bb3a-2b56a3643a20"
                    },
                    {
                        "group": "bottom",
                        "id": "1083ca37-d9da-40d9-8938-06be749dc3bf"
                    },
                    {
                        "group": "left",
                        "id": "bc2e16e6-e7a8-49a1-8075-36c79877c9a6"
                    }
                ],
                "groups": {
                    "top": {
                        "position": {
                            "name": "top"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "right": {
                        "position": {
                            "name": "right"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "bottom": {
                        "position": {
                            "name": "bottom"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "left": {
                        "position": {
                            "name": "left"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    }
                }
            },
            "originData": {
                "component": {
                    "compare": null
                },
                "name": "JudgmentNode",
                "width": 180,
                "height": 60,
                "label": "自定义判断节点"
            },
            "isCustom": true,
            "x": 2196,
            "y": 370,
            "zIndex": 10,
            "incomingEdges": [
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5"
                        }
                    },
                    "id": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9:4393d104-65cd-4054-a39f-6470621f5080-node-554557f5-ef74-4273-97c5-c64d621b0ed0:bc2e16e6-e7a8-49a1-8075-36c79877c9a6",
                    "targetPortId": "bc2e16e6-e7a8-49a1-8075-36c79877c9a6",
                    "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
                    "zIndex": 1,
                    "data": {
                        "targetPortId": "bc2e16e6-e7a8-49a1-8075-36c79877c9a6",
                        "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
                        "source": {
                            "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                            "port": "4393d104-65cd-4054-a39f-6470621f5080"
                        },
                        "target": {
                            "cell": "node-554557f5-ef74-4273-97c5-c64d621b0ed0",
                            "port": "bc2e16e6-e7a8-49a1-8075-36c79877c9a6"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "bc2e16e6-e7a8-49a1-8075-36c79877c9a6",
                            "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
                            "source": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                            "target": "node-554557f5-ef74-4273-97c5-c64d621b0ed0",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "id": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9:4393d104-65cd-4054-a39f-6470621f5080-node-554557f5-ef74-4273-97c5-c64d621b0ed0:bc2e16e6-e7a8-49a1-8075-36c79877c9a6",
                        "sourcePort": "4393d104-65cd-4054-a39f-6470621f5080",
                        "targetPort": "bc2e16e6-e7a8-49a1-8075-36c79877c9a6"
                    },
                    "source": {
                        "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                        "port": "4393d104-65cd-4054-a39f-6470621f5080"
                    },
                    "target": {
                        "cell": "node-554557f5-ef74-4273-97c5-c64d621b0ed0",
                        "port": "bc2e16e6-e7a8-49a1-8075-36c79877c9a6"
                    },
                    "labels": [
                        {
                            "targetPortId": "bc2e16e6-e7a8-49a1-8075-36c79877c9a6",
                            "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
                            "source": {
                                "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                "port": "4393d104-65cd-4054-a39f-6470621f5080"
                            },
                            "target": {
                                "cell": "node-554557f5-ef74-4273-97c5-c64d621b0ed0",
                                "port": "bc2e16e6-e7a8-49a1-8075-36c79877c9a6"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "bc2e16e6-e7a8-49a1-8075-36c79877c9a6",
                                "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
                                "source": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                "target": "node-554557f5-ef74-4273-97c5-c64d621b0ed0",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9:4393d104-65cd-4054-a39f-6470621f5080-node-554557f5-ef74-4273-97c5-c64d621b0ed0:bc2e16e6-e7a8-49a1-8075-36c79877c9a6",
                            "sourcePort": "4393d104-65cd-4054-a39f-6470621f5080",
                            "targetPort": "bc2e16e6-e7a8-49a1-8075-36c79877c9a6"
                        }
                    ]
                }
            ],
            "outgoingEdges": [
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5"
                        }
                    },
                    "id": "node-554557f5-ef74-4273-97c5-c64d621b0ed0:4aa36143-2862-444a-bb3a-2b56a3643a20-node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:c03eedf6-1018-4b89-906a-b26d813d5362",
                    "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
                    "sourcePortId": "4aa36143-2862-444a-bb3a-2b56a3643a20",
                    "zIndex": 1,
                    "data": {
                        "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
                        "sourcePortId": "4aa36143-2862-444a-bb3a-2b56a3643a20",
                        "source": {
                            "cell": "node-554557f5-ef74-4273-97c5-c64d621b0ed0",
                            "port": "4aa36143-2862-444a-bb3a-2b56a3643a20"
                        },
                        "target": {
                            "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                            "port": "c03eedf6-1018-4b89-906a-b26d813d5362"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
                            "sourcePortId": "4aa36143-2862-444a-bb3a-2b56a3643a20",
                            "source": "node-554557f5-ef74-4273-97c5-c64d621b0ed0",
                            "target": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "id": "node-554557f5-ef74-4273-97c5-c64d621b0ed0:4aa36143-2862-444a-bb3a-2b56a3643a20-node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:c03eedf6-1018-4b89-906a-b26d813d5362",
                        "sourcePort": "4aa36143-2862-444a-bb3a-2b56a3643a20",
                        "targetPort": "c03eedf6-1018-4b89-906a-b26d813d5362"
                    },
                    "source": {
                        "cell": "node-554557f5-ef74-4273-97c5-c64d621b0ed0",
                        "port": "4aa36143-2862-444a-bb3a-2b56a3643a20"
                    },
                    "target": {
                        "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                        "port": "c03eedf6-1018-4b89-906a-b26d813d5362"
                    },
                    "labels": [
                        {
                            "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
                            "sourcePortId": "4aa36143-2862-444a-bb3a-2b56a3643a20",
                            "source": {
                                "cell": "node-554557f5-ef74-4273-97c5-c64d621b0ed0",
                                "port": "4aa36143-2862-444a-bb3a-2b56a3643a20"
                            },
                            "target": {
                                "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                "port": "c03eedf6-1018-4b89-906a-b26d813d5362"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
                                "sourcePortId": "4aa36143-2862-444a-bb3a-2b56a3643a20",
                                "source": "node-554557f5-ef74-4273-97c5-c64d621b0ed0",
                                "target": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-554557f5-ef74-4273-97c5-c64d621b0ed0:4aa36143-2862-444a-bb3a-2b56a3643a20-node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:c03eedf6-1018-4b89-906a-b26d813d5362",
                            "sourcePort": "4aa36143-2862-444a-bb3a-2b56a3643a20",
                            "targetPort": "c03eedf6-1018-4b89-906a-b26d813d5362"
                        }
                    ]
                }
            ],
            "stroke": "#f5a623",
            "fontSize": 18
        },
        {
            "id": "node-3e41bea0-7add-4562-8270-fe4c92bca591",
            "renderKey": "JudgmentNode",
            "name": "JudgmentNode",
            "label": "质检标准共识",
            "width": 180,
            "height": 60,
            "ports": {
                "items": [
                    {
                        "group": "top",
                        "id": "b3ada28f-fba3-4695-99cc-d75acffedb41"
                    },
                    {
                        "group": "right",
                        "id": "6b2f4402-4035-4716-8d7c-37075ddbef34"
                    },
                    {
                        "group": "bottom",
                        "id": "765168ac-317c-42d7-aa92-56ba99d44860"
                    },
                    {
                        "group": "left",
                        "id": "be415689-0e56-4fa9-8aa9-eeb1d87f3e29"
                    }
                ],
                "groups": {
                    "top": {
                        "position": {
                            "name": "top"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "right": {
                        "position": {
                            "name": "right"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "bottom": {
                        "position": {
                            "name": "bottom"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "left": {
                        "position": {
                            "name": "left"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    }
                }
            },
            "originData": {
                "component": {
                    "compare": null
                },
                "name": "JudgmentNode",
                "width": 180,
                "height": 60,
                "label": "自定义判断节点"
            },
            "isCustom": true,
            "x": 2196,
            "y": 487,
            "zIndex": 10,
            "incomingEdges": [
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5"
                        }
                    },
                    "id": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9:4393d104-65cd-4054-a39f-6470621f5080-node-3e41bea0-7add-4562-8270-fe4c92bca591:be415689-0e56-4fa9-8aa9-eeb1d87f3e29",
                    "targetPortId": "be415689-0e56-4fa9-8aa9-eeb1d87f3e29",
                    "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
                    "zIndex": 1,
                    "data": {
                        "targetPortId": "be415689-0e56-4fa9-8aa9-eeb1d87f3e29",
                        "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
                        "source": {
                            "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                            "port": "4393d104-65cd-4054-a39f-6470621f5080"
                        },
                        "target": {
                            "cell": "node-3e41bea0-7add-4562-8270-fe4c92bca591",
                            "port": "be415689-0e56-4fa9-8aa9-eeb1d87f3e29"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "be415689-0e56-4fa9-8aa9-eeb1d87f3e29",
                            "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
                            "source": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                            "target": "node-3e41bea0-7add-4562-8270-fe4c92bca591",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "id": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9:4393d104-65cd-4054-a39f-6470621f5080-node-3e41bea0-7add-4562-8270-fe4c92bca591:be415689-0e56-4fa9-8aa9-eeb1d87f3e29",
                        "sourcePort": "4393d104-65cd-4054-a39f-6470621f5080",
                        "targetPort": "be415689-0e56-4fa9-8aa9-eeb1d87f3e29"
                    },
                    "source": {
                        "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                        "port": "4393d104-65cd-4054-a39f-6470621f5080"
                    },
                    "target": {
                        "cell": "node-3e41bea0-7add-4562-8270-fe4c92bca591",
                        "port": "be415689-0e56-4fa9-8aa9-eeb1d87f3e29"
                    },
                    "labels": [
                        {
                            "targetPortId": "be415689-0e56-4fa9-8aa9-eeb1d87f3e29",
                            "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
                            "source": {
                                "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                "port": "4393d104-65cd-4054-a39f-6470621f5080"
                            },
                            "target": {
                                "cell": "node-3e41bea0-7add-4562-8270-fe4c92bca591",
                                "port": "be415689-0e56-4fa9-8aa9-eeb1d87f3e29"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "be415689-0e56-4fa9-8aa9-eeb1d87f3e29",
                                "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
                                "source": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                "target": "node-3e41bea0-7add-4562-8270-fe4c92bca591",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9:4393d104-65cd-4054-a39f-6470621f5080-node-3e41bea0-7add-4562-8270-fe4c92bca591:be415689-0e56-4fa9-8aa9-eeb1d87f3e29",
                            "sourcePort": "4393d104-65cd-4054-a39f-6470621f5080",
                            "targetPort": "be415689-0e56-4fa9-8aa9-eeb1d87f3e29"
                        }
                    ]
                }
            ],
            "outgoingEdges": [
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5"
                        }
                    },
                    "id": "node-3e41bea0-7add-4562-8270-fe4c92bca591:6b2f4402-4035-4716-8d7c-37075ddbef34-node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:c03eedf6-1018-4b89-906a-b26d813d5362",
                    "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
                    "sourcePortId": "6b2f4402-4035-4716-8d7c-37075ddbef34",
                    "zIndex": 1,
                    "data": {
                        "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
                        "sourcePortId": "6b2f4402-4035-4716-8d7c-37075ddbef34",
                        "source": {
                            "cell": "node-3e41bea0-7add-4562-8270-fe4c92bca591",
                            "port": "6b2f4402-4035-4716-8d7c-37075ddbef34"
                        },
                        "target": {
                            "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                            "port": "c03eedf6-1018-4b89-906a-b26d813d5362"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
                            "sourcePortId": "6b2f4402-4035-4716-8d7c-37075ddbef34",
                            "source": "node-3e41bea0-7add-4562-8270-fe4c92bca591",
                            "target": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "id": "node-3e41bea0-7add-4562-8270-fe4c92bca591:6b2f4402-4035-4716-8d7c-37075ddbef34-node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:c03eedf6-1018-4b89-906a-b26d813d5362",
                        "sourcePort": "6b2f4402-4035-4716-8d7c-37075ddbef34",
                        "targetPort": "c03eedf6-1018-4b89-906a-b26d813d5362"
                    },
                    "source": {
                        "cell": "node-3e41bea0-7add-4562-8270-fe4c92bca591",
                        "port": "6b2f4402-4035-4716-8d7c-37075ddbef34"
                    },
                    "target": {
                        "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                        "port": "c03eedf6-1018-4b89-906a-b26d813d5362"
                    },
                    "labels": [
                        {
                            "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
                            "sourcePortId": "6b2f4402-4035-4716-8d7c-37075ddbef34",
                            "source": {
                                "cell": "node-3e41bea0-7add-4562-8270-fe4c92bca591",
                                "port": "6b2f4402-4035-4716-8d7c-37075ddbef34"
                            },
                            "target": {
                                "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                "port": "c03eedf6-1018-4b89-906a-b26d813d5362"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
                                "sourcePortId": "6b2f4402-4035-4716-8d7c-37075ddbef34",
                                "source": "node-3e41bea0-7add-4562-8270-fe4c92bca591",
                                "target": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-3e41bea0-7add-4562-8270-fe4c92bca591:6b2f4402-4035-4716-8d7c-37075ddbef34-node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:c03eedf6-1018-4b89-906a-b26d813d5362",
                            "sourcePort": "6b2f4402-4035-4716-8d7c-37075ddbef34",
                            "targetPort": "c03eedf6-1018-4b89-906a-b26d813d5362"
                        }
                    ]
                }
            ],
            "fontSize": 18,
            "stroke": "#f5a623"
        },
        {
            "id": "node-ff973138-91a5-4a94-a7ac-47f35ab2522b",
            "renderKey": "JudgmentNode",
            "name": "JudgmentNode",
            "label": "说明书",
            "width": 180,
            "height": 60,
            "ports": {
                "items": [
                    {
                        "group": "top",
                        "id": "185ef1e9-427c-4305-9eb0-217c3b665f18"
                    },
                    {
                        "group": "right",
                        "id": "e49bc48f-eb30-486d-9bd4-628ca0cf894c"
                    },
                    {
                        "group": "bottom",
                        "id": "e8f4a3be-225f-4f26-b6b1-cbeab251569a"
                    },
                    {
                        "group": "left",
                        "id": "76573869-aa36-44f6-857c-30ec1d45436b"
                    }
                ],
                "groups": {
                    "top": {
                        "position": {
                            "name": "top"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "right": {
                        "position": {
                            "name": "right"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "bottom": {
                        "position": {
                            "name": "bottom"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "left": {
                        "position": {
                            "name": "left"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    }
                }
            },
            "originData": {
                "component": {
                    "compare": null
                },
                "name": "JudgmentNode",
                "width": 180,
                "height": 60,
                "label": "自定义判断节点"
            },
            "isCustom": true,
            "x": 2196,
            "y": 594,
            "zIndex": 10,
            "incomingEdges": [
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5"
                        }
                    },
                    "id": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9:4393d104-65cd-4054-a39f-6470621f5080-node-ff973138-91a5-4a94-a7ac-47f35ab2522b:76573869-aa36-44f6-857c-30ec1d45436b",
                    "targetPortId": "76573869-aa36-44f6-857c-30ec1d45436b",
                    "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
                    "zIndex": 1,
                    "data": {
                        "targetPortId": "76573869-aa36-44f6-857c-30ec1d45436b",
                        "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
                        "source": {
                            "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                            "port": "4393d104-65cd-4054-a39f-6470621f5080"
                        },
                        "target": {
                            "cell": "node-ff973138-91a5-4a94-a7ac-47f35ab2522b",
                            "port": "76573869-aa36-44f6-857c-30ec1d45436b"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "76573869-aa36-44f6-857c-30ec1d45436b",
                            "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
                            "source": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                            "target": "node-ff973138-91a5-4a94-a7ac-47f35ab2522b",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "id": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9:4393d104-65cd-4054-a39f-6470621f5080-node-ff973138-91a5-4a94-a7ac-47f35ab2522b:76573869-aa36-44f6-857c-30ec1d45436b",
                        "sourcePort": "4393d104-65cd-4054-a39f-6470621f5080",
                        "targetPort": "76573869-aa36-44f6-857c-30ec1d45436b"
                    },
                    "source": {
                        "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                        "port": "4393d104-65cd-4054-a39f-6470621f5080"
                    },
                    "target": {
                        "cell": "node-ff973138-91a5-4a94-a7ac-47f35ab2522b",
                        "port": "76573869-aa36-44f6-857c-30ec1d45436b"
                    },
                    "labels": [
                        {
                            "targetPortId": "76573869-aa36-44f6-857c-30ec1d45436b",
                            "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
                            "source": {
                                "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                "port": "4393d104-65cd-4054-a39f-6470621f5080"
                            },
                            "target": {
                                "cell": "node-ff973138-91a5-4a94-a7ac-47f35ab2522b",
                                "port": "76573869-aa36-44f6-857c-30ec1d45436b"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "76573869-aa36-44f6-857c-30ec1d45436b",
                                "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
                                "source": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                "target": "node-ff973138-91a5-4a94-a7ac-47f35ab2522b",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9:4393d104-65cd-4054-a39f-6470621f5080-node-ff973138-91a5-4a94-a7ac-47f35ab2522b:76573869-aa36-44f6-857c-30ec1d45436b",
                            "sourcePort": "4393d104-65cd-4054-a39f-6470621f5080",
                            "targetPort": "76573869-aa36-44f6-857c-30ec1d45436b"
                        }
                    ]
                }
            ],
            "outgoingEdges": [
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5"
                        }
                    },
                    "id": "node-ff973138-91a5-4a94-a7ac-47f35ab2522b:e49bc48f-eb30-486d-9bd4-628ca0cf894c-node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:c03eedf6-1018-4b89-906a-b26d813d5362",
                    "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
                    "sourcePortId": "e49bc48f-eb30-486d-9bd4-628ca0cf894c",
                    "zIndex": 1,
                    "data": {
                        "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
                        "sourcePortId": "e49bc48f-eb30-486d-9bd4-628ca0cf894c",
                        "source": {
                            "cell": "node-ff973138-91a5-4a94-a7ac-47f35ab2522b",
                            "port": "e49bc48f-eb30-486d-9bd4-628ca0cf894c"
                        },
                        "target": {
                            "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                            "port": "c03eedf6-1018-4b89-906a-b26d813d5362"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
                            "sourcePortId": "e49bc48f-eb30-486d-9bd4-628ca0cf894c",
                            "source": "node-ff973138-91a5-4a94-a7ac-47f35ab2522b",
                            "target": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "id": "node-ff973138-91a5-4a94-a7ac-47f35ab2522b:e49bc48f-eb30-486d-9bd4-628ca0cf894c-node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:c03eedf6-1018-4b89-906a-b26d813d5362",
                        "sourcePort": "e49bc48f-eb30-486d-9bd4-628ca0cf894c",
                        "targetPort": "c03eedf6-1018-4b89-906a-b26d813d5362"
                    },
                    "source": {
                        "cell": "node-ff973138-91a5-4a94-a7ac-47f35ab2522b",
                        "port": "e49bc48f-eb30-486d-9bd4-628ca0cf894c"
                    },
                    "target": {
                        "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                        "port": "c03eedf6-1018-4b89-906a-b26d813d5362"
                    },
                    "labels": [
                        {
                            "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
                            "sourcePortId": "e49bc48f-eb30-486d-9bd4-628ca0cf894c",
                            "source": {
                                "cell": "node-ff973138-91a5-4a94-a7ac-47f35ab2522b",
                                "port": "e49bc48f-eb30-486d-9bd4-628ca0cf894c"
                            },
                            "target": {
                                "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                "port": "c03eedf6-1018-4b89-906a-b26d813d5362"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
                                "sourcePortId": "e49bc48f-eb30-486d-9bd4-628ca0cf894c",
                                "source": "node-ff973138-91a5-4a94-a7ac-47f35ab2522b",
                                "target": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-ff973138-91a5-4a94-a7ac-47f35ab2522b:e49bc48f-eb30-486d-9bd4-628ca0cf894c-node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:c03eedf6-1018-4b89-906a-b26d813d5362",
                            "sourcePort": "e49bc48f-eb30-486d-9bd4-628ca0cf894c",
                            "targetPort": "c03eedf6-1018-4b89-906a-b26d813d5362"
                        }
                    ]
                }
            ],
            "fontSize": 18,
            "stroke": "#f5a623"
        },
        {
            "id": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
            "renderKey": "ProcessNode",
            "name": "ProcessNode",
            "label": "创建产品表",
            "width": 180,
            "height": 60,
            "ports": {
                "items": [
                    {
                        "group": "top",
                        "id": "fdea702a-93fb-4dca-aa5f-bf4a80703f91"
                    },
                    {
                        "group": "right",
                        "id": "d13540af-5af8-47b4-9162-af58bf95c4e0"
                    },
                    {
                        "group": "bottom",
                        "id": "a32fdbf7-bb5d-4c76-b1d2-0cee39b8ae05"
                    },
                    {
                        "group": "left",
                        "id": "c03eedf6-1018-4b89-906a-b26d813d5362"
                    }
                ],
                "groups": {
                    "top": {
                        "position": {
                            "name": "top"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "right": {
                        "position": {
                            "name": "right"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "bottom": {
                        "position": {
                            "name": "bottom"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "left": {
                        "position": {
                            "name": "left"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    }
                }
            },
            "originData": {
                "name": "ProcessNode",
                "width": 180,
                "height": 60,
                "label": "自定义步骤节点"
            },
            "isCustom": true,
            "x": 2589,
            "y": 487,
            "zIndex": 10,
            "incomingEdges": [
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5"
                        }
                    },
                    "id": "node-554557f5-ef74-4273-97c5-c64d621b0ed0:4aa36143-2862-444a-bb3a-2b56a3643a20-node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:c03eedf6-1018-4b89-906a-b26d813d5362",
                    "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
                    "sourcePortId": "4aa36143-2862-444a-bb3a-2b56a3643a20",
                    "zIndex": 1,
                    "data": {
                        "id": "node-554557f5-ef74-4273-97c5-c64d621b0ed0:4aa36143-2862-444a-bb3a-2b56a3643a20-node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:c03eedf6-1018-4b89-906a-b26d813d5362",
                        "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
                        "sourcePortId": "4aa36143-2862-444a-bb3a-2b56a3643a20",
                        "source": {
                            "cell": "node-554557f5-ef74-4273-97c5-c64d621b0ed0",
                            "port": "4aa36143-2862-444a-bb3a-2b56a3643a20"
                        },
                        "target": {
                            "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                            "port": "c03eedf6-1018-4b89-906a-b26d813d5362"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
                            "sourcePortId": "4aa36143-2862-444a-bb3a-2b56a3643a20",
                            "source": "node-554557f5-ef74-4273-97c5-c64d621b0ed0",
                            "target": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "sourcePort": "4aa36143-2862-444a-bb3a-2b56a3643a20",
                        "targetPort": "c03eedf6-1018-4b89-906a-b26d813d5362"
                    },
                    "source": {
                        "cell": "node-554557f5-ef74-4273-97c5-c64d621b0ed0",
                        "port": "4aa36143-2862-444a-bb3a-2b56a3643a20"
                    },
                    "target": {
                        "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                        "port": "c03eedf6-1018-4b89-906a-b26d813d5362"
                    },
                    "labels": [
                        {
                            "id": "node-554557f5-ef74-4273-97c5-c64d621b0ed0:4aa36143-2862-444a-bb3a-2b56a3643a20-node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:c03eedf6-1018-4b89-906a-b26d813d5362",
                            "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
                            "sourcePortId": "4aa36143-2862-444a-bb3a-2b56a3643a20",
                            "source": {
                                "cell": "node-554557f5-ef74-4273-97c5-c64d621b0ed0",
                                "port": "4aa36143-2862-444a-bb3a-2b56a3643a20"
                            },
                            "target": {
                                "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                "port": "c03eedf6-1018-4b89-906a-b26d813d5362"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
                                "sourcePortId": "4aa36143-2862-444a-bb3a-2b56a3643a20",
                                "source": "node-554557f5-ef74-4273-97c5-c64d621b0ed0",
                                "target": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "sourcePort": "4aa36143-2862-444a-bb3a-2b56a3643a20",
                            "targetPort": "c03eedf6-1018-4b89-906a-b26d813d5362"
                        }
                    ]
                },
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5"
                        }
                    },
                    "id": "node-3e41bea0-7add-4562-8270-fe4c92bca591:6b2f4402-4035-4716-8d7c-37075ddbef34-node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:c03eedf6-1018-4b89-906a-b26d813d5362",
                    "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
                    "sourcePortId": "6b2f4402-4035-4716-8d7c-37075ddbef34",
                    "zIndex": 1,
                    "data": {
                        "id": "node-3e41bea0-7add-4562-8270-fe4c92bca591:6b2f4402-4035-4716-8d7c-37075ddbef34-node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:c03eedf6-1018-4b89-906a-b26d813d5362",
                        "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
                        "sourcePortId": "6b2f4402-4035-4716-8d7c-37075ddbef34",
                        "source": {
                            "cell": "node-3e41bea0-7add-4562-8270-fe4c92bca591",
                            "port": "6b2f4402-4035-4716-8d7c-37075ddbef34"
                        },
                        "target": {
                            "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                            "port": "c03eedf6-1018-4b89-906a-b26d813d5362"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
                            "sourcePortId": "6b2f4402-4035-4716-8d7c-37075ddbef34",
                            "source": "node-3e41bea0-7add-4562-8270-fe4c92bca591",
                            "target": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "sourcePort": "6b2f4402-4035-4716-8d7c-37075ddbef34",
                        "targetPort": "c03eedf6-1018-4b89-906a-b26d813d5362"
                    },
                    "source": {
                        "cell": "node-3e41bea0-7add-4562-8270-fe4c92bca591",
                        "port": "6b2f4402-4035-4716-8d7c-37075ddbef34"
                    },
                    "target": {
                        "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                        "port": "c03eedf6-1018-4b89-906a-b26d813d5362"
                    },
                    "labels": [
                        {
                            "id": "node-3e41bea0-7add-4562-8270-fe4c92bca591:6b2f4402-4035-4716-8d7c-37075ddbef34-node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:c03eedf6-1018-4b89-906a-b26d813d5362",
                            "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
                            "sourcePortId": "6b2f4402-4035-4716-8d7c-37075ddbef34",
                            "source": {
                                "cell": "node-3e41bea0-7add-4562-8270-fe4c92bca591",
                                "port": "6b2f4402-4035-4716-8d7c-37075ddbef34"
                            },
                            "target": {
                                "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                "port": "c03eedf6-1018-4b89-906a-b26d813d5362"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
                                "sourcePortId": "6b2f4402-4035-4716-8d7c-37075ddbef34",
                                "source": "node-3e41bea0-7add-4562-8270-fe4c92bca591",
                                "target": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "sourcePort": "6b2f4402-4035-4716-8d7c-37075ddbef34",
                            "targetPort": "c03eedf6-1018-4b89-906a-b26d813d5362"
                        }
                    ]
                },
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5"
                        }
                    },
                    "id": "node-ff973138-91a5-4a94-a7ac-47f35ab2522b:e49bc48f-eb30-486d-9bd4-628ca0cf894c-node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:c03eedf6-1018-4b89-906a-b26d813d5362",
                    "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
                    "sourcePortId": "e49bc48f-eb30-486d-9bd4-628ca0cf894c",
                    "zIndex": 1,
                    "data": {
                        "id": "node-ff973138-91a5-4a94-a7ac-47f35ab2522b:e49bc48f-eb30-486d-9bd4-628ca0cf894c-node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:c03eedf6-1018-4b89-906a-b26d813d5362",
                        "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
                        "sourcePortId": "e49bc48f-eb30-486d-9bd4-628ca0cf894c",
                        "source": {
                            "cell": "node-ff973138-91a5-4a94-a7ac-47f35ab2522b",
                            "port": "e49bc48f-eb30-486d-9bd4-628ca0cf894c"
                        },
                        "target": {
                            "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                            "port": "c03eedf6-1018-4b89-906a-b26d813d5362"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
                            "sourcePortId": "e49bc48f-eb30-486d-9bd4-628ca0cf894c",
                            "source": "node-ff973138-91a5-4a94-a7ac-47f35ab2522b",
                            "target": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "sourcePort": "e49bc48f-eb30-486d-9bd4-628ca0cf894c",
                        "targetPort": "c03eedf6-1018-4b89-906a-b26d813d5362"
                    },
                    "source": {
                        "cell": "node-ff973138-91a5-4a94-a7ac-47f35ab2522b",
                        "port": "e49bc48f-eb30-486d-9bd4-628ca0cf894c"
                    },
                    "target": {
                        "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                        "port": "c03eedf6-1018-4b89-906a-b26d813d5362"
                    },
                    "labels": [
                        {
                            "id": "node-ff973138-91a5-4a94-a7ac-47f35ab2522b:e49bc48f-eb30-486d-9bd4-628ca0cf894c-node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:c03eedf6-1018-4b89-906a-b26d813d5362",
                            "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
                            "sourcePortId": "e49bc48f-eb30-486d-9bd4-628ca0cf894c",
                            "source": {
                                "cell": "node-ff973138-91a5-4a94-a7ac-47f35ab2522b",
                                "port": "e49bc48f-eb30-486d-9bd4-628ca0cf894c"
                            },
                            "target": {
                                "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                "port": "c03eedf6-1018-4b89-906a-b26d813d5362"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
                                "sourcePortId": "e49bc48f-eb30-486d-9bd4-628ca0cf894c",
                                "source": "node-ff973138-91a5-4a94-a7ac-47f35ab2522b",
                                "target": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "sourcePort": "e49bc48f-eb30-486d-9bd4-628ca0cf894c",
                            "targetPort": "c03eedf6-1018-4b89-906a-b26d813d5362"
                        }
                    ]
                }
            ],
            "outgoingEdges": [
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5"
                        }
                    },
                    "id": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:d13540af-5af8-47b4-9162-af58bf95c4e0-node-17f391ea-aaa1-4a27-b6cc-1e7299afedac:99186481-7369-48ca-836f-1ca776e432d9",
                    "targetPortId": "99186481-7369-48ca-836f-1ca776e432d9",
                    "sourcePortId": "d13540af-5af8-47b4-9162-af58bf95c4e0",
                    "zIndex": 1,
                    "data": {
                        "targetPortId": "99186481-7369-48ca-836f-1ca776e432d9",
                        "sourcePortId": "d13540af-5af8-47b4-9162-af58bf95c4e0",
                        "source": {
                            "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                            "port": "d13540af-5af8-47b4-9162-af58bf95c4e0"
                        },
                        "target": {
                            "cell": "node-17f391ea-aaa1-4a27-b6cc-1e7299afedac",
                            "port": "99186481-7369-48ca-836f-1ca776e432d9"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "99186481-7369-48ca-836f-1ca776e432d9",
                            "sourcePortId": "d13540af-5af8-47b4-9162-af58bf95c4e0",
                            "source": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                            "target": "node-17f391ea-aaa1-4a27-b6cc-1e7299afedac",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "id": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:d13540af-5af8-47b4-9162-af58bf95c4e0-node-17f391ea-aaa1-4a27-b6cc-1e7299afedac:99186481-7369-48ca-836f-1ca776e432d9",
                        "sourcePort": "d13540af-5af8-47b4-9162-af58bf95c4e0",
                        "targetPort": "99186481-7369-48ca-836f-1ca776e432d9"
                    },
                    "source": {
                        "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                        "port": "d13540af-5af8-47b4-9162-af58bf95c4e0"
                    },
                    "target": {
                        "cell": "node-17f391ea-aaa1-4a27-b6cc-1e7299afedac",
                        "port": "99186481-7369-48ca-836f-1ca776e432d9"
                    },
                    "labels": [
                        {
                            "targetPortId": "99186481-7369-48ca-836f-1ca776e432d9",
                            "sourcePortId": "d13540af-5af8-47b4-9162-af58bf95c4e0",
                            "source": {
                                "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                "port": "d13540af-5af8-47b4-9162-af58bf95c4e0"
                            },
                            "target": {
                                "cell": "node-17f391ea-aaa1-4a27-b6cc-1e7299afedac",
                                "port": "99186481-7369-48ca-836f-1ca776e432d9"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "99186481-7369-48ca-836f-1ca776e432d9",
                                "sourcePortId": "d13540af-5af8-47b4-9162-af58bf95c4e0",
                                "source": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                "target": "node-17f391ea-aaa1-4a27-b6cc-1e7299afedac",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:d13540af-5af8-47b4-9162-af58bf95c4e0-node-17f391ea-aaa1-4a27-b6cc-1e7299afedac:99186481-7369-48ca-836f-1ca776e432d9",
                            "sourcePort": "d13540af-5af8-47b4-9162-af58bf95c4e0",
                            "targetPort": "99186481-7369-48ca-836f-1ca776e432d9"
                        }
                    ]
                }
            ],
            "fontSize": 18,
            "stroke": "#7ed321"
        },
        {
            "id": "node-17f391ea-aaa1-4a27-b6cc-1e7299afedac",
            "renderKey": "CustomTerminalNode",
            "name": "CustomTerminalNode",
            "label": "大货采购",
            "width": 180,
            "height": 60,
            "ports": {
                "items": [
                    {
                        "group": "top",
                        "id": "62c9c291-cb67-47d4-9607-13c874b22457"
                    },
                    {
                        "group": "right",
                        "id": "5a9b3c64-e0e9-419b-ae64-72a5b7535241"
                    },
                    {
                        "group": "bottom",
                        "id": "99186481-7369-48ca-836f-1ca776e432d9"
                    },
                    {
                        "group": "left",
                        "id": "625a203d-7e28-4782-902e-72c7c4edb208"
                    }
                ],
                "groups": {
                    "top": {
                        "position": {
                            "name": "top"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "right": {
                        "position": {
                            "name": "right"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "bottom": {
                        "position": {
                            "name": "bottom"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    },
                    "left": {
                        "position": {
                            "name": "left"
                        },
                        "attrs": {
                            "circle": {
                                "r": 4,
                                "magnet": true,
                                "stroke": "#31d0c6",
                                "strokeWidth": 2,
                                "fill": "#fff",
                                "style": {
                                    "visibility": "hidden"
                                }
                            }
                        },
                        "zIndex": 10
                    }
                }
            },
            "originData": {
                "component": {
                    "compare": null
                },
                "name": "CustomTerminalNode",
                "width": 180,
                "height": 60,
                "label": "自定义终端节点"
            },
            "isCustom": true,
            "x": 2934,
            "y": 240,
            "zIndex": 10,
            "fontSize": 18,
            "stroke": "#31d0c6",
            "incomingEdges": [
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5"
                        }
                    },
                    "id": "node-6a62bba8-c258-4c77-8c0b-38580873f617:d7dd1ef0-a5f8-4d3b-be7a-c1493d914eda-node-17f391ea-aaa1-4a27-b6cc-1e7299afedac:625a203d-7e28-4782-902e-72c7c4edb208",
                    "targetPortId": "625a203d-7e28-4782-902e-72c7c4edb208",
                    "sourcePortId": "d7dd1ef0-a5f8-4d3b-be7a-c1493d914eda",
                    "zIndex": 1,
                    "data": {
                        "targetPortId": "625a203d-7e28-4782-902e-72c7c4edb208",
                        "sourcePortId": "d7dd1ef0-a5f8-4d3b-be7a-c1493d914eda",
                        "source": {
                            "cell": "node-6a62bba8-c258-4c77-8c0b-38580873f617",
                            "port": "d7dd1ef0-a5f8-4d3b-be7a-c1493d914eda"
                        },
                        "target": {
                            "cell": "node-17f391ea-aaa1-4a27-b6cc-1e7299afedac",
                            "port": "625a203d-7e28-4782-902e-72c7c4edb208"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "625a203d-7e28-4782-902e-72c7c4edb208",
                            "sourcePortId": "d7dd1ef0-a5f8-4d3b-be7a-c1493d914eda",
                            "source": "node-6a62bba8-c258-4c77-8c0b-38580873f617",
                            "target": "node-17f391ea-aaa1-4a27-b6cc-1e7299afedac",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "id": "node-6a62bba8-c258-4c77-8c0b-38580873f617:d7dd1ef0-a5f8-4d3b-be7a-c1493d914eda-node-17f391ea-aaa1-4a27-b6cc-1e7299afedac:625a203d-7e28-4782-902e-72c7c4edb208",
                        "sourcePort": "d7dd1ef0-a5f8-4d3b-be7a-c1493d914eda",
                        "targetPort": "625a203d-7e28-4782-902e-72c7c4edb208"
                    },
                    "source": {
                        "cell": "node-6a62bba8-c258-4c77-8c0b-38580873f617",
                        "port": "d7dd1ef0-a5f8-4d3b-be7a-c1493d914eda"
                    },
                    "target": {
                        "cell": "node-17f391ea-aaa1-4a27-b6cc-1e7299afedac",
                        "port": "625a203d-7e28-4782-902e-72c7c4edb208"
                    },
                    "labels": [
                        {
                            "targetPortId": "625a203d-7e28-4782-902e-72c7c4edb208",
                            "sourcePortId": "d7dd1ef0-a5f8-4d3b-be7a-c1493d914eda",
                            "source": {
                                "cell": "node-6a62bba8-c258-4c77-8c0b-38580873f617",
                                "port": "d7dd1ef0-a5f8-4d3b-be7a-c1493d914eda"
                            },
                            "target": {
                                "cell": "node-17f391ea-aaa1-4a27-b6cc-1e7299afedac",
                                "port": "625a203d-7e28-4782-902e-72c7c4edb208"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "625a203d-7e28-4782-902e-72c7c4edb208",
                                "sourcePortId": "d7dd1ef0-a5f8-4d3b-be7a-c1493d914eda",
                                "source": "node-6a62bba8-c258-4c77-8c0b-38580873f617",
                                "target": "node-17f391ea-aaa1-4a27-b6cc-1e7299afedac",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-6a62bba8-c258-4c77-8c0b-38580873f617:d7dd1ef0-a5f8-4d3b-be7a-c1493d914eda-node-17f391ea-aaa1-4a27-b6cc-1e7299afedac:625a203d-7e28-4782-902e-72c7c4edb208",
                            "sourcePort": "d7dd1ef0-a5f8-4d3b-be7a-c1493d914eda",
                            "targetPort": "625a203d-7e28-4782-902e-72c7c4edb208"
                        }
                    ]
                },
                {
                    "shape": "edge",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "strokeWidth": 1,
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5"
                        }
                    },
                    "id": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:d13540af-5af8-47b4-9162-af58bf95c4e0-node-17f391ea-aaa1-4a27-b6cc-1e7299afedac:99186481-7369-48ca-836f-1ca776e432d9",
                    "targetPortId": "99186481-7369-48ca-836f-1ca776e432d9",
                    "sourcePortId": "d13540af-5af8-47b4-9162-af58bf95c4e0",
                    "zIndex": 1,
                    "data": {
                        "targetPortId": "99186481-7369-48ca-836f-1ca776e432d9",
                        "sourcePortId": "d13540af-5af8-47b4-9162-af58bf95c4e0",
                        "source": {
                            "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                            "port": "d13540af-5af8-47b4-9162-af58bf95c4e0"
                        },
                        "target": {
                            "cell": "node-17f391ea-aaa1-4a27-b6cc-1e7299afedac",
                            "port": "99186481-7369-48ca-836f-1ca776e432d9"
                        },
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "strokeWidth": 1
                            }
                        },
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "99186481-7369-48ca-836f-1ca776e432d9",
                            "sourcePortId": "d13540af-5af8-47b4-9162-af58bf95c4e0",
                            "source": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                            "target": "node-17f391ea-aaa1-4a27-b6cc-1e7299afedac",
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            }
                        },
                        "id": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:d13540af-5af8-47b4-9162-af58bf95c4e0-node-17f391ea-aaa1-4a27-b6cc-1e7299afedac:99186481-7369-48ca-836f-1ca776e432d9",
                        "sourcePort": "d13540af-5af8-47b4-9162-af58bf95c4e0",
                        "targetPort": "99186481-7369-48ca-836f-1ca776e432d9"
                    },
                    "source": {
                        "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                        "port": "d13540af-5af8-47b4-9162-af58bf95c4e0"
                    },
                    "target": {
                        "cell": "node-17f391ea-aaa1-4a27-b6cc-1e7299afedac",
                        "port": "99186481-7369-48ca-836f-1ca776e432d9"
                    },
                    "labels": [
                        {
                            "targetPortId": "99186481-7369-48ca-836f-1ca776e432d9",
                            "sourcePortId": "d13540af-5af8-47b4-9162-af58bf95c4e0",
                            "source": {
                                "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                "port": "d13540af-5af8-47b4-9162-af58bf95c4e0"
                            },
                            "target": {
                                "cell": "node-17f391ea-aaa1-4a27-b6cc-1e7299afedac",
                                "port": "99186481-7369-48ca-836f-1ca776e432d9"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "99186481-7369-48ca-836f-1ca776e432d9",
                                "sourcePortId": "d13540af-5af8-47b4-9162-af58bf95c4e0",
                                "source": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                "target": "node-17f391ea-aaa1-4a27-b6cc-1e7299afedac",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:d13540af-5af8-47b4-9162-af58bf95c4e0-node-17f391ea-aaa1-4a27-b6cc-1e7299afedac:99186481-7369-48ca-836f-1ca776e432d9",
                            "sourcePort": "d13540af-5af8-47b4-9162-af58bf95c4e0",
                            "targetPort": "99186481-7369-48ca-836f-1ca776e432d9"
                        }
                    ]
                }
            ],
            "outgoingEdges": null
        }
    ],
    "edges": [
        {
            "id": "node-12235844-15cc-47f2-9788-94faf1850078:04268d80-307f-4e78-9b9c-135772b44e56-node-6a62bba8-c258-4c77-8c0b-38580873f617:6fabb6ad-f76c-4fe3-87d0-42d38a42ebec",
            "targetPortId": "6fabb6ad-f76c-4fe3-87d0-42d38a42ebec",
            "sourcePortId": "04268d80-307f-4e78-9b9c-135772b44e56",
            "source": {
                "cell": "node-12235844-15cc-47f2-9788-94faf1850078",
                "port": "04268d80-307f-4e78-9b9c-135772b44e56"
            },
            "target": {
                "cell": "node-6a62bba8-c258-4c77-8c0b-38580873f617",
                "port": "6fabb6ad-f76c-4fe3-87d0-42d38a42ebec"
            },
            "attrs": {
                "line": {
                    "stroke": "#A2B1C3",
                    "targetMarker": {
                        "name": "block",
                        "width": 12,
                        "height": 8
                    },
                    "strokeDasharray": "5 5",
                    "strokeWidth": 1
                }
            },
            "zIndex": 1,
            "data": {
                "targetPortId": "6fabb6ad-f76c-4fe3-87d0-42d38a42ebec",
                "sourcePortId": "04268d80-307f-4e78-9b9c-135772b44e56",
                "source": "node-12235844-15cc-47f2-9788-94faf1850078",
                "target": "node-6a62bba8-c258-4c77-8c0b-38580873f617",
                "attrs": {
                    "line": {
                        "stroke": "#A2B1C3",
                        "targetMarker": {
                            "name": "block",
                            "width": 12,
                            "height": 8
                        },
                        "strokeDasharray": "5 5",
                        "strokeWidth": 1
                    }
                }
            },
            "sourcePort": "04268d80-307f-4e78-9b9c-135772b44e56",
            "targetPort": "6fabb6ad-f76c-4fe3-87d0-42d38a42ebec"
        },
        {
            "id": "node-bb23ee69-0ac6-4970-b168-9143336cc41c:918b08dd-c56c-471b-a24c-d22462cf6ae6-node-12235844-15cc-47f2-9788-94faf1850078:e3fd3785-09ef-4aac-91af-431dccda2009",
            "targetPortId": "e3fd3785-09ef-4aac-91af-431dccda2009",
            "sourcePortId": "918b08dd-c56c-471b-a24c-d22462cf6ae6",
            "source": {
                "cell": "node-bb23ee69-0ac6-4970-b168-9143336cc41c",
                "port": "918b08dd-c56c-471b-a24c-d22462cf6ae6"
            },
            "target": {
                "cell": "node-12235844-15cc-47f2-9788-94faf1850078",
                "port": "e3fd3785-09ef-4aac-91af-431dccda2009"
            },
            "attrs": {
                "line": {
                    "stroke": "#A2B1C3",
                    "targetMarker": {
                        "name": "block",
                        "width": 12,
                        "height": 8
                    },
                    "strokeDasharray": "5 5",
                    "strokeWidth": 1
                }
            },
            "zIndex": 1,
            "data": {
                "targetPortId": "e3fd3785-09ef-4aac-91af-431dccda2009",
                "sourcePortId": "918b08dd-c56c-471b-a24c-d22462cf6ae6",
                "source": "node-bb23ee69-0ac6-4970-b168-9143336cc41c",
                "target": "node-12235844-15cc-47f2-9788-94faf1850078",
                "attrs": {
                    "line": {
                        "stroke": "#A2B1C3",
                        "targetMarker": {
                            "name": "block",
                            "width": 12,
                            "height": 8
                        },
                        "strokeDasharray": "5 5",
                        "strokeWidth": 1
                    }
                }
            },
            "sourcePort": "918b08dd-c56c-471b-a24c-d22462cf6ae6",
            "targetPort": "e3fd3785-09ef-4aac-91af-431dccda2009"
        },
        {
            "id": "node-554557f5-ef74-4273-97c5-c64d621b0ed0:4aa36143-2862-444a-bb3a-2b56a3643a20-node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:c03eedf6-1018-4b89-906a-b26d813d5362",
            "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
            "sourcePortId": "4aa36143-2862-444a-bb3a-2b56a3643a20",
            "source": {
                "cell": "node-554557f5-ef74-4273-97c5-c64d621b0ed0",
                "port": "4aa36143-2862-444a-bb3a-2b56a3643a20"
            },
            "target": {
                "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                "port": "c03eedf6-1018-4b89-906a-b26d813d5362"
            },
            "attrs": {
                "line": {
                    "stroke": "#A2B1C3",
                    "targetMarker": {
                        "name": "block",
                        "width": 12,
                        "height": 8
                    },
                    "strokeDasharray": "5 5",
                    "strokeWidth": 1
                }
            },
            "zIndex": 1,
            "data": {
                "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
                "sourcePortId": "4aa36143-2862-444a-bb3a-2b56a3643a20",
                "source": "node-554557f5-ef74-4273-97c5-c64d621b0ed0",
                "target": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                "attrs": {
                    "line": {
                        "stroke": "#A2B1C3",
                        "targetMarker": {
                            "name": "block",
                            "width": 12,
                            "height": 8
                        },
                        "strokeDasharray": "5 5",
                        "strokeWidth": 1
                    }
                }
            },
            "sourcePort": "4aa36143-2862-444a-bb3a-2b56a3643a20",
            "targetPort": "c03eedf6-1018-4b89-906a-b26d813d5362"
        },
        {
            "id": "node-3e41bea0-7add-4562-8270-fe4c92bca591:6b2f4402-4035-4716-8d7c-37075ddbef34-node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:c03eedf6-1018-4b89-906a-b26d813d5362",
            "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
            "sourcePortId": "6b2f4402-4035-4716-8d7c-37075ddbef34",
            "source": {
                "cell": "node-3e41bea0-7add-4562-8270-fe4c92bca591",
                "port": "6b2f4402-4035-4716-8d7c-37075ddbef34"
            },
            "target": {
                "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                "port": "c03eedf6-1018-4b89-906a-b26d813d5362"
            },
            "attrs": {
                "line": {
                    "stroke": "#A2B1C3",
                    "targetMarker": {
                        "name": "block",
                        "width": 12,
                        "height": 8
                    },
                    "strokeDasharray": "5 5",
                    "strokeWidth": 1
                }
            },
            "zIndex": 1,
            "data": {
                "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
                "sourcePortId": "6b2f4402-4035-4716-8d7c-37075ddbef34",
                "source": "node-3e41bea0-7add-4562-8270-fe4c92bca591",
                "target": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                "attrs": {
                    "line": {
                        "stroke": "#A2B1C3",
                        "targetMarker": {
                            "name": "block",
                            "width": 12,
                            "height": 8
                        },
                        "strokeDasharray": "5 5",
                        "strokeWidth": 1
                    }
                }
            },
            "sourcePort": "6b2f4402-4035-4716-8d7c-37075ddbef34",
            "targetPort": "c03eedf6-1018-4b89-906a-b26d813d5362"
        },
        {
            "id": "node-ff973138-91a5-4a94-a7ac-47f35ab2522b:e49bc48f-eb30-486d-9bd4-628ca0cf894c-node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:c03eedf6-1018-4b89-906a-b26d813d5362",
            "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
            "sourcePortId": "e49bc48f-eb30-486d-9bd4-628ca0cf894c",
            "source": {
                "cell": "node-ff973138-91a5-4a94-a7ac-47f35ab2522b",
                "port": "e49bc48f-eb30-486d-9bd4-628ca0cf894c"
            },
            "target": {
                "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                "port": "c03eedf6-1018-4b89-906a-b26d813d5362"
            },
            "attrs": {
                "line": {
                    "stroke": "#A2B1C3",
                    "targetMarker": {
                        "name": "block",
                        "width": 12,
                        "height": 8
                    },
                    "strokeDasharray": "5 5",
                    "strokeWidth": 1
                }
            },
            "zIndex": 1,
            "data": {
                "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
                "sourcePortId": "e49bc48f-eb30-486d-9bd4-628ca0cf894c",
                "source": "node-ff973138-91a5-4a94-a7ac-47f35ab2522b",
                "target": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                "attrs": {
                    "line": {
                        "stroke": "#A2B1C3",
                        "targetMarker": {
                            "name": "block",
                            "width": 12,
                            "height": 8
                        },
                        "strokeDasharray": "5 5",
                        "strokeWidth": 1
                    }
                }
            },
            "sourcePort": "e49bc48f-eb30-486d-9bd4-628ca0cf894c",
            "targetPort": "c03eedf6-1018-4b89-906a-b26d813d5362"
        },
        {
            "id": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9:4393d104-65cd-4054-a39f-6470621f5080-node-3e41bea0-7add-4562-8270-fe4c92bca591:be415689-0e56-4fa9-8aa9-eeb1d87f3e29",
            "targetPortId": "be415689-0e56-4fa9-8aa9-eeb1d87f3e29",
            "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
            "source": {
                "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                "port": "4393d104-65cd-4054-a39f-6470621f5080"
            },
            "target": {
                "cell": "node-3e41bea0-7add-4562-8270-fe4c92bca591",
                "port": "be415689-0e56-4fa9-8aa9-eeb1d87f3e29"
            },
            "attrs": {
                "line": {
                    "stroke": "#A2B1C3",
                    "targetMarker": {
                        "name": "block",
                        "width": 12,
                        "height": 8
                    },
                    "strokeDasharray": "5 5",
                    "strokeWidth": 1
                }
            },
            "zIndex": 1,
            "data": {
                "targetPortId": "be415689-0e56-4fa9-8aa9-eeb1d87f3e29",
                "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
                "source": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                "target": "node-3e41bea0-7add-4562-8270-fe4c92bca591",
                "attrs": {
                    "line": {
                        "stroke": "#A2B1C3",
                        "targetMarker": {
                            "name": "block",
                            "width": 12,
                            "height": 8
                        },
                        "strokeDasharray": "5 5",
                        "strokeWidth": 1
                    }
                }
            },
            "sourcePort": "4393d104-65cd-4054-a39f-6470621f5080",
            "targetPort": "be415689-0e56-4fa9-8aa9-eeb1d87f3e29"
        },
        {
            "id": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9:4393d104-65cd-4054-a39f-6470621f5080-node-ff973138-91a5-4a94-a7ac-47f35ab2522b:76573869-aa36-44f6-857c-30ec1d45436b",
            "targetPortId": "76573869-aa36-44f6-857c-30ec1d45436b",
            "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
            "source": {
                "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                "port": "4393d104-65cd-4054-a39f-6470621f5080"
            },
            "target": {
                "cell": "node-ff973138-91a5-4a94-a7ac-47f35ab2522b",
                "port": "76573869-aa36-44f6-857c-30ec1d45436b"
            },
            "attrs": {
                "line": {
                    "stroke": "#A2B1C3",
                    "targetMarker": {
                        "name": "block",
                        "width": 12,
                        "height": 8
                    },
                    "strokeDasharray": "5 5",
                    "strokeWidth": 1
                }
            },
            "zIndex": 1,
            "data": {
                "targetPortId": "76573869-aa36-44f6-857c-30ec1d45436b",
                "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
                "source": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                "target": "node-ff973138-91a5-4a94-a7ac-47f35ab2522b",
                "attrs": {
                    "line": {
                        "stroke": "#A2B1C3",
                        "targetMarker": {
                            "name": "block",
                            "width": 12,
                            "height": 8
                        },
                        "strokeDasharray": "5 5",
                        "strokeWidth": 1
                    }
                }
            },
            "sourcePort": "4393d104-65cd-4054-a39f-6470621f5080",
            "targetPort": "76573869-aa36-44f6-857c-30ec1d45436b"
        },
        {
            "id": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9:4393d104-65cd-4054-a39f-6470621f5080-node-554557f5-ef74-4273-97c5-c64d621b0ed0:bc2e16e6-e7a8-49a1-8075-36c79877c9a6",
            "targetPortId": "bc2e16e6-e7a8-49a1-8075-36c79877c9a6",
            "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
            "source": {
                "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                "port": "4393d104-65cd-4054-a39f-6470621f5080"
            },
            "target": {
                "cell": "node-554557f5-ef74-4273-97c5-c64d621b0ed0",
                "port": "bc2e16e6-e7a8-49a1-8075-36c79877c9a6"
            },
            "attrs": {
                "line": {
                    "stroke": "#A2B1C3",
                    "targetMarker": {
                        "name": "block",
                        "width": 12,
                        "height": 8
                    },
                    "strokeDasharray": "5 5",
                    "strokeWidth": 1
                }
            },
            "zIndex": 1,
            "data": {
                "targetPortId": "bc2e16e6-e7a8-49a1-8075-36c79877c9a6",
                "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
                "source": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                "target": "node-554557f5-ef74-4273-97c5-c64d621b0ed0",
                "attrs": {
                    "line": {
                        "stroke": "#A2B1C3",
                        "targetMarker": {
                            "name": "block",
                            "width": 12,
                            "height": 8
                        },
                        "strokeDasharray": "5 5",
                        "strokeWidth": 1
                    }
                }
            },
            "sourcePort": "4393d104-65cd-4054-a39f-6470621f5080",
            "targetPort": "bc2e16e6-e7a8-49a1-8075-36c79877c9a6"
        },
        {
            "id": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0:c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d-node-164790c3-ba8f-4b4a-bef0-4006f000efa9:ec334731-f845-4b50-b660-0edf1242edd1",
            "targetPortId": "ec334731-f845-4b50-b660-0edf1242edd1",
            "sourcePortId": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d",
            "source": {
                "cell": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0",
                "port": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d"
            },
            "target": {
                "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                "port": "ec334731-f845-4b50-b660-0edf1242edd1"
            },
            "attrs": {
                "line": {
                    "stroke": "#A2B1C3",
                    "targetMarker": {
                        "name": "block",
                        "width": 12,
                        "height": 8
                    },
                    "strokeDasharray": "5 5",
                    "strokeWidth": 1
                }
            },
            "zIndex": 1,
            "data": {
                "targetPortId": "ec334731-f845-4b50-b660-0edf1242edd1",
                "sourcePortId": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d",
                "source": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0",
                "target": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                "attrs": {
                    "line": {
                        "stroke": "#A2B1C3",
                        "targetMarker": {
                            "name": "block",
                            "width": 12,
                            "height": 8
                        },
                        "strokeDasharray": "5 5",
                        "strokeWidth": 1
                    }
                }
            },
            "sourcePort": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d",
            "targetPort": "ec334731-f845-4b50-b660-0edf1242edd1"
        },
        {
            "id": "node-c34e4a14-d014-456c-bcf3-67251212ce82:9b30eaae-7513-4afa-9f81-e62f16bc30e1-node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0:da7c9f33-6c29-4652-b8df-4b9c4bf7e1c0",
            "targetPortId": "da7c9f33-6c29-4652-b8df-4b9c4bf7e1c0",
            "sourcePortId": "9b30eaae-7513-4afa-9f81-e62f16bc30e1",
            "source": {
                "cell": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                "port": "9b30eaae-7513-4afa-9f81-e62f16bc30e1"
            },
            "target": {
                "cell": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0",
                "port": "da7c9f33-6c29-4652-b8df-4b9c4bf7e1c0"
            },
            "attrs": {
                "line": {
                    "stroke": "#A2B1C3",
                    "targetMarker": {
                        "name": "block",
                        "width": 12,
                        "height": 8
                    },
                    "strokeDasharray": "5 5",
                    "strokeWidth": 1,
                    "label": "是"
                },
                "text": {
                    "fontSize": 18
                }
            },
            "zIndex": 1,
            "data": {
                "targetPortId": "da7c9f33-6c29-4652-b8df-4b9c4bf7e1c0",
                "sourcePortId": "9b30eaae-7513-4afa-9f81-e62f16bc30e1",
                "source": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                "target": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0",
                "attrs": {
                    "line": {
                        "stroke": "#A2B1C3",
                        "targetMarker": {
                            "name": "block",
                            "width": 12,
                            "height": 8
                        },
                        "strokeDasharray": "5 5",
                        "strokeWidth": 1
                    }
                }
            },
            "sourcePort": "9b30eaae-7513-4afa-9f81-e62f16bc30e1",
            "targetPort": "da7c9f33-6c29-4652-b8df-4b9c4bf7e1c0",
            "label": "是",
            "fontSize": 18
        },
        {
            "id": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9:07b4d995-8490-46d8-8cae-238bb39e2ea6-node-c34e4a14-d014-456c-bcf3-67251212ce82:9751fb89-7e25-4aa4-8eaf-7db41d695da9",
            "targetPortId": "9751fb89-7e25-4aa4-8eaf-7db41d695da9",
            "sourcePortId": "07b4d995-8490-46d8-8cae-238bb39e2ea6",
            "source": {
                "cell": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                "port": "07b4d995-8490-46d8-8cae-238bb39e2ea6"
            },
            "target": {
                "cell": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                "port": "9751fb89-7e25-4aa4-8eaf-7db41d695da9"
            },
            "attrs": {
                "line": {
                    "stroke": "#A2B1C3",
                    "targetMarker": {
                        "name": "block",
                        "width": 12,
                        "height": 8
                    },
                    "strokeDasharray": "5 5",
                    "strokeWidth": 1
                }
            },
            "zIndex": 1,
            "data": {
                "targetPortId": "9751fb89-7e25-4aa4-8eaf-7db41d695da9",
                "sourcePortId": "07b4d995-8490-46d8-8cae-238bb39e2ea6",
                "source": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                "target": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                "attrs": {
                    "line": {
                        "stroke": "#A2B1C3",
                        "targetMarker": {
                            "name": "block",
                            "width": 12,
                            "height": 8
                        },
                        "strokeDasharray": "5 5",
                        "strokeWidth": 1
                    }
                }
            },
            "sourcePort": "07b4d995-8490-46d8-8cae-238bb39e2ea6",
            "targetPort": "9751fb89-7e25-4aa4-8eaf-7db41d695da9"
        },
        {
            "id": "node-f6984c8b-d655-4b88-9bad-fb3676243be7:da011eb4-995e-4d42-b4a9-aae8e2216f95-node-125b649f-a496-4a5a-81ef-d37b5a36c2a9:afbff0aa-f7c3-4471-a5e9-329ec5d2bab0",
            "targetPortId": "afbff0aa-f7c3-4471-a5e9-329ec5d2bab0",
            "sourcePortId": "da011eb4-995e-4d42-b4a9-aae8e2216f95",
            "source": {
                "cell": "node-f6984c8b-d655-4b88-9bad-fb3676243be7",
                "port": "da011eb4-995e-4d42-b4a9-aae8e2216f95"
            },
            "target": {
                "cell": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                "port": "afbff0aa-f7c3-4471-a5e9-329ec5d2bab0"
            },
            "attrs": {
                "line": {
                    "stroke": "#A2B1C3",
                    "targetMarker": {
                        "name": "block",
                        "width": 12,
                        "height": 8
                    },
                    "strokeDasharray": "5 5",
                    "strokeWidth": 1,
                    "label": "是"
                },
                "text": {
                    "fontSize": 18
                }
            },
            "zIndex": 1,
            "data": {
                "targetPortId": "afbff0aa-f7c3-4471-a5e9-329ec5d2bab0",
                "sourcePortId": "da011eb4-995e-4d42-b4a9-aae8e2216f95",
                "source": "node-f6984c8b-d655-4b88-9bad-fb3676243be7",
                "target": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                "attrs": {
                    "line": {
                        "stroke": "#A2B1C3",
                        "targetMarker": {
                            "name": "block",
                            "width": 12,
                            "height": 8
                        },
                        "strokeDasharray": "5 5",
                        "strokeWidth": 1
                    }
                }
            },
            "sourcePort": "da011eb4-995e-4d42-b4a9-aae8e2216f95",
            "targetPort": "afbff0aa-f7c3-4471-a5e9-329ec5d2bab0",
            "label": "是",
            "fontSize": 18
        },
        {
            "id": "node-5c5e445a-f775-4d1b-8a55-554efccfd476:0eda0ed5-08fa-4441-9e98-510c6408be82-node-f6984c8b-d655-4b88-9bad-fb3676243be7:8c7ab667-9308-4c6a-bc1a-27affb627c75",
            "targetPortId": "8c7ab667-9308-4c6a-bc1a-27affb627c75",
            "sourcePortId": "0eda0ed5-08fa-4441-9e98-510c6408be82",
            "source": {
                "cell": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                "port": "0eda0ed5-08fa-4441-9e98-510c6408be82"
            },
            "target": {
                "cell": "node-f6984c8b-d655-4b88-9bad-fb3676243be7",
                "port": "8c7ab667-9308-4c6a-bc1a-27affb627c75"
            },
            "attrs": {
                "line": {
                    "stroke": "#A2B1C3",
                    "targetMarker": {
                        "name": "block",
                        "width": 12,
                        "height": 8
                    },
                    "strokeDasharray": "5 5",
                    "strokeWidth": 1
                }
            },
            "zIndex": 1,
            "data": {
                "targetPortId": "8c7ab667-9308-4c6a-bc1a-27affb627c75",
                "sourcePortId": "0eda0ed5-08fa-4441-9e98-510c6408be82",
                "source": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                "target": "node-f6984c8b-d655-4b88-9bad-fb3676243be7",
                "attrs": {
                    "line": {
                        "stroke": "#A2B1C3",
                        "targetMarker": {
                            "name": "block",
                            "width": 12,
                            "height": 8
                        },
                        "strokeDasharray": "5 5",
                        "strokeWidth": 1
                    }
                }
            },
            "sourcePort": "0eda0ed5-08fa-4441-9e98-510c6408be82",
            "targetPort": "8c7ab667-9308-4c6a-bc1a-27affb627c75"
        },
        {
            "id": "node-f6984c8b-d655-4b88-9bad-fb3676243be7:f14434c6-981d-4157-a0a3-a5a96887544f-node-39207817-50a6-4ddd-abcd-30829227705c:bdcbf8cc-3b74-4140-8d59-809f190719e3",
            "targetPortId": "bdcbf8cc-3b74-4140-8d59-809f190719e3",
            "sourcePortId": "f14434c6-981d-4157-a0a3-a5a96887544f",
            "source": {
                "cell": "node-f6984c8b-d655-4b88-9bad-fb3676243be7",
                "port": "f14434c6-981d-4157-a0a3-a5a96887544f"
            },
            "target": {
                "cell": "node-39207817-50a6-4ddd-abcd-30829227705c",
                "port": "bdcbf8cc-3b74-4140-8d59-809f190719e3"
            },
            "attrs": {
                "line": {
                    "stroke": "#A2B1C3",
                    "targetMarker": {
                        "name": "block",
                        "width": 12,
                        "height": 8
                    },
                    "strokeDasharray": "5 5",
                    "strokeWidth": 1,
                    "label": "否"
                },
                "text": {
                    "fontSize": 18
                }
            },
            "zIndex": 1,
            "data": {
                "targetPortId": "bdcbf8cc-3b74-4140-8d59-809f190719e3",
                "sourcePortId": "f14434c6-981d-4157-a0a3-a5a96887544f",
                "source": "node-f6984c8b-d655-4b88-9bad-fb3676243be7",
                "target": "node-39207817-50a6-4ddd-abcd-30829227705c",
                "attrs": {
                    "line": {
                        "stroke": "#A2B1C3",
                        "targetMarker": {
                            "name": "block",
                            "width": 12,
                            "height": 8
                        },
                        "strokeDasharray": "5 5",
                        "strokeWidth": 1
                    }
                }
            },
            "sourcePort": "f14434c6-981d-4157-a0a3-a5a96887544f",
            "targetPort": "bdcbf8cc-3b74-4140-8d59-809f190719e3",
            "label": "否",
            "fontSize": 18
        },
        {
            "id": "node-39207817-50a6-4ddd-abcd-30829227705c:d460e613-a8fe-4053-9698-d8b3040c9b74-node-1fbcf552-d5de-43b1-ba92-edac141e477b:f7fff283-eeeb-47fe-9b56-97539000f175",
            "targetPortId": "f7fff283-eeeb-47fe-9b56-97539000f175",
            "sourcePortId": "d460e613-a8fe-4053-9698-d8b3040c9b74",
            "source": {
                "cell": "node-39207817-50a6-4ddd-abcd-30829227705c",
                "port": "d460e613-a8fe-4053-9698-d8b3040c9b74"
            },
            "target": {
                "cell": "node-1fbcf552-d5de-43b1-ba92-edac141e477b",
                "port": "f7fff283-eeeb-47fe-9b56-97539000f175"
            },
            "attrs": {
                "line": {
                    "stroke": "#A2B1C3",
                    "targetMarker": {
                        "name": "block",
                        "width": 12,
                        "height": 8
                    },
                    "strokeDasharray": "5 5",
                    "strokeWidth": 1
                }
            },
            "zIndex": 1,
            "data": {
                "targetPortId": "f7fff283-eeeb-47fe-9b56-97539000f175",
                "sourcePortId": "d460e613-a8fe-4053-9698-d8b3040c9b74",
                "source": "node-39207817-50a6-4ddd-abcd-30829227705c",
                "target": "node-1fbcf552-d5de-43b1-ba92-edac141e477b",
                "attrs": {
                    "line": {
                        "stroke": "#A2B1C3",
                        "targetMarker": {
                            "name": "block",
                            "width": 12,
                            "height": 8
                        },
                        "strokeDasharray": "5 5",
                        "strokeWidth": 1
                    }
                }
            },
            "sourcePort": "d460e613-a8fe-4053-9698-d8b3040c9b74",
            "targetPort": "f7fff283-eeeb-47fe-9b56-97539000f175"
        },
        {
            "id": "node-1fbcf552-d5de-43b1-ba92-edac141e477b:e0d81787-f6ea-49a9-a4c6-035d3aa0d1fb-node-af43c6e2-dfa9-48f3-ab9d-1e0c6c234e15:970cd241-5abf-4dcd-bb95-14cb79a3269c",
            "targetPortId": "970cd241-5abf-4dcd-bb95-14cb79a3269c",
            "sourcePortId": "e0d81787-f6ea-49a9-a4c6-035d3aa0d1fb",
            "source": {
                "cell": "node-1fbcf552-d5de-43b1-ba92-edac141e477b",
                "port": "e0d81787-f6ea-49a9-a4c6-035d3aa0d1fb"
            },
            "target": {
                "cell": "node-af43c6e2-dfa9-48f3-ab9d-1e0c6c234e15",
                "port": "970cd241-5abf-4dcd-bb95-14cb79a3269c"
            },
            "attrs": {
                "line": {
                    "stroke": "#A2B1C3",
                    "targetMarker": {
                        "name": "block",
                        "width": 12,
                        "height": 8
                    },
                    "strokeDasharray": "5 5",
                    "strokeWidth": 1
                }
            },
            "zIndex": 1,
            "data": {
                "targetPortId": "970cd241-5abf-4dcd-bb95-14cb79a3269c",
                "sourcePortId": "e0d81787-f6ea-49a9-a4c6-035d3aa0d1fb",
                "source": "node-1fbcf552-d5de-43b1-ba92-edac141e477b",
                "target": "node-af43c6e2-dfa9-48f3-ab9d-1e0c6c234e15",
                "attrs": {
                    "line": {
                        "stroke": "#A2B1C3",
                        "targetMarker": {
                            "name": "block",
                            "width": 12,
                            "height": 8
                        },
                        "strokeDasharray": "5 5",
                        "strokeWidth": 1
                    }
                }
            },
            "sourcePort": "e0d81787-f6ea-49a9-a4c6-035d3aa0d1fb",
            "targetPort": "970cd241-5abf-4dcd-bb95-14cb79a3269c"
        },
        {
            "id": "node-af43c6e2-dfa9-48f3-ab9d-1e0c6c234e15:374dba2a-0d12-486d-baf8-6b9da019834c-node-bb23ee69-0ac6-4970-b168-9143336cc41c:e3cea855-88ab-48f6-96ea-251b9a6dc084",
            "targetPortId": "e3cea855-88ab-48f6-96ea-251b9a6dc084",
            "sourcePortId": "374dba2a-0d12-486d-baf8-6b9da019834c",
            "source": {
                "cell": "node-af43c6e2-dfa9-48f3-ab9d-1e0c6c234e15",
                "port": "374dba2a-0d12-486d-baf8-6b9da019834c"
            },
            "target": {
                "cell": "node-bb23ee69-0ac6-4970-b168-9143336cc41c",
                "port": "e3cea855-88ab-48f6-96ea-251b9a6dc084"
            },
            "attrs": {
                "line": {
                    "stroke": "#A2B1C3",
                    "targetMarker": {
                        "name": "block",
                        "width": 12,
                        "height": 8
                    },
                    "strokeDasharray": "5 5",
                    "strokeWidth": 1
                }
            },
            "zIndex": 1,
            "data": {
                "targetPortId": "e3cea855-88ab-48f6-96ea-251b9a6dc084",
                "sourcePortId": "374dba2a-0d12-486d-baf8-6b9da019834c",
                "source": "node-af43c6e2-dfa9-48f3-ab9d-1e0c6c234e15",
                "target": "node-bb23ee69-0ac6-4970-b168-9143336cc41c",
                "attrs": {
                    "line": {
                        "stroke": "#A2B1C3",
                        "targetMarker": {
                            "name": "block",
                            "width": 12,
                            "height": 8
                        },
                        "strokeDasharray": "5 5",
                        "strokeWidth": 1
                    }
                }
            },
            "sourcePort": "374dba2a-0d12-486d-baf8-6b9da019834c",
            "targetPort": "e3cea855-88ab-48f6-96ea-251b9a6dc084"
        },
        {
            "id": "node-d09f51c8-b635-4e83-bcdc-5f102f92e018:8c3192aa-3b4f-4e5d-8492-247af0943a9b-node-5c5e445a-f775-4d1b-8a55-554efccfd476:314f73e8-5ea1-4265-aaac-3f5a20fdbbb5",
            "targetPortId": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5",
            "sourcePortId": "8c3192aa-3b4f-4e5d-8492-247af0943a9b",
            "source": {
                "cell": "node-d09f51c8-b635-4e83-bcdc-5f102f92e018",
                "port": "8c3192aa-3b4f-4e5d-8492-247af0943a9b"
            },
            "target": {
                "cell": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                "port": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5"
            },
            "attrs": {
                "line": {
                    "stroke": "#A2B1C3",
                    "targetMarker": {
                        "name": "block",
                        "width": 12,
                        "height": 8
                    },
                    "strokeDasharray": "5 5",
                    "strokeWidth": 1
                }
            },
            "zIndex": 1,
            "data": {
                "targetPortId": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5",
                "sourcePortId": "8c3192aa-3b4f-4e5d-8492-247af0943a9b",
                "source": "node-d09f51c8-b635-4e83-bcdc-5f102f92e018",
                "target": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                "attrs": {
                    "line": {
                        "stroke": "#A2B1C3",
                        "targetMarker": {
                            "name": "block",
                            "width": 12,
                            "height": 8
                        },
                        "strokeDasharray": "5 5",
                        "strokeWidth": 1
                    }
                }
            },
            "sourcePort": "8c3192aa-3b4f-4e5d-8492-247af0943a9b",
            "targetPort": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5"
        },
        {
            "id": "node-b2ca036d-8cc0-4415-9947-c21c4a006b25:3830023a-937e-4801-a2fe-407234d8bcc4-node-f6984c8b-d655-4b88-9bad-fb3676243be7:e64afb7d-73fb-42a3-af61-322da667d30c",
            "targetPortId": "e64afb7d-73fb-42a3-af61-322da667d30c",
            "sourcePortId": "3830023a-937e-4801-a2fe-407234d8bcc4",
            "source": {
                "cell": "node-b2ca036d-8cc0-4415-9947-c21c4a006b25",
                "port": "3830023a-937e-4801-a2fe-407234d8bcc4"
            },
            "target": {
                "cell": "node-f6984c8b-d655-4b88-9bad-fb3676243be7",
                "port": "e64afb7d-73fb-42a3-af61-322da667d30c"
            },
            "attrs": {
                "line": {
                    "stroke": "#A2B1C3",
                    "targetMarker": {
                        "name": "block",
                        "width": 12,
                        "height": 8
                    },
                    "strokeDasharray": "5 5",
                    "strokeWidth": 1,
                    "label": "否"
                },
                "text": {
                    "fontSize": 18
                }
            },
            "zIndex": 1,
            "data": {
                "targetPortId": "e64afb7d-73fb-42a3-af61-322da667d30c",
                "sourcePortId": "3830023a-937e-4801-a2fe-407234d8bcc4",
                "source": "node-b2ca036d-8cc0-4415-9947-c21c4a006b25",
                "target": "node-f6984c8b-d655-4b88-9bad-fb3676243be7",
                "attrs": {
                    "line": {
                        "stroke": "#A2B1C3",
                        "targetMarker": {
                            "name": "block",
                            "width": 12,
                            "height": 8
                        },
                        "strokeDasharray": "5 5",
                        "strokeWidth": 1
                    }
                }
            },
            "sourcePort": "3830023a-937e-4801-a2fe-407234d8bcc4",
            "targetPort": "e64afb7d-73fb-42a3-af61-322da667d30c",
            "label": "否",
            "fontSize": 18
        },
        {
            "id": "node-4a72f653-f0f7-433a-8161-86dc05757e93:3678b1c4-e0ef-4b28-8757-5cf32613eac8-node-b2ca036d-8cc0-4415-9947-c21c4a006b25:dd1064e7-ae96-48c0-9c54-6ab2b65f12e5",
            "targetPortId": "dd1064e7-ae96-48c0-9c54-6ab2b65f12e5",
            "sourcePortId": "3678b1c4-e0ef-4b28-8757-5cf32613eac8",
            "source": {
                "cell": "node-4a72f653-f0f7-433a-8161-86dc05757e93",
                "port": "3678b1c4-e0ef-4b28-8757-5cf32613eac8"
            },
            "target": {
                "cell": "node-b2ca036d-8cc0-4415-9947-c21c4a006b25",
                "port": "dd1064e7-ae96-48c0-9c54-6ab2b65f12e5"
            },
            "attrs": {
                "line": {
                    "stroke": "#A2B1C3",
                    "targetMarker": {
                        "name": "block",
                        "width": 12,
                        "height": 8
                    },
                    "strokeDasharray": "5 5",
                    "strokeWidth": 1
                }
            },
            "zIndex": 1,
            "data": {
                "targetPortId": "dd1064e7-ae96-48c0-9c54-6ab2b65f12e5",
                "sourcePortId": "3678b1c4-e0ef-4b28-8757-5cf32613eac8",
                "source": "node-4a72f653-f0f7-433a-8161-86dc05757e93",
                "target": "node-b2ca036d-8cc0-4415-9947-c21c4a006b25",
                "attrs": {
                    "line": {
                        "stroke": "#A2B1C3",
                        "targetMarker": {
                            "name": "block",
                            "width": 12,
                            "height": 8
                        },
                        "strokeDasharray": "5 5",
                        "strokeWidth": 1
                    }
                }
            },
            "sourcePort": "3678b1c4-e0ef-4b28-8757-5cf32613eac8",
            "targetPort": "dd1064e7-ae96-48c0-9c54-6ab2b65f12e5"
        },
        {
            "id": "node-5160bbbd-d720-42cb-a8ed-e49177a95d20:e2dc340d-6b0b-4c34-aebc-125ecb9ab9f2-node-4a72f653-f0f7-433a-8161-86dc05757e93:2519a1f3-4c15-470b-a1e3-dce1e345eee8",
            "targetPortId": "2519a1f3-4c15-470b-a1e3-dce1e345eee8",
            "sourcePortId": "e2dc340d-6b0b-4c34-aebc-125ecb9ab9f2",
            "source": {
                "cell": "node-5160bbbd-d720-42cb-a8ed-e49177a95d20",
                "port": "e2dc340d-6b0b-4c34-aebc-125ecb9ab9f2"
            },
            "target": {
                "cell": "node-4a72f653-f0f7-433a-8161-86dc05757e93",
                "port": "2519a1f3-4c15-470b-a1e3-dce1e345eee8"
            },
            "attrs": {
                "line": {
                    "stroke": "#A2B1C3",
                    "targetMarker": {
                        "name": "block",
                        "width": 12,
                        "height": 8
                    },
                    "strokeDasharray": "5 5",
                    "strokeWidth": 1
                }
            },
            "zIndex": 1,
            "data": {
                "targetPortId": "2519a1f3-4c15-470b-a1e3-dce1e345eee8",
                "sourcePortId": "e2dc340d-6b0b-4c34-aebc-125ecb9ab9f2",
                "source": "node-5160bbbd-d720-42cb-a8ed-e49177a95d20",
                "target": "node-4a72f653-f0f7-433a-8161-86dc05757e93",
                "attrs": {
                    "line": {
                        "stroke": "#A2B1C3",
                        "targetMarker": {
                            "name": "block",
                            "width": 12,
                            "height": 8
                        },
                        "strokeDasharray": "5 5",
                        "strokeWidth": 1
                    }
                }
            },
            "sourcePort": "e2dc340d-6b0b-4c34-aebc-125ecb9ab9f2",
            "targetPort": "2519a1f3-4c15-470b-a1e3-dce1e345eee8"
        },
        {
            "id": "node-4a72f653-f0f7-433a-8161-86dc05757e93:d4a9705b-8cd2-4152-bf47-4aa6af1864eb-node-9009c223-0bc5-4162-bdaf-d048c0566fcd:046b070c-c4c1-419b-b647-73c0f5e8cdf2",
            "targetPortId": "046b070c-c4c1-419b-b647-73c0f5e8cdf2",
            "sourcePortId": "d4a9705b-8cd2-4152-bf47-4aa6af1864eb",
            "source": {
                "cell": "node-4a72f653-f0f7-433a-8161-86dc05757e93",
                "port": "d4a9705b-8cd2-4152-bf47-4aa6af1864eb"
            },
            "target": {
                "cell": "node-9009c223-0bc5-4162-bdaf-d048c0566fcd",
                "port": "046b070c-c4c1-419b-b647-73c0f5e8cdf2"
            },
            "attrs": {
                "line": {
                    "stroke": "#A2B1C3",
                    "targetMarker": {
                        "name": "block",
                        "width": 12,
                        "height": 8
                    },
                    "strokeDasharray": "5 5",
                    "strokeWidth": 1
                }
            },
            "zIndex": 1,
            "data": {
                "targetPortId": "046b070c-c4c1-419b-b647-73c0f5e8cdf2",
                "sourcePortId": "d4a9705b-8cd2-4152-bf47-4aa6af1864eb",
                "source": "node-4a72f653-f0f7-433a-8161-86dc05757e93",
                "target": "node-9009c223-0bc5-4162-bdaf-d048c0566fcd",
                "attrs": {
                    "line": {
                        "stroke": "#A2B1C3",
                        "targetMarker": {
                            "name": "block",
                            "width": 12,
                            "height": 8
                        },
                        "strokeDasharray": "5 5",
                        "strokeWidth": 1
                    }
                }
            },
            "sourcePort": "d4a9705b-8cd2-4152-bf47-4aa6af1864eb",
            "targetPort": "046b070c-c4c1-419b-b647-73c0f5e8cdf2"
        },
        {
            "id": "node-b2ca036d-8cc0-4415-9947-c21c4a006b25:716848df-4b68-4385-8187-bb149b640f0b-node-d09f51c8-b635-4e83-bcdc-5f102f92e018:bbac3984-e540-4e6a-9778-de4fef8f117c",
            "targetPortId": "bbac3984-e540-4e6a-9778-de4fef8f117c",
            "sourcePortId": "716848df-4b68-4385-8187-bb149b640f0b",
            "source": {
                "cell": "node-b2ca036d-8cc0-4415-9947-c21c4a006b25",
                "port": "716848df-4b68-4385-8187-bb149b640f0b"
            },
            "target": {
                "cell": "node-d09f51c8-b635-4e83-bcdc-5f102f92e018",
                "port": "bbac3984-e540-4e6a-9778-de4fef8f117c"
            },
            "attrs": {
                "line": {
                    "stroke": "#A2B1C3",
                    "targetMarker": {
                        "name": "block",
                        "width": 12,
                        "height": 8
                    },
                    "strokeDasharray": "5 5",
                    "strokeWidth": 1,
                    "label": "是"
                },
                "text": {
                    "fontSize": 18
                }
            },
            "zIndex": 1,
            "data": {
                "targetPortId": "bbac3984-e540-4e6a-9778-de4fef8f117c",
                "sourcePortId": "716848df-4b68-4385-8187-bb149b640f0b",
                "source": "node-b2ca036d-8cc0-4415-9947-c21c4a006b25",
                "target": "node-d09f51c8-b635-4e83-bcdc-5f102f92e018",
                "attrs": {
                    "line": {
                        "stroke": "#A2B1C3",
                        "targetMarker": {
                            "name": "block",
                            "width": 12,
                            "height": 8
                        },
                        "strokeDasharray": "5 5",
                        "strokeWidth": 1
                    }
                }
            },
            "sourcePort": "716848df-4b68-4385-8187-bb149b640f0b",
            "targetPort": "bbac3984-e540-4e6a-9778-de4fef8f117c",
            "label": "是",
            "fontSize": 18
        },
        {
            "id": "node-c34e4a14-d014-456c-bcf3-67251212ce82:5581f842-9ebf-46c7-8e9c-fcbb32e4881e-node-125b649f-a496-4a5a-81ef-d37b5a36c2a9:ff554a0b-0932-47d5-8a0c-e44f0c6df853",
            "targetPortId": "ff554a0b-0932-47d5-8a0c-e44f0c6df853",
            "sourcePortId": "5581f842-9ebf-46c7-8e9c-fcbb32e4881e",
            "source": {
                "cell": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                "port": "5581f842-9ebf-46c7-8e9c-fcbb32e4881e"
            },
            "target": {
                "cell": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                "port": "ff554a0b-0932-47d5-8a0c-e44f0c6df853"
            },
            "attrs": {
                "line": {
                    "stroke": "#A2B1C3",
                    "targetMarker": {
                        "name": "block",
                        "width": 12,
                        "height": 8
                    },
                    "strokeDasharray": "5 5",
                    "strokeWidth": 1,
                    "label": "否"
                },
                "text": {
                    "fontSize": 18
                }
            },
            "zIndex": 1,
            "data": {
                "targetPortId": "ff554a0b-0932-47d5-8a0c-e44f0c6df853",
                "sourcePortId": "5581f842-9ebf-46c7-8e9c-fcbb32e4881e",
                "source": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                "target": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                "attrs": {
                    "line": {
                        "stroke": "#A2B1C3",
                        "targetMarker": {
                            "name": "block",
                            "width": 12,
                            "height": 8
                        },
                        "strokeDasharray": "5 5",
                        "strokeWidth": 1
                    }
                }
            },
            "sourcePort": "5581f842-9ebf-46c7-8e9c-fcbb32e4881e",
            "targetPort": "ff554a0b-0932-47d5-8a0c-e44f0c6df853",
            "label": "否",
            "fontSize": 18
        },
        {
            "id": "node-6a62bba8-c258-4c77-8c0b-38580873f617:d7dd1ef0-a5f8-4d3b-be7a-c1493d914eda-node-17f391ea-aaa1-4a27-b6cc-1e7299afedac:625a203d-7e28-4782-902e-72c7c4edb208",
            "targetPortId": "625a203d-7e28-4782-902e-72c7c4edb208",
            "sourcePortId": "d7dd1ef0-a5f8-4d3b-be7a-c1493d914eda",
            "source": {
                "cell": "node-6a62bba8-c258-4c77-8c0b-38580873f617",
                "port": "d7dd1ef0-a5f8-4d3b-be7a-c1493d914eda"
            },
            "target": {
                "cell": "node-17f391ea-aaa1-4a27-b6cc-1e7299afedac",
                "port": "625a203d-7e28-4782-902e-72c7c4edb208"
            },
            "attrs": {
                "line": {
                    "stroke": "#A2B1C3",
                    "targetMarker": {
                        "name": "block",
                        "width": 12,
                        "height": 8
                    },
                    "strokeDasharray": "5 5",
                    "strokeWidth": 1
                }
            },
            "zIndex": 1,
            "data": {
                "targetPortId": "625a203d-7e28-4782-902e-72c7c4edb208",
                "sourcePortId": "d7dd1ef0-a5f8-4d3b-be7a-c1493d914eda",
                "source": "node-6a62bba8-c258-4c77-8c0b-38580873f617",
                "target": "node-17f391ea-aaa1-4a27-b6cc-1e7299afedac",
                "attrs": {
                    "line": {
                        "stroke": "#A2B1C3",
                        "targetMarker": {
                            "name": "block",
                            "width": 12,
                            "height": 8
                        },
                        "strokeDasharray": "5 5",
                        "strokeWidth": 1
                    }
                }
            },
            "sourcePort": "d7dd1ef0-a5f8-4d3b-be7a-c1493d914eda",
            "targetPort": "625a203d-7e28-4782-902e-72c7c4edb208"
        },
        {
            "id": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:d13540af-5af8-47b4-9162-af58bf95c4e0-node-17f391ea-aaa1-4a27-b6cc-1e7299afedac:99186481-7369-48ca-836f-1ca776e432d9",
            "targetPortId": "99186481-7369-48ca-836f-1ca776e432d9",
            "sourcePortId": "d13540af-5af8-47b4-9162-af58bf95c4e0",
            "source": {
                "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                "port": "d13540af-5af8-47b4-9162-af58bf95c4e0"
            },
            "target": {
                "cell": "node-17f391ea-aaa1-4a27-b6cc-1e7299afedac",
                "port": "99186481-7369-48ca-836f-1ca776e432d9"
            },
            "attrs": {
                "line": {
                    "stroke": "#A2B1C3",
                    "targetMarker": {
                        "name": "block",
                        "width": 12,
                        "height": 8
                    },
                    "strokeDasharray": "5 5",
                    "strokeWidth": 1
                }
            },
            "zIndex": 1,
            "data": {
                "targetPortId": "99186481-7369-48ca-836f-1ca776e432d9",
                "sourcePortId": "d13540af-5af8-47b4-9162-af58bf95c4e0",
                "source": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                "target": "node-17f391ea-aaa1-4a27-b6cc-1e7299afedac",
                "attrs": {
                    "line": {
                        "stroke": "#A2B1C3",
                        "targetMarker": {
                            "name": "block",
                            "width": 12,
                            "height": 8
                        },
                        "strokeDasharray": "5 5",
                        "strokeWidth": 1
                    }
                }
            },
            "sourcePort": "d13540af-5af8-47b4-9162-af58bf95c4e0",
            "targetPort": "99186481-7369-48ca-836f-1ca776e432d9"
        }
    ]
  }
}

export function getFlowDate2() {
    return {
        "nodes": [
            {
                "id": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                "renderKey": "JudgmentNode",
                "name": "JudgmentNode",
                "label": "初步询价",
                "width": 180,
                "height": 60,
                "ports": {
                    "items": [
                        {
                            "group": "top",
                            "id": "b79e9d70-eabb-428f-9bd0-0f424154699c"
                        },
                        {
                            "group": "right",
                            "id": "df376f96-eb62-4fc4-a27d-60ba2f46d87a"
                        },
                        {
                            "group": "bottom",
                            "id": "0eda0ed5-08fa-4441-9e98-510c6408be82"
                        },
                        {
                            "group": "left",
                            "id": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5"
                        }
                    ],
                    "groups": {
                        "top": {
                            "position": {
                                "name": "top"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        },
                        "right": {
                            "position": {
                                "name": "right"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        },
                        "bottom": {
                            "position": {
                                "name": "bottom"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        },
                        "left": {
                            "position": {
                                "name": "left"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        }
                    }
                },
                "originData": {
                    "component": {
                        "compare": null
                    },
                    "name": "JudgmentNode",
                    "width": 180,
                    "height": 60,
                    "label": "自定义判断节点"
                },
                "isCustom": true,
                "x": 790,
                "y": 487,
                "zIndex": 10,
                "incomingEdges": [
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "strokeWidth": 1,
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": [
                                    0,
                                    0
                                ]
                            }
                        },
                        "id": "node-9019f473-62dd-4a56-8e51-43cf85e0dc54:9ddbb5ce-e63e-4bbf-8ba3-10bb3635a0ea-node-5c5e445a-f775-4d1b-8a55-554efccfd476:314f73e8-5ea1-4265-aaac-3f5a20fdbbb5",
                        "targetPortId": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5",
                        "sourcePortId": "9ddbb5ce-e63e-4bbf-8ba3-10bb3635a0ea",
                        "zIndex": 1,
                        "data": {
                            "id": "node-9019f473-62dd-4a56-8e51-43cf85e0dc54:9ddbb5ce-e63e-4bbf-8ba3-10bb3635a0ea-node-5c5e445a-f775-4d1b-8a55-554efccfd476:314f73e8-5ea1-4265-aaac-3f5a20fdbbb5",
                            "targetPortId": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5",
                            "sourcePortId": "9ddbb5ce-e63e-4bbf-8ba3-10bb3635a0ea",
                            "source": {
                                "cell": "node-9019f473-62dd-4a56-8e51-43cf85e0dc54",
                                "port": "9ddbb5ce-e63e-4bbf-8ba3-10bb3635a0ea"
                            },
                            "target": {
                                "cell": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                                "port": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": [
                                        0,
                                        0
                                    ],
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5",
                                "sourcePortId": "9ddbb5ce-e63e-4bbf-8ba3-10bb3635a0ea",
                                "source": "node-9019f473-62dd-4a56-8e51-43cf85e0dc54",
                                "target": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "sourcePort": "9ddbb5ce-e63e-4bbf-8ba3-10bb3635a0ea",
                            "targetPort": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5",
                            "strokeDasharray": [
                                0,
                                0
                            ]
                        },
                        "source": {
                            "cell": "node-9019f473-62dd-4a56-8e51-43cf85e0dc54",
                            "port": "9ddbb5ce-e63e-4bbf-8ba3-10bb3635a0ea"
                        },
                        "target": {
                            "cell": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                            "port": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5"
                        },
                        "labels": [
                            {
                                "targetPortId": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5",
                                "sourcePortId": "9ddbb5ce-e63e-4bbf-8ba3-10bb3635a0ea",
                                "source": {
                                    "cell": "node-9019f473-62dd-4a56-8e51-43cf85e0dc54",
                                    "port": "9ddbb5ce-e63e-4bbf-8ba3-10bb3635a0ea"
                                },
                                "target": {
                                    "cell": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                                    "port": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5"
                                },
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                },
                                "zIndex": 1,
                                "data": {
                                    "targetPortId": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5",
                                    "sourcePortId": "9ddbb5ce-e63e-4bbf-8ba3-10bb3635a0ea",
                                    "source": "node-9019f473-62dd-4a56-8e51-43cf85e0dc54",
                                    "target": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                                    "attrs": {
                                        "line": {
                                            "stroke": "#A2B1C3",
                                            "targetMarker": {
                                                "name": "block",
                                                "width": 12,
                                                "height": 8
                                            },
                                            "strokeDasharray": "5 5",
                                            "strokeWidth": 1
                                        }
                                    }
                                },
                                "id": "node-9019f473-62dd-4a56-8e51-43cf85e0dc54:9ddbb5ce-e63e-4bbf-8ba3-10bb3635a0ea-node-5c5e445a-f775-4d1b-8a55-554efccfd476:314f73e8-5ea1-4265-aaac-3f5a20fdbbb5",
                                "sourcePort": "9ddbb5ce-e63e-4bbf-8ba3-10bb3635a0ea",
                                "targetPort": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5"
                            }
                        ]
                    }
                ],
                "outgoingEdges": [
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "strokeWidth": 1,
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": [
                                    0,
                                    0
                                ]
                            }
                        },
                        "id": "node-5c5e445a-f775-4d1b-8a55-554efccfd476:b79e9d70-eabb-428f-9bd0-0f424154699c-node-39207817-50a6-4ddd-abcd-30829227705c:bdcbf8cc-3b74-4140-8d59-809f190719e3",
                        "targetPortId": "bdcbf8cc-3b74-4140-8d59-809f190719e3",
                        "sourcePortId": "b79e9d70-eabb-428f-9bd0-0f424154699c",
                        "zIndex": 1,
                        "data": {
                            "id": "node-5c5e445a-f775-4d1b-8a55-554efccfd476:b79e9d70-eabb-428f-9bd0-0f424154699c-node-39207817-50a6-4ddd-abcd-30829227705c:bdcbf8cc-3b74-4140-8d59-809f190719e3",
                            "targetPortId": "bdcbf8cc-3b74-4140-8d59-809f190719e3",
                            "sourcePortId": "b79e9d70-eabb-428f-9bd0-0f424154699c",
                            "source": {
                                "cell": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                                "port": "b79e9d70-eabb-428f-9bd0-0f424154699c"
                            },
                            "target": {
                                "cell": "node-39207817-50a6-4ddd-abcd-30829227705c",
                                "port": "bdcbf8cc-3b74-4140-8d59-809f190719e3"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": [
                                        0,
                                        0
                                    ],
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "bdcbf8cc-3b74-4140-8d59-809f190719e3",
                                "sourcePortId": "b79e9d70-eabb-428f-9bd0-0f424154699c",
                                "source": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                                "target": "node-39207817-50a6-4ddd-abcd-30829227705c",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "sourcePort": "b79e9d70-eabb-428f-9bd0-0f424154699c",
                            "targetPort": "bdcbf8cc-3b74-4140-8d59-809f190719e3",
                            "strokeDasharray": [
                                0,
                                0
                            ]
                        },
                        "strokeDasharray": [
                            0,
                            0
                        ],
                        "source": {
                            "cell": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                            "port": "b79e9d70-eabb-428f-9bd0-0f424154699c"
                        },
                        "target": {
                            "cell": "node-39207817-50a6-4ddd-abcd-30829227705c",
                            "port": "bdcbf8cc-3b74-4140-8d59-809f190719e3"
                        },
                        "labels": [
                            {
                                "id": "node-5c5e445a-f775-4d1b-8a55-554efccfd476:b79e9d70-eabb-428f-9bd0-0f424154699c-node-39207817-50a6-4ddd-abcd-30829227705c:bdcbf8cc-3b74-4140-8d59-809f190719e3",
                                "targetPortId": "bdcbf8cc-3b74-4140-8d59-809f190719e3",
                                "sourcePortId": "b79e9d70-eabb-428f-9bd0-0f424154699c",
                                "source": {
                                    "cell": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                                    "port": "b79e9d70-eabb-428f-9bd0-0f424154699c"
                                },
                                "target": {
                                    "cell": "node-39207817-50a6-4ddd-abcd-30829227705c",
                                    "port": "bdcbf8cc-3b74-4140-8d59-809f190719e3"
                                },
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": [
                                            0,
                                            0
                                        ],
                                        "strokeWidth": 1
                                    }
                                },
                                "zIndex": 1,
                                "data": {
                                    "targetPortId": "bdcbf8cc-3b74-4140-8d59-809f190719e3",
                                    "sourcePortId": "b79e9d70-eabb-428f-9bd0-0f424154699c",
                                    "source": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                                    "target": "node-39207817-50a6-4ddd-abcd-30829227705c",
                                    "attrs": {
                                        "line": {
                                            "stroke": "#A2B1C3",
                                            "targetMarker": {
                                                "name": "block",
                                                "width": 12,
                                                "height": 8
                                            },
                                            "strokeDasharray": "5 5",
                                            "strokeWidth": 1
                                        }
                                    }
                                },
                                "sourcePort": "b79e9d70-eabb-428f-9bd0-0f424154699c",
                                "targetPort": "bdcbf8cc-3b74-4140-8d59-809f190719e3",
                                "strokeDasharray": [
                                    0,
                                    0
                                ]
                            }
                        ]
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "strokeWidth": 1,
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": [
                                    0,
                                    0
                                ]
                            }
                        },
                        "id": "node-5c5e445a-f775-4d1b-8a55-554efccfd476:0eda0ed5-08fa-4441-9e98-510c6408be82-node-125b649f-a496-4a5a-81ef-d37b5a36c2a9:283352b4-41ef-43a9-b0b0-6529e3b67e9b",
                        "targetPortId": "283352b4-41ef-43a9-b0b0-6529e3b67e9b",
                        "sourcePortId": "0eda0ed5-08fa-4441-9e98-510c6408be82",
                        "zIndex": 1,
                        "data": {
                            "id": "node-5c5e445a-f775-4d1b-8a55-554efccfd476:0eda0ed5-08fa-4441-9e98-510c6408be82-node-125b649f-a496-4a5a-81ef-d37b5a36c2a9:283352b4-41ef-43a9-b0b0-6529e3b67e9b",
                            "targetPortId": "283352b4-41ef-43a9-b0b0-6529e3b67e9b",
                            "sourcePortId": "0eda0ed5-08fa-4441-9e98-510c6408be82",
                            "source": {
                                "cell": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                                "port": "0eda0ed5-08fa-4441-9e98-510c6408be82"
                            },
                            "target": {
                                "cell": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                                "port": "283352b4-41ef-43a9-b0b0-6529e3b67e9b"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": [
                                        0,
                                        0
                                    ],
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "283352b4-41ef-43a9-b0b0-6529e3b67e9b",
                                "sourcePortId": "0eda0ed5-08fa-4441-9e98-510c6408be82",
                                "source": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                                "target": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "sourcePort": "0eda0ed5-08fa-4441-9e98-510c6408be82",
                            "targetPort": "283352b4-41ef-43a9-b0b0-6529e3b67e9b",
                            "strokeDasharray": [
                                0,
                                0
                            ]
                        },
                        "strokeDasharray": [
                            0,
                            0
                        ],
                        "source": {
                            "cell": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                            "port": "0eda0ed5-08fa-4441-9e98-510c6408be82"
                        },
                        "target": {
                            "cell": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                            "port": "283352b4-41ef-43a9-b0b0-6529e3b67e9b"
                        },
                        "labels": [
                            {
                                "id": "node-5c5e445a-f775-4d1b-8a55-554efccfd476:0eda0ed5-08fa-4441-9e98-510c6408be82-node-125b649f-a496-4a5a-81ef-d37b5a36c2a9:283352b4-41ef-43a9-b0b0-6529e3b67e9b",
                                "targetPortId": "283352b4-41ef-43a9-b0b0-6529e3b67e9b",
                                "sourcePortId": "0eda0ed5-08fa-4441-9e98-510c6408be82",
                                "source": {
                                    "cell": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                                    "port": "0eda0ed5-08fa-4441-9e98-510c6408be82"
                                },
                                "target": {
                                    "cell": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                                    "port": "283352b4-41ef-43a9-b0b0-6529e3b67e9b"
                                },
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": [
                                            0,
                                            0
                                        ],
                                        "strokeWidth": 1
                                    }
                                },
                                "zIndex": 1,
                                "data": {
                                    "targetPortId": "283352b4-41ef-43a9-b0b0-6529e3b67e9b",
                                    "sourcePortId": "0eda0ed5-08fa-4441-9e98-510c6408be82",
                                    "source": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                                    "target": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                                    "attrs": {
                                        "line": {
                                            "stroke": "#A2B1C3",
                                            "targetMarker": {
                                                "name": "block",
                                                "width": 12,
                                                "height": 8
                                            },
                                            "strokeDasharray": "5 5",
                                            "strokeWidth": 1
                                        }
                                    }
                                },
                                "sourcePort": "0eda0ed5-08fa-4441-9e98-510c6408be82",
                                "targetPort": "283352b4-41ef-43a9-b0b0-6529e3b67e9b",
                                "strokeDasharray": [
                                    0,
                                    0
                                ]
                            }
                        ]
                    }
                ],
                "stroke": "#096dd9",
                "fontSize": 18,
                "fill": "#1890ff",
                "fontFill": "#fff",
                "data": {
                    "statue": "RUNNING",
                    "info": {}
                }
            },
            {
                "id": "node-39207817-50a6-4ddd-abcd-30829227705c",
                "renderKey": "ProcessNode",
                "name": "ProcessNode",
                "label": "出性价比策略",
                "width": 180,
                "height": 60,
                "ports": {
                    "items": [
                        {
                            "group": "top",
                            "id": "14cc87ad-3be8-4693-8b53-38e6ea6ceac9"
                        },
                        {
                            "group": "right",
                            "id": "d460e613-a8fe-4053-9698-d8b3040c9b74"
                        },
                        {
                            "group": "bottom",
                            "id": "e809c21e-daed-451e-ad68-2acf71e91a66"
                        },
                        {
                            "group": "left",
                            "id": "bdcbf8cc-3b74-4140-8d59-809f190719e3"
                        }
                    ],
                    "groups": {
                        "top": {
                            "position": {
                                "name": "top"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        },
                        "right": {
                            "position": {
                                "name": "right"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        },
                        "bottom": {
                            "position": {
                                "name": "bottom"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        },
                        "left": {
                            "position": {
                                "name": "left"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        }
                    }
                },
                "originData": {
                    "name": "ProcessNode",
                    "width": 180,
                    "height": 60,
                    "label": "自定义步骤节点"
                },
                "isCustom": true,
                "x": 1090,
                "y": 330,
                "zIndex": 10,
                "incomingEdges": [
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "strokeWidth": 1,
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": [
                                    0,
                                    0
                                ]
                            }
                        },
                        "id": "node-5c5e445a-f775-4d1b-8a55-554efccfd476:b79e9d70-eabb-428f-9bd0-0f424154699c-node-39207817-50a6-4ddd-abcd-30829227705c:bdcbf8cc-3b74-4140-8d59-809f190719e3",
                        "targetPortId": "bdcbf8cc-3b74-4140-8d59-809f190719e3",
                        "sourcePortId": "b79e9d70-eabb-428f-9bd0-0f424154699c",
                        "zIndex": 1,
                        "data": {
                            "id": "node-5c5e445a-f775-4d1b-8a55-554efccfd476:b79e9d70-eabb-428f-9bd0-0f424154699c-node-39207817-50a6-4ddd-abcd-30829227705c:bdcbf8cc-3b74-4140-8d59-809f190719e3",
                            "targetPortId": "bdcbf8cc-3b74-4140-8d59-809f190719e3",
                            "sourcePortId": "b79e9d70-eabb-428f-9bd0-0f424154699c",
                            "source": {
                                "cell": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                                "port": "b79e9d70-eabb-428f-9bd0-0f424154699c"
                            },
                            "target": {
                                "cell": "node-39207817-50a6-4ddd-abcd-30829227705c",
                                "port": "bdcbf8cc-3b74-4140-8d59-809f190719e3"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": [
                                        0,
                                        0
                                    ],
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "bdcbf8cc-3b74-4140-8d59-809f190719e3",
                                "sourcePortId": "b79e9d70-eabb-428f-9bd0-0f424154699c",
                                "source": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                                "target": "node-39207817-50a6-4ddd-abcd-30829227705c",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "sourcePort": "b79e9d70-eabb-428f-9bd0-0f424154699c",
                            "targetPort": "bdcbf8cc-3b74-4140-8d59-809f190719e3",
                            "strokeDasharray": [
                                0,
                                0
                            ]
                        },
                        "strokeDasharray": [
                            0,
                            0
                        ],
                        "source": {
                            "cell": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                            "port": "b79e9d70-eabb-428f-9bd0-0f424154699c"
                        },
                        "target": {
                            "cell": "node-39207817-50a6-4ddd-abcd-30829227705c",
                            "port": "bdcbf8cc-3b74-4140-8d59-809f190719e3"
                        },
                        "labels": [
                            {
                                "id": "node-5c5e445a-f775-4d1b-8a55-554efccfd476:b79e9d70-eabb-428f-9bd0-0f424154699c-node-39207817-50a6-4ddd-abcd-30829227705c:bdcbf8cc-3b74-4140-8d59-809f190719e3",
                                "targetPortId": "bdcbf8cc-3b74-4140-8d59-809f190719e3",
                                "sourcePortId": "b79e9d70-eabb-428f-9bd0-0f424154699c",
                                "source": {
                                    "cell": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                                    "port": "b79e9d70-eabb-428f-9bd0-0f424154699c"
                                },
                                "target": {
                                    "cell": "node-39207817-50a6-4ddd-abcd-30829227705c",
                                    "port": "bdcbf8cc-3b74-4140-8d59-809f190719e3"
                                },
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": [
                                            0,
                                            0
                                        ],
                                        "strokeWidth": 1
                                    }
                                },
                                "zIndex": 1,
                                "data": {
                                    "targetPortId": "bdcbf8cc-3b74-4140-8d59-809f190719e3",
                                    "sourcePortId": "b79e9d70-eabb-428f-9bd0-0f424154699c",
                                    "source": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                                    "target": "node-39207817-50a6-4ddd-abcd-30829227705c",
                                    "attrs": {
                                        "line": {
                                            "stroke": "#A2B1C3",
                                            "targetMarker": {
                                                "name": "block",
                                                "width": 12,
                                                "height": 8
                                            },
                                            "strokeDasharray": "5 5",
                                            "strokeWidth": 1
                                        }
                                    }
                                },
                                "sourcePort": "b79e9d70-eabb-428f-9bd0-0f424154699c",
                                "targetPort": "bdcbf8cc-3b74-4140-8d59-809f190719e3",
                                "strokeDasharray": [
                                    0,
                                    0
                                ]
                            }
                        ]
                    }
                ],
                "outgoingEdges": [
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "strokeWidth": 1,
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5"
                            }
                        },
                        "id": "node-39207817-50a6-4ddd-abcd-30829227705c:d460e613-a8fe-4053-9698-d8b3040c9b74-node-c34e4a14-d014-456c-bcf3-67251212ce82:db2cdff6-f584-4bb9-8a8b-84d153951b17",
                        "targetPortId": "db2cdff6-f584-4bb9-8a8b-84d153951b17",
                        "sourcePortId": "d460e613-a8fe-4053-9698-d8b3040c9b74",
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "db2cdff6-f584-4bb9-8a8b-84d153951b17",
                            "sourcePortId": "d460e613-a8fe-4053-9698-d8b3040c9b74",
                            "source": {
                                "cell": "node-39207817-50a6-4ddd-abcd-30829227705c",
                                "port": "d460e613-a8fe-4053-9698-d8b3040c9b74"
                            },
                            "target": {
                                "cell": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                                "port": "db2cdff6-f584-4bb9-8a8b-84d153951b17"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "db2cdff6-f584-4bb9-8a8b-84d153951b17",
                                "sourcePortId": "d460e613-a8fe-4053-9698-d8b3040c9b74",
                                "source": "node-39207817-50a6-4ddd-abcd-30829227705c",
                                "target": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-39207817-50a6-4ddd-abcd-30829227705c:d460e613-a8fe-4053-9698-d8b3040c9b74-node-c34e4a14-d014-456c-bcf3-67251212ce82:db2cdff6-f584-4bb9-8a8b-84d153951b17",
                            "sourcePort": "d460e613-a8fe-4053-9698-d8b3040c9b74",
                            "targetPort": "db2cdff6-f584-4bb9-8a8b-84d153951b17"
                        },
                        "source": {
                            "cell": "node-39207817-50a6-4ddd-abcd-30829227705c",
                            "port": "d460e613-a8fe-4053-9698-d8b3040c9b74"
                        },
                        "target": {
                            "cell": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                            "port": "db2cdff6-f584-4bb9-8a8b-84d153951b17"
                        },
                        "labels": [
                            {
                                "targetPortId": "db2cdff6-f584-4bb9-8a8b-84d153951b17",
                                "sourcePortId": "d460e613-a8fe-4053-9698-d8b3040c9b74",
                                "source": {
                                    "cell": "node-39207817-50a6-4ddd-abcd-30829227705c",
                                    "port": "d460e613-a8fe-4053-9698-d8b3040c9b74"
                                },
                                "target": {
                                    "cell": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                                    "port": "db2cdff6-f584-4bb9-8a8b-84d153951b17"
                                },
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                },
                                "zIndex": 1,
                                "data": {
                                    "targetPortId": "db2cdff6-f584-4bb9-8a8b-84d153951b17",
                                    "sourcePortId": "d460e613-a8fe-4053-9698-d8b3040c9b74",
                                    "source": "node-39207817-50a6-4ddd-abcd-30829227705c",
                                    "target": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                                    "attrs": {
                                        "line": {
                                            "stroke": "#A2B1C3",
                                            "targetMarker": {
                                                "name": "block",
                                                "width": 12,
                                                "height": 8
                                            },
                                            "strokeDasharray": "5 5",
                                            "strokeWidth": 1
                                        }
                                    }
                                },
                                "id": "node-39207817-50a6-4ddd-abcd-30829227705c:d460e613-a8fe-4053-9698-d8b3040c9b74-node-c34e4a14-d014-456c-bcf3-67251212ce82:db2cdff6-f584-4bb9-8a8b-84d153951b17",
                                "sourcePort": "d460e613-a8fe-4053-9698-d8b3040c9b74",
                                "targetPort": "db2cdff6-f584-4bb9-8a8b-84d153951b17"
                            }
                        ]
                    }
                ],
                "fontSize": 18,
                "stroke": "#7ed321"
            },
            {
                "id": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                "renderKey": "ProcessNode",
                "name": "ProcessNode",
                "label": "设计款式",
                "width": 180,
                "height": 60,
                "ports": {
                    "items": [
                        {
                            "group": "top",
                            "id": "afbff0aa-f7c3-4471-a5e9-329ec5d2bab0"
                        },
                        {
                            "group": "right",
                            "id": "07b4d995-8490-46d8-8cae-238bb39e2ea6"
                        },
                        {
                            "group": "bottom",
                            "id": "ff554a0b-0932-47d5-8a0c-e44f0c6df853"
                        },
                        {
                            "group": "left",
                            "id": "283352b4-41ef-43a9-b0b0-6529e3b67e9b"
                        }
                    ],
                    "groups": {
                        "top": {
                            "position": {
                                "name": "top"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        },
                        "right": {
                            "position": {
                                "name": "right"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        },
                        "bottom": {
                            "position": {
                                "name": "bottom"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        },
                        "left": {
                            "position": {
                                "name": "left"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        }
                    }
                },
                "originData": {
                    "name": "ProcessNode",
                    "width": 180,
                    "height": 60,
                    "label": "自定义步骤节点"
                },
                "isCustom": true,
                "x": 1080,
                "y": 580,
                "zIndex": 10,
                "incomingEdges": [
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "strokeWidth": 1,
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "label": "否"
                            },
                            "text": {
                                "fontSize": 18
                            }
                        },
                        "id": "node-c34e4a14-d014-456c-bcf3-67251212ce82:5581f842-9ebf-46c7-8e9c-fcbb32e4881e-node-125b649f-a496-4a5a-81ef-d37b5a36c2a9:ff554a0b-0932-47d5-8a0c-e44f0c6df853",
                        "targetPortId": "ff554a0b-0932-47d5-8a0c-e44f0c6df853",
                        "sourcePortId": "5581f842-9ebf-46c7-8e9c-fcbb32e4881e",
                        "zIndex": 1,
                        "data": {
                            "id": "node-c34e4a14-d014-456c-bcf3-67251212ce82:5581f842-9ebf-46c7-8e9c-fcbb32e4881e-node-125b649f-a496-4a5a-81ef-d37b5a36c2a9:ff554a0b-0932-47d5-8a0c-e44f0c6df853",
                            "targetPortId": "ff554a0b-0932-47d5-8a0c-e44f0c6df853",
                            "sourcePortId": "5581f842-9ebf-46c7-8e9c-fcbb32e4881e",
                            "source": {
                                "cell": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                                "port": "5581f842-9ebf-46c7-8e9c-fcbb32e4881e"
                            },
                            "target": {
                                "cell": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                                "port": "ff554a0b-0932-47d5-8a0c-e44f0c6df853"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1,
                                    "label": "否"
                                },
                                "text": {
                                    "fontSize": 18
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "ff554a0b-0932-47d5-8a0c-e44f0c6df853",
                                "sourcePortId": "5581f842-9ebf-46c7-8e9c-fcbb32e4881e",
                                "source": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                                "target": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "sourcePort": "5581f842-9ebf-46c7-8e9c-fcbb32e4881e",
                            "targetPort": "ff554a0b-0932-47d5-8a0c-e44f0c6df853",
                            "label": "否",
                            "fontSize": 18
                        },
                        "fontSize": 18,
                        "source": {
                            "cell": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                            "port": "5581f842-9ebf-46c7-8e9c-fcbb32e4881e"
                        },
                        "target": {
                            "cell": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                            "port": "ff554a0b-0932-47d5-8a0c-e44f0c6df853"
                        },
                        "labels": [
                            {
                                "attrs": {
                                    "label": {
                                        "text": "否"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "strokeWidth": 1,
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": [
                                    0,
                                    0
                                ]
                            }
                        },
                        "id": "node-5c5e445a-f775-4d1b-8a55-554efccfd476:0eda0ed5-08fa-4441-9e98-510c6408be82-node-125b649f-a496-4a5a-81ef-d37b5a36c2a9:283352b4-41ef-43a9-b0b0-6529e3b67e9b",
                        "targetPortId": "283352b4-41ef-43a9-b0b0-6529e3b67e9b",
                        "sourcePortId": "0eda0ed5-08fa-4441-9e98-510c6408be82",
                        "zIndex": 1,
                        "data": {
                            "id": "node-5c5e445a-f775-4d1b-8a55-554efccfd476:0eda0ed5-08fa-4441-9e98-510c6408be82-node-125b649f-a496-4a5a-81ef-d37b5a36c2a9:283352b4-41ef-43a9-b0b0-6529e3b67e9b",
                            "targetPortId": "283352b4-41ef-43a9-b0b0-6529e3b67e9b",
                            "sourcePortId": "0eda0ed5-08fa-4441-9e98-510c6408be82",
                            "source": {
                                "cell": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                                "port": "0eda0ed5-08fa-4441-9e98-510c6408be82"
                            },
                            "target": {
                                "cell": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                                "port": "283352b4-41ef-43a9-b0b0-6529e3b67e9b"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": [
                                        0,
                                        0
                                    ],
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "283352b4-41ef-43a9-b0b0-6529e3b67e9b",
                                "sourcePortId": "0eda0ed5-08fa-4441-9e98-510c6408be82",
                                "source": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                                "target": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "sourcePort": "0eda0ed5-08fa-4441-9e98-510c6408be82",
                            "targetPort": "283352b4-41ef-43a9-b0b0-6529e3b67e9b",
                            "strokeDasharray": [
                                0,
                                0
                            ]
                        },
                        "strokeDasharray": [
                            0,
                            0
                        ],
                        "source": {
                            "cell": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                            "port": "0eda0ed5-08fa-4441-9e98-510c6408be82"
                        },
                        "target": {
                            "cell": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                            "port": "283352b4-41ef-43a9-b0b0-6529e3b67e9b"
                        },
                        "labels": [
                            {
                                "id": "node-5c5e445a-f775-4d1b-8a55-554efccfd476:0eda0ed5-08fa-4441-9e98-510c6408be82-node-125b649f-a496-4a5a-81ef-d37b5a36c2a9:283352b4-41ef-43a9-b0b0-6529e3b67e9b",
                                "targetPortId": "283352b4-41ef-43a9-b0b0-6529e3b67e9b",
                                "sourcePortId": "0eda0ed5-08fa-4441-9e98-510c6408be82",
                                "source": {
                                    "cell": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                                    "port": "0eda0ed5-08fa-4441-9e98-510c6408be82"
                                },
                                "target": {
                                    "cell": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                                    "port": "283352b4-41ef-43a9-b0b0-6529e3b67e9b"
                                },
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": [
                                            0,
                                            0
                                        ],
                                        "strokeWidth": 1
                                    }
                                },
                                "zIndex": 1,
                                "data": {
                                    "targetPortId": "283352b4-41ef-43a9-b0b0-6529e3b67e9b",
                                    "sourcePortId": "0eda0ed5-08fa-4441-9e98-510c6408be82",
                                    "source": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                                    "target": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                                    "attrs": {
                                        "line": {
                                            "stroke": "#A2B1C3",
                                            "targetMarker": {
                                                "name": "block",
                                                "width": 12,
                                                "height": 8
                                            },
                                            "strokeDasharray": "5 5",
                                            "strokeWidth": 1
                                        }
                                    }
                                },
                                "sourcePort": "0eda0ed5-08fa-4441-9e98-510c6408be82",
                                "targetPort": "283352b4-41ef-43a9-b0b0-6529e3b67e9b",
                                "strokeDasharray": [
                                    0,
                                    0
                                ]
                            }
                        ]
                    }
                ],
                "outgoingEdges": [
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "strokeWidth": 1,
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5"
                            }
                        },
                        "id": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9:afbff0aa-f7c3-4471-a5e9-329ec5d2bab0-node-c34e4a14-d014-456c-bcf3-67251212ce82:9751fb89-7e25-4aa4-8eaf-7db41d695da9",
                        "targetPortId": "9751fb89-7e25-4aa4-8eaf-7db41d695da9",
                        "sourcePortId": "afbff0aa-f7c3-4471-a5e9-329ec5d2bab0",
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "9751fb89-7e25-4aa4-8eaf-7db41d695da9",
                            "sourcePortId": "afbff0aa-f7c3-4471-a5e9-329ec5d2bab0",
                            "source": {
                                "cell": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                                "port": "afbff0aa-f7c3-4471-a5e9-329ec5d2bab0"
                            },
                            "target": {
                                "cell": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                                "port": "9751fb89-7e25-4aa4-8eaf-7db41d695da9"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "9751fb89-7e25-4aa4-8eaf-7db41d695da9",
                                "sourcePortId": "afbff0aa-f7c3-4471-a5e9-329ec5d2bab0",
                                "source": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                                "target": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9:afbff0aa-f7c3-4471-a5e9-329ec5d2bab0-node-c34e4a14-d014-456c-bcf3-67251212ce82:9751fb89-7e25-4aa4-8eaf-7db41d695da9",
                            "sourcePort": "afbff0aa-f7c3-4471-a5e9-329ec5d2bab0",
                            "targetPort": "9751fb89-7e25-4aa4-8eaf-7db41d695da9"
                        },
                        "source": {
                            "cell": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                            "port": "afbff0aa-f7c3-4471-a5e9-329ec5d2bab0"
                        },
                        "target": {
                            "cell": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                            "port": "9751fb89-7e25-4aa4-8eaf-7db41d695da9"
                        },
                        "labels": [
                            {
                                "targetPortId": "9751fb89-7e25-4aa4-8eaf-7db41d695da9",
                                "sourcePortId": "afbff0aa-f7c3-4471-a5e9-329ec5d2bab0",
                                "source": {
                                    "cell": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                                    "port": "afbff0aa-f7c3-4471-a5e9-329ec5d2bab0"
                                },
                                "target": {
                                    "cell": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                                    "port": "9751fb89-7e25-4aa4-8eaf-7db41d695da9"
                                },
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                },
                                "zIndex": 1,
                                "data": {
                                    "targetPortId": "9751fb89-7e25-4aa4-8eaf-7db41d695da9",
                                    "sourcePortId": "afbff0aa-f7c3-4471-a5e9-329ec5d2bab0",
                                    "source": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                                    "target": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                                    "attrs": {
                                        "line": {
                                            "stroke": "#A2B1C3",
                                            "targetMarker": {
                                                "name": "block",
                                                "width": 12,
                                                "height": 8
                                            },
                                            "strokeDasharray": "5 5",
                                            "strokeWidth": 1
                                        }
                                    }
                                },
                                "id": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9:afbff0aa-f7c3-4471-a5e9-329ec5d2bab0-node-c34e4a14-d014-456c-bcf3-67251212ce82:9751fb89-7e25-4aa4-8eaf-7db41d695da9",
                                "sourcePort": "afbff0aa-f7c3-4471-a5e9-329ec5d2bab0",
                                "targetPort": "9751fb89-7e25-4aa4-8eaf-7db41d695da9"
                            }
                        ]
                    }
                ],
                "fontSize": 18,
                "stroke": "#7ed321"
            },
            {
                "id": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                "renderKey": "JudgmentNode",
                "name": "JudgmentNode",
                "label": "产品讨论会",
                "width": 180,
                "height": 60,
                "ports": {
                    "items": [
                        {
                            "group": "top",
                            "id": "db2cdff6-f584-4bb9-8a8b-84d153951b17"
                        },
                        {
                            "group": "right",
                            "id": "9b30eaae-7513-4afa-9f81-e62f16bc30e1"
                        },
                        {
                            "group": "bottom",
                            "id": "5581f842-9ebf-46c7-8e9c-fcbb32e4881e"
                        },
                        {
                            "group": "left",
                            "id": "9751fb89-7e25-4aa4-8eaf-7db41d695da9"
                        }
                    ],
                    "groups": {
                        "top": {
                            "position": {
                                "name": "top"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        },
                        "right": {
                            "position": {
                                "name": "right"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        },
                        "bottom": {
                            "position": {
                                "name": "bottom"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        },
                        "left": {
                            "position": {
                                "name": "left"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        }
                    }
                },
                "originData": {
                    "component": {
                        "compare": null
                    },
                    "name": "JudgmentNode",
                    "width": 180,
                    "height": 60,
                    "label": "自定义判断节点"
                },
                "isCustom": true,
                "x": 1345,
                "y": 487,
                "zIndex": 10,
                "incomingEdges": [
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "strokeWidth": 1,
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5"
                            }
                        },
                        "id": "node-39207817-50a6-4ddd-abcd-30829227705c:d460e613-a8fe-4053-9698-d8b3040c9b74-node-c34e4a14-d014-456c-bcf3-67251212ce82:db2cdff6-f584-4bb9-8a8b-84d153951b17",
                        "targetPortId": "db2cdff6-f584-4bb9-8a8b-84d153951b17",
                        "sourcePortId": "d460e613-a8fe-4053-9698-d8b3040c9b74",
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "db2cdff6-f584-4bb9-8a8b-84d153951b17",
                            "sourcePortId": "d460e613-a8fe-4053-9698-d8b3040c9b74",
                            "source": {
                                "cell": "node-39207817-50a6-4ddd-abcd-30829227705c",
                                "port": "d460e613-a8fe-4053-9698-d8b3040c9b74"
                            },
                            "target": {
                                "cell": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                                "port": "db2cdff6-f584-4bb9-8a8b-84d153951b17"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "db2cdff6-f584-4bb9-8a8b-84d153951b17",
                                "sourcePortId": "d460e613-a8fe-4053-9698-d8b3040c9b74",
                                "source": "node-39207817-50a6-4ddd-abcd-30829227705c",
                                "target": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-39207817-50a6-4ddd-abcd-30829227705c:d460e613-a8fe-4053-9698-d8b3040c9b74-node-c34e4a14-d014-456c-bcf3-67251212ce82:db2cdff6-f584-4bb9-8a8b-84d153951b17",
                            "sourcePort": "d460e613-a8fe-4053-9698-d8b3040c9b74",
                            "targetPort": "db2cdff6-f584-4bb9-8a8b-84d153951b17"
                        },
                        "source": {
                            "cell": "node-39207817-50a6-4ddd-abcd-30829227705c",
                            "port": "d460e613-a8fe-4053-9698-d8b3040c9b74"
                        },
                        "target": {
                            "cell": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                            "port": "db2cdff6-f584-4bb9-8a8b-84d153951b17"
                        },
                        "labels": [
                            {
                                "targetPortId": "db2cdff6-f584-4bb9-8a8b-84d153951b17",
                                "sourcePortId": "d460e613-a8fe-4053-9698-d8b3040c9b74",
                                "source": {
                                    "cell": "node-39207817-50a6-4ddd-abcd-30829227705c",
                                    "port": "d460e613-a8fe-4053-9698-d8b3040c9b74"
                                },
                                "target": {
                                    "cell": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                                    "port": "db2cdff6-f584-4bb9-8a8b-84d153951b17"
                                },
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                },
                                "zIndex": 1,
                                "data": {
                                    "targetPortId": "db2cdff6-f584-4bb9-8a8b-84d153951b17",
                                    "sourcePortId": "d460e613-a8fe-4053-9698-d8b3040c9b74",
                                    "source": "node-39207817-50a6-4ddd-abcd-30829227705c",
                                    "target": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                                    "attrs": {
                                        "line": {
                                            "stroke": "#A2B1C3",
                                            "targetMarker": {
                                                "name": "block",
                                                "width": 12,
                                                "height": 8
                                            },
                                            "strokeDasharray": "5 5",
                                            "strokeWidth": 1
                                        }
                                    }
                                },
                                "id": "node-39207817-50a6-4ddd-abcd-30829227705c:d460e613-a8fe-4053-9698-d8b3040c9b74-node-c34e4a14-d014-456c-bcf3-67251212ce82:db2cdff6-f584-4bb9-8a8b-84d153951b17",
                                "sourcePort": "d460e613-a8fe-4053-9698-d8b3040c9b74",
                                "targetPort": "db2cdff6-f584-4bb9-8a8b-84d153951b17"
                            }
                        ]
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "strokeWidth": 1,
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5"
                            }
                        },
                        "id": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9:afbff0aa-f7c3-4471-a5e9-329ec5d2bab0-node-c34e4a14-d014-456c-bcf3-67251212ce82:9751fb89-7e25-4aa4-8eaf-7db41d695da9",
                        "targetPortId": "9751fb89-7e25-4aa4-8eaf-7db41d695da9",
                        "sourcePortId": "afbff0aa-f7c3-4471-a5e9-329ec5d2bab0",
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "9751fb89-7e25-4aa4-8eaf-7db41d695da9",
                            "sourcePortId": "afbff0aa-f7c3-4471-a5e9-329ec5d2bab0",
                            "source": {
                                "cell": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                                "port": "afbff0aa-f7c3-4471-a5e9-329ec5d2bab0"
                            },
                            "target": {
                                "cell": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                                "port": "9751fb89-7e25-4aa4-8eaf-7db41d695da9"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "9751fb89-7e25-4aa4-8eaf-7db41d695da9",
                                "sourcePortId": "afbff0aa-f7c3-4471-a5e9-329ec5d2bab0",
                                "source": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                                "target": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9:afbff0aa-f7c3-4471-a5e9-329ec5d2bab0-node-c34e4a14-d014-456c-bcf3-67251212ce82:9751fb89-7e25-4aa4-8eaf-7db41d695da9",
                            "sourcePort": "afbff0aa-f7c3-4471-a5e9-329ec5d2bab0",
                            "targetPort": "9751fb89-7e25-4aa4-8eaf-7db41d695da9"
                        },
                        "source": {
                            "cell": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                            "port": "afbff0aa-f7c3-4471-a5e9-329ec5d2bab0"
                        },
                        "target": {
                            "cell": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                            "port": "9751fb89-7e25-4aa4-8eaf-7db41d695da9"
                        },
                        "labels": [
                            {
                                "targetPortId": "9751fb89-7e25-4aa4-8eaf-7db41d695da9",
                                "sourcePortId": "afbff0aa-f7c3-4471-a5e9-329ec5d2bab0",
                                "source": {
                                    "cell": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                                    "port": "afbff0aa-f7c3-4471-a5e9-329ec5d2bab0"
                                },
                                "target": {
                                    "cell": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                                    "port": "9751fb89-7e25-4aa4-8eaf-7db41d695da9"
                                },
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                },
                                "zIndex": 1,
                                "data": {
                                    "targetPortId": "9751fb89-7e25-4aa4-8eaf-7db41d695da9",
                                    "sourcePortId": "afbff0aa-f7c3-4471-a5e9-329ec5d2bab0",
                                    "source": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                                    "target": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                                    "attrs": {
                                        "line": {
                                            "stroke": "#A2B1C3",
                                            "targetMarker": {
                                                "name": "block",
                                                "width": 12,
                                                "height": 8
                                            },
                                            "strokeDasharray": "5 5",
                                            "strokeWidth": 1
                                        }
                                    }
                                },
                                "id": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9:afbff0aa-f7c3-4471-a5e9-329ec5d2bab0-node-c34e4a14-d014-456c-bcf3-67251212ce82:9751fb89-7e25-4aa4-8eaf-7db41d695da9",
                                "sourcePort": "afbff0aa-f7c3-4471-a5e9-329ec5d2bab0",
                                "targetPort": "9751fb89-7e25-4aa4-8eaf-7db41d695da9"
                            }
                        ]
                    }
                ],
                "outgoingEdges": [
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "strokeWidth": 1,
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "label": "是"
                            },
                            "text": {
                                "fontSize": 18
                            }
                        },
                        "id": "node-c34e4a14-d014-456c-bcf3-67251212ce82:9b30eaae-7513-4afa-9f81-e62f16bc30e1-node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0:da7c9f33-6c29-4652-b8df-4b9c4bf7e1c0",
                        "targetPortId": "da7c9f33-6c29-4652-b8df-4b9c4bf7e1c0",
                        "sourcePortId": "9b30eaae-7513-4afa-9f81-e62f16bc30e1",
                        "zIndex": 1,
                        "data": {
                            "id": "node-c34e4a14-d014-456c-bcf3-67251212ce82:9b30eaae-7513-4afa-9f81-e62f16bc30e1-node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0:da7c9f33-6c29-4652-b8df-4b9c4bf7e1c0",
                            "targetPortId": "da7c9f33-6c29-4652-b8df-4b9c4bf7e1c0",
                            "sourcePortId": "9b30eaae-7513-4afa-9f81-e62f16bc30e1",
                            "source": {
                                "cell": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                                "port": "9b30eaae-7513-4afa-9f81-e62f16bc30e1"
                            },
                            "target": {
                                "cell": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0",
                                "port": "da7c9f33-6c29-4652-b8df-4b9c4bf7e1c0"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1,
                                    "label": "是"
                                },
                                "text": {
                                    "fontSize": 18
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "da7c9f33-6c29-4652-b8df-4b9c4bf7e1c0",
                                "sourcePortId": "9b30eaae-7513-4afa-9f81-e62f16bc30e1",
                                "source": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                                "target": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "sourcePort": "9b30eaae-7513-4afa-9f81-e62f16bc30e1",
                            "targetPort": "da7c9f33-6c29-4652-b8df-4b9c4bf7e1c0",
                            "label": "是",
                            "fontSize": 18
                        },
                        "fontSize": 18,
                        "source": {
                            "cell": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                            "port": "9b30eaae-7513-4afa-9f81-e62f16bc30e1"
                        },
                        "target": {
                            "cell": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0",
                            "port": "da7c9f33-6c29-4652-b8df-4b9c4bf7e1c0"
                        },
                        "labels": [
                            {
                                "attrs": {
                                    "label": {
                                        "text": "是"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "strokeWidth": 1,
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "label": "否"
                            },
                            "text": {
                                "fontSize": 18
                            }
                        },
                        "id": "node-c34e4a14-d014-456c-bcf3-67251212ce82:5581f842-9ebf-46c7-8e9c-fcbb32e4881e-node-125b649f-a496-4a5a-81ef-d37b5a36c2a9:ff554a0b-0932-47d5-8a0c-e44f0c6df853",
                        "targetPortId": "ff554a0b-0932-47d5-8a0c-e44f0c6df853",
                        "sourcePortId": "5581f842-9ebf-46c7-8e9c-fcbb32e4881e",
                        "zIndex": 1,
                        "data": {
                            "id": "node-c34e4a14-d014-456c-bcf3-67251212ce82:5581f842-9ebf-46c7-8e9c-fcbb32e4881e-node-125b649f-a496-4a5a-81ef-d37b5a36c2a9:ff554a0b-0932-47d5-8a0c-e44f0c6df853",
                            "targetPortId": "ff554a0b-0932-47d5-8a0c-e44f0c6df853",
                            "sourcePortId": "5581f842-9ebf-46c7-8e9c-fcbb32e4881e",
                            "source": {
                                "cell": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                                "port": "5581f842-9ebf-46c7-8e9c-fcbb32e4881e"
                            },
                            "target": {
                                "cell": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                                "port": "ff554a0b-0932-47d5-8a0c-e44f0c6df853"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1,
                                    "label": "否"
                                },
                                "text": {
                                    "fontSize": 18
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "ff554a0b-0932-47d5-8a0c-e44f0c6df853",
                                "sourcePortId": "5581f842-9ebf-46c7-8e9c-fcbb32e4881e",
                                "source": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                                "target": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "sourcePort": "5581f842-9ebf-46c7-8e9c-fcbb32e4881e",
                            "targetPort": "ff554a0b-0932-47d5-8a0c-e44f0c6df853",
                            "label": "否",
                            "fontSize": 18
                        },
                        "fontSize": 18,
                        "source": {
                            "cell": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                            "port": "5581f842-9ebf-46c7-8e9c-fcbb32e4881e"
                        },
                        "target": {
                            "cell": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                            "port": "ff554a0b-0932-47d5-8a0c-e44f0c6df853"
                        },
                        "labels": [
                            {
                                "attrs": {
                                    "label": {
                                        "text": "否"
                                    }
                                }
                            }
                        ]
                    }
                ],
                "stroke": "#f5a623",
                "fontSize": 18
            },
            {
                "id": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0",
                "renderKey": "JudgmentNode",
                "name": "JudgmentNode",
                "label": "二次询价",
                "width": 180,
                "height": 60,
                "ports": {
                    "items": [
                        {
                            "group": "top",
                            "id": "4e080032-1831-41a9-92bb-2666d46783b4"
                        },
                        {
                            "group": "right",
                            "id": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d"
                        },
                        {
                            "group": "bottom",
                            "id": "12fc150d-8a47-4660-8cbd-7c7ccb2bc247"
                        },
                        {
                            "group": "left",
                            "id": "da7c9f33-6c29-4652-b8df-4b9c4bf7e1c0"
                        }
                    ],
                    "groups": {
                        "top": {
                            "position": {
                                "name": "top"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        },
                        "right": {
                            "position": {
                                "name": "right"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        },
                        "bottom": {
                            "position": {
                                "name": "bottom"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        },
                        "left": {
                            "position": {
                                "name": "left"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        }
                    }
                },
                "originData": {
                    "component": {
                        "compare": null
                    },
                    "name": "JudgmentNode",
                    "width": 180,
                    "height": 60,
                    "label": "自定义判断节点"
                },
                "isCustom": true,
                "x": 1595,
                "y": 487,
                "zIndex": 10,
                "incomingEdges": [
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "strokeWidth": 1,
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5",
                                "label": "是"
                            }
                        },
                        "id": "node-c34e4a14-d014-456c-bcf3-67251212ce82:9b30eaae-7513-4afa-9f81-e62f16bc30e1-node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0:da7c9f33-6c29-4652-b8df-4b9c4bf7e1c0",
                        "targetPortId": "da7c9f33-6c29-4652-b8df-4b9c4bf7e1c0",
                        "sourcePortId": "9b30eaae-7513-4afa-9f81-e62f16bc30e1",
                        "zIndex": 1,
                        "data": {
                            "id": "node-c34e4a14-d014-456c-bcf3-67251212ce82:9b30eaae-7513-4afa-9f81-e62f16bc30e1-node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0:da7c9f33-6c29-4652-b8df-4b9c4bf7e1c0",
                            "targetPortId": "da7c9f33-6c29-4652-b8df-4b9c4bf7e1c0",
                            "sourcePortId": "9b30eaae-7513-4afa-9f81-e62f16bc30e1",
                            "source": {
                                "cell": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                                "port": "9b30eaae-7513-4afa-9f81-e62f16bc30e1"
                            },
                            "target": {
                                "cell": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0",
                                "port": "da7c9f33-6c29-4652-b8df-4b9c4bf7e1c0"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1,
                                    "label": "是"
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "da7c9f33-6c29-4652-b8df-4b9c4bf7e1c0",
                                "sourcePortId": "9b30eaae-7513-4afa-9f81-e62f16bc30e1",
                                "source": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                                "target": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "sourcePort": "9b30eaae-7513-4afa-9f81-e62f16bc30e1",
                            "targetPort": "da7c9f33-6c29-4652-b8df-4b9c4bf7e1c0",
                            "label": "是"
                        },
                        "source": {
                            "cell": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                            "port": "9b30eaae-7513-4afa-9f81-e62f16bc30e1"
                        },
                        "target": {
                            "cell": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0",
                            "port": "da7c9f33-6c29-4652-b8df-4b9c4bf7e1c0"
                        },
                        "labels": [
                            {
                                "attrs": {
                                    "label": {
                                        "text": "是"
                                    }
                                }
                            }
                        ]
                    }
                ],
                "outgoingEdges": [
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "strokeWidth": 1,
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5"
                            }
                        },
                        "id": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0:c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d-node-164790c3-ba8f-4b4a-bef0-4006f000efa9:ec334731-f845-4b50-b660-0edf1242edd1",
                        "targetPortId": "ec334731-f845-4b50-b660-0edf1242edd1",
                        "sourcePortId": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d",
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "ec334731-f845-4b50-b660-0edf1242edd1",
                            "sourcePortId": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d",
                            "source": {
                                "cell": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0",
                                "port": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d"
                            },
                            "target": {
                                "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                "port": "ec334731-f845-4b50-b660-0edf1242edd1"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "ec334731-f845-4b50-b660-0edf1242edd1",
                                "sourcePortId": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d",
                                "source": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0",
                                "target": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0:c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d-node-164790c3-ba8f-4b4a-bef0-4006f000efa9:ec334731-f845-4b50-b660-0edf1242edd1",
                            "sourcePort": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d",
                            "targetPort": "ec334731-f845-4b50-b660-0edf1242edd1"
                        },
                        "source": {
                            "cell": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0",
                            "port": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d"
                        },
                        "target": {
                            "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                            "port": "ec334731-f845-4b50-b660-0edf1242edd1"
                        },
                        "labels": [
                            {
                                "targetPortId": "ec334731-f845-4b50-b660-0edf1242edd1",
                                "sourcePortId": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d",
                                "source": {
                                    "cell": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0",
                                    "port": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d"
                                },
                                "target": {
                                    "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                    "port": "ec334731-f845-4b50-b660-0edf1242edd1"
                                },
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                },
                                "zIndex": 1,
                                "data": {
                                    "targetPortId": "ec334731-f845-4b50-b660-0edf1242edd1",
                                    "sourcePortId": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d",
                                    "source": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0",
                                    "target": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                    "attrs": {
                                        "line": {
                                            "stroke": "#A2B1C3",
                                            "targetMarker": {
                                                "name": "block",
                                                "width": 12,
                                                "height": 8
                                            },
                                            "strokeDasharray": "5 5",
                                            "strokeWidth": 1
                                        }
                                    }
                                },
                                "id": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0:c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d-node-164790c3-ba8f-4b4a-bef0-4006f000efa9:ec334731-f845-4b50-b660-0edf1242edd1",
                                "sourcePort": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d",
                                "targetPort": "ec334731-f845-4b50-b660-0edf1242edd1"
                            }
                        ]
                    }
                ],
                "fontSize": 18,
                "stroke": "#f5a623"
            },
            {
                "id": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                "renderKey": "ProcessNode",
                "name": "ProcessNode",
                "label": "安排样品&质检测试",
                "width": 180,
                "height": 60,
                "ports": {
                    "items": [
                        {
                            "group": "top",
                            "id": "7f3f41c3-e21e-44f0-87a4-72232643938d"
                        },
                        {
                            "group": "right",
                            "id": "4393d104-65cd-4054-a39f-6470621f5080"
                        },
                        {
                            "group": "bottom",
                            "id": "ae318dce-1814-4873-ab34-449666667d2d"
                        },
                        {
                            "group": "left",
                            "id": "ec334731-f845-4b50-b660-0edf1242edd1"
                        }
                    ],
                    "groups": {
                        "top": {
                            "position": {
                                "name": "top"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        },
                        "right": {
                            "position": {
                                "name": "right"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        },
                        "bottom": {
                            "position": {
                                "name": "bottom"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        },
                        "left": {
                            "position": {
                                "name": "left"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        }
                    }
                },
                "originData": {
                    "name": "ProcessNode",
                    "width": 180,
                    "height": 60,
                    "label": "自定义步骤节点"
                },
                "isCustom": true,
                "x": 1844,
                "y": 487,
                "zIndex": 10,
                "incomingEdges": [
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "strokeWidth": 1,
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": [
                                    0,
                                    0
                                ]
                            }
                        },
                        "id": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0:c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d-node-164790c3-ba8f-4b4a-bef0-4006f000efa9:ec334731-f845-4b50-b660-0edf1242edd1",
                        "targetPortId": "ec334731-f845-4b50-b660-0edf1242edd1",
                        "sourcePortId": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d",
                        "zIndex": 1,
                        "data": {
                            "id": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0:c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d-node-164790c3-ba8f-4b4a-bef0-4006f000efa9:ec334731-f845-4b50-b660-0edf1242edd1",
                            "targetPortId": "ec334731-f845-4b50-b660-0edf1242edd1",
                            "sourcePortId": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d",
                            "source": {
                                "cell": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0",
                                "port": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d"
                            },
                            "target": {
                                "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                "port": "ec334731-f845-4b50-b660-0edf1242edd1"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": [
                                        0,
                                        0
                                    ],
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "ec334731-f845-4b50-b660-0edf1242edd1",
                                "sourcePortId": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d",
                                "source": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0",
                                "target": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "sourcePort": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d",
                            "targetPort": "ec334731-f845-4b50-b660-0edf1242edd1",
                            "strokeDasharray": [
                                0,
                                0
                            ]
                        },
                        "strokeDasharray": [
                            0,
                            0
                        ],
                        "source": {
                            "cell": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0",
                            "port": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d"
                        },
                        "target": {
                            "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                            "port": "ec334731-f845-4b50-b660-0edf1242edd1"
                        },
                        "labels": [
                            {
                                "id": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0:c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d-node-164790c3-ba8f-4b4a-bef0-4006f000efa9:ec334731-f845-4b50-b660-0edf1242edd1",
                                "targetPortId": "ec334731-f845-4b50-b660-0edf1242edd1",
                                "sourcePortId": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d",
                                "source": {
                                    "cell": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0",
                                    "port": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d"
                                },
                                "target": {
                                    "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                    "port": "ec334731-f845-4b50-b660-0edf1242edd1"
                                },
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": [
                                            0,
                                            0
                                        ],
                                        "strokeWidth": 1
                                    }
                                },
                                "zIndex": 1,
                                "data": {
                                    "targetPortId": "ec334731-f845-4b50-b660-0edf1242edd1",
                                    "sourcePortId": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d",
                                    "source": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0",
                                    "target": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                    "attrs": {
                                        "line": {
                                            "stroke": "#A2B1C3",
                                            "targetMarker": {
                                                "name": "block",
                                                "width": 12,
                                                "height": 8
                                            },
                                            "strokeDasharray": "5 5",
                                            "strokeWidth": 1
                                        }
                                    }
                                },
                                "sourcePort": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d",
                                "targetPort": "ec334731-f845-4b50-b660-0edf1242edd1",
                                "strokeDasharray": [
                                    0,
                                    0
                                ]
                            }
                        ]
                    }
                ],
                "outgoingEdges": [
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "strokeWidth": 1,
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5"
                            }
                        },
                        "id": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9:4393d104-65cd-4054-a39f-6470621f5080-node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:c03eedf6-1018-4b89-906a-b26d813d5362",
                        "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
                        "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
                        "zIndex": 1,
                        "data": {
                            "id": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9:4393d104-65cd-4054-a39f-6470621f5080-node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:c03eedf6-1018-4b89-906a-b26d813d5362",
                            "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
                            "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
                            "source": {
                                "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                "port": "4393d104-65cd-4054-a39f-6470621f5080"
                            },
                            "target": {
                                "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                "port": "c03eedf6-1018-4b89-906a-b26d813d5362"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
                                "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
                                "source": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                "target": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "sourcePort": "4393d104-65cd-4054-a39f-6470621f5080",
                            "targetPort": "c03eedf6-1018-4b89-906a-b26d813d5362"
                        },
                        "source": {
                            "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                            "port": "4393d104-65cd-4054-a39f-6470621f5080"
                        },
                        "target": {
                            "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                            "port": "c03eedf6-1018-4b89-906a-b26d813d5362"
                        },
                        "labels": [
                            {
                                "id": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9:4393d104-65cd-4054-a39f-6470621f5080-node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:c03eedf6-1018-4b89-906a-b26d813d5362",
                                "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
                                "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
                                "source": {
                                    "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                    "port": "4393d104-65cd-4054-a39f-6470621f5080"
                                },
                                "target": {
                                    "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                    "port": "c03eedf6-1018-4b89-906a-b26d813d5362"
                                },
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                },
                                "zIndex": 1,
                                "data": {
                                    "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
                                    "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
                                    "source": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                    "target": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                    "attrs": {
                                        "line": {
                                            "stroke": "#A2B1C3",
                                            "targetMarker": {
                                                "name": "block",
                                                "width": 12,
                                                "height": 8
                                            },
                                            "strokeDasharray": "5 5",
                                            "strokeWidth": 1
                                        }
                                    }
                                },
                                "sourcePort": "4393d104-65cd-4054-a39f-6470621f5080",
                                "targetPort": "c03eedf6-1018-4b89-906a-b26d813d5362"
                            }
                        ]
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "strokeWidth": 1,
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5"
                            }
                        },
                        "id": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9:7f3f41c3-e21e-44f0-87a4-72232643938d-node-dff1f97b-91c8-44f6-967a-c6a44f8c45b2:1e128fe7-c933-49e3-8349-52c48ff2cf47",
                        "targetPortId": "1e128fe7-c933-49e3-8349-52c48ff2cf47",
                        "sourcePortId": "7f3f41c3-e21e-44f0-87a4-72232643938d",
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "1e128fe7-c933-49e3-8349-52c48ff2cf47",
                            "sourcePortId": "7f3f41c3-e21e-44f0-87a4-72232643938d",
                            "source": {
                                "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                "port": "7f3f41c3-e21e-44f0-87a4-72232643938d"
                            },
                            "target": {
                                "cell": "node-dff1f97b-91c8-44f6-967a-c6a44f8c45b2",
                                "port": "1e128fe7-c933-49e3-8349-52c48ff2cf47"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "1e128fe7-c933-49e3-8349-52c48ff2cf47",
                                "sourcePortId": "7f3f41c3-e21e-44f0-87a4-72232643938d",
                                "source": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                "target": "node-dff1f97b-91c8-44f6-967a-c6a44f8c45b2",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9:7f3f41c3-e21e-44f0-87a4-72232643938d-node-dff1f97b-91c8-44f6-967a-c6a44f8c45b2:1e128fe7-c933-49e3-8349-52c48ff2cf47",
                            "sourcePort": "7f3f41c3-e21e-44f0-87a4-72232643938d",
                            "targetPort": "1e128fe7-c933-49e3-8349-52c48ff2cf47"
                        },
                        "source": {
                            "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                            "port": "7f3f41c3-e21e-44f0-87a4-72232643938d"
                        },
                        "target": {
                            "cell": "node-dff1f97b-91c8-44f6-967a-c6a44f8c45b2",
                            "port": "1e128fe7-c933-49e3-8349-52c48ff2cf47"
                        },
                        "labels": [
                            {
                                "targetPortId": "1e128fe7-c933-49e3-8349-52c48ff2cf47",
                                "sourcePortId": "7f3f41c3-e21e-44f0-87a4-72232643938d",
                                "source": {
                                    "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                    "port": "7f3f41c3-e21e-44f0-87a4-72232643938d"
                                },
                                "target": {
                                    "cell": "node-dff1f97b-91c8-44f6-967a-c6a44f8c45b2",
                                    "port": "1e128fe7-c933-49e3-8349-52c48ff2cf47"
                                },
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                },
                                "zIndex": 1,
                                "data": {
                                    "targetPortId": "1e128fe7-c933-49e3-8349-52c48ff2cf47",
                                    "sourcePortId": "7f3f41c3-e21e-44f0-87a4-72232643938d",
                                    "source": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                    "target": "node-dff1f97b-91c8-44f6-967a-c6a44f8c45b2",
                                    "attrs": {
                                        "line": {
                                            "stroke": "#A2B1C3",
                                            "targetMarker": {
                                                "name": "block",
                                                "width": 12,
                                                "height": 8
                                            },
                                            "strokeDasharray": "5 5",
                                            "strokeWidth": 1
                                        }
                                    }
                                },
                                "id": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9:7f3f41c3-e21e-44f0-87a4-72232643938d-node-dff1f97b-91c8-44f6-967a-c6a44f8c45b2:1e128fe7-c933-49e3-8349-52c48ff2cf47",
                                "sourcePort": "7f3f41c3-e21e-44f0-87a4-72232643938d",
                                "targetPort": "1e128fe7-c933-49e3-8349-52c48ff2cf47"
                            }
                        ]
                    }
                ],
                "fontSize": 18,
                "stroke": "#7ed321"
            },
            {
                "id": "node-554557f5-ef74-4273-97c5-c64d621b0ed0",
                "renderKey": "JudgmentNode",
                "name": "JudgmentNode",
                "label": "主图测试",
                "width": 180,
                "height": 60,
                "ports": {
                    "items": [
                        {
                            "group": "top",
                            "id": "03889faa-7446-4c72-8a14-df0e50c5e0bc"
                        },
                        {
                            "group": "right",
                            "id": "4aa36143-2862-444a-bb3a-2b56a3643a20"
                        },
                        {
                            "group": "bottom",
                            "id": "1083ca37-d9da-40d9-8938-06be749dc3bf"
                        },
                        {
                            "group": "left",
                            "id": "bc2e16e6-e7a8-49a1-8075-36c79877c9a6"
                        }
                    ],
                    "groups": {
                        "top": {
                            "position": {
                                "name": "top"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        },
                        "right": {
                            "position": {
                                "name": "right"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        },
                        "bottom": {
                            "position": {
                                "name": "bottom"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        },
                        "left": {
                            "position": {
                                "name": "left"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        }
                    }
                },
                "originData": {
                    "component": {
                        "compare": null
                    },
                    "name": "JudgmentNode",
                    "width": 180,
                    "height": 60,
                    "label": "自定义判断节点"
                },
                "isCustom": true,
                "x": 2090,
                "y": 380,
                "zIndex": 10,
                "incomingEdges": [
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "strokeWidth": 1,
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5"
                            }
                        },
                        "id": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9:7f3f41c3-e21e-44f0-87a4-72232643938d-node-554557f5-ef74-4273-97c5-c64d621b0ed0:bc2e16e6-e7a8-49a1-8075-36c79877c9a6",
                        "targetPortId": "bc2e16e6-e7a8-49a1-8075-36c79877c9a6",
                        "sourcePortId": "7f3f41c3-e21e-44f0-87a4-72232643938d",
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "bc2e16e6-e7a8-49a1-8075-36c79877c9a6",
                            "sourcePortId": "7f3f41c3-e21e-44f0-87a4-72232643938d",
                            "source": {
                                "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                "port": "7f3f41c3-e21e-44f0-87a4-72232643938d"
                            },
                            "target": {
                                "cell": "node-554557f5-ef74-4273-97c5-c64d621b0ed0",
                                "port": "bc2e16e6-e7a8-49a1-8075-36c79877c9a6"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "bc2e16e6-e7a8-49a1-8075-36c79877c9a6",
                                "sourcePortId": "7f3f41c3-e21e-44f0-87a4-72232643938d",
                                "source": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                "target": "node-554557f5-ef74-4273-97c5-c64d621b0ed0",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9:7f3f41c3-e21e-44f0-87a4-72232643938d-node-554557f5-ef74-4273-97c5-c64d621b0ed0:bc2e16e6-e7a8-49a1-8075-36c79877c9a6",
                            "sourcePort": "7f3f41c3-e21e-44f0-87a4-72232643938d",
                            "targetPort": "bc2e16e6-e7a8-49a1-8075-36c79877c9a6"
                        },
                        "source": {
                            "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                            "port": "7f3f41c3-e21e-44f0-87a4-72232643938d"
                        },
                        "target": {
                            "cell": "node-554557f5-ef74-4273-97c5-c64d621b0ed0",
                            "port": "bc2e16e6-e7a8-49a1-8075-36c79877c9a6"
                        },
                        "labels": [
                            {
                                "targetPortId": "bc2e16e6-e7a8-49a1-8075-36c79877c9a6",
                                "sourcePortId": "7f3f41c3-e21e-44f0-87a4-72232643938d",
                                "source": {
                                    "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                    "port": "7f3f41c3-e21e-44f0-87a4-72232643938d"
                                },
                                "target": {
                                    "cell": "node-554557f5-ef74-4273-97c5-c64d621b0ed0",
                                    "port": "bc2e16e6-e7a8-49a1-8075-36c79877c9a6"
                                },
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                },
                                "zIndex": 1,
                                "data": {
                                    "targetPortId": "bc2e16e6-e7a8-49a1-8075-36c79877c9a6",
                                    "sourcePortId": "7f3f41c3-e21e-44f0-87a4-72232643938d",
                                    "source": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                    "target": "node-554557f5-ef74-4273-97c5-c64d621b0ed0",
                                    "attrs": {
                                        "line": {
                                            "stroke": "#A2B1C3",
                                            "targetMarker": {
                                                "name": "block",
                                                "width": 12,
                                                "height": 8
                                            },
                                            "strokeDasharray": "5 5",
                                            "strokeWidth": 1
                                        }
                                    }
                                },
                                "id": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9:7f3f41c3-e21e-44f0-87a4-72232643938d-node-554557f5-ef74-4273-97c5-c64d621b0ed0:bc2e16e6-e7a8-49a1-8075-36c79877c9a6",
                                "sourcePort": "7f3f41c3-e21e-44f0-87a4-72232643938d",
                                "targetPort": "bc2e16e6-e7a8-49a1-8075-36c79877c9a6"
                            }
                        ]
                    }
                ],
                "outgoingEdges": [
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "strokeWidth": 1,
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5"
                            }
                        },
                        "id": "node-554557f5-ef74-4273-97c5-c64d621b0ed0:4aa36143-2862-444a-bb3a-2b56a3643a20-node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:fdea702a-93fb-4dca-aa5f-bf4a80703f91",
                        "targetPortId": "fdea702a-93fb-4dca-aa5f-bf4a80703f91",
                        "sourcePortId": "4aa36143-2862-444a-bb3a-2b56a3643a20",
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "fdea702a-93fb-4dca-aa5f-bf4a80703f91",
                            "sourcePortId": "4aa36143-2862-444a-bb3a-2b56a3643a20",
                            "source": {
                                "cell": "node-554557f5-ef74-4273-97c5-c64d621b0ed0",
                                "port": "4aa36143-2862-444a-bb3a-2b56a3643a20"
                            },
                            "target": {
                                "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                "port": "fdea702a-93fb-4dca-aa5f-bf4a80703f91"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "fdea702a-93fb-4dca-aa5f-bf4a80703f91",
                                "sourcePortId": "4aa36143-2862-444a-bb3a-2b56a3643a20",
                                "source": "node-554557f5-ef74-4273-97c5-c64d621b0ed0",
                                "target": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-554557f5-ef74-4273-97c5-c64d621b0ed0:4aa36143-2862-444a-bb3a-2b56a3643a20-node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:fdea702a-93fb-4dca-aa5f-bf4a80703f91",
                            "sourcePort": "4aa36143-2862-444a-bb3a-2b56a3643a20",
                            "targetPort": "fdea702a-93fb-4dca-aa5f-bf4a80703f91"
                        },
                        "source": {
                            "cell": "node-554557f5-ef74-4273-97c5-c64d621b0ed0",
                            "port": "4aa36143-2862-444a-bb3a-2b56a3643a20"
                        },
                        "target": {
                            "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                            "port": "fdea702a-93fb-4dca-aa5f-bf4a80703f91"
                        },
                        "labels": [
                            {
                                "targetPortId": "fdea702a-93fb-4dca-aa5f-bf4a80703f91",
                                "sourcePortId": "4aa36143-2862-444a-bb3a-2b56a3643a20",
                                "source": {
                                    "cell": "node-554557f5-ef74-4273-97c5-c64d621b0ed0",
                                    "port": "4aa36143-2862-444a-bb3a-2b56a3643a20"
                                },
                                "target": {
                                    "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                    "port": "fdea702a-93fb-4dca-aa5f-bf4a80703f91"
                                },
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                },
                                "zIndex": 1,
                                "data": {
                                    "targetPortId": "fdea702a-93fb-4dca-aa5f-bf4a80703f91",
                                    "sourcePortId": "4aa36143-2862-444a-bb3a-2b56a3643a20",
                                    "source": "node-554557f5-ef74-4273-97c5-c64d621b0ed0",
                                    "target": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                    "attrs": {
                                        "line": {
                                            "stroke": "#A2B1C3",
                                            "targetMarker": {
                                                "name": "block",
                                                "width": 12,
                                                "height": 8
                                            },
                                            "strokeDasharray": "5 5",
                                            "strokeWidth": 1
                                        }
                                    }
                                },
                                "id": "node-554557f5-ef74-4273-97c5-c64d621b0ed0:4aa36143-2862-444a-bb3a-2b56a3643a20-node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:fdea702a-93fb-4dca-aa5f-bf4a80703f91",
                                "sourcePort": "4aa36143-2862-444a-bb3a-2b56a3643a20",
                                "targetPort": "fdea702a-93fb-4dca-aa5f-bf4a80703f91"
                            }
                        ]
                    }
                ],
                "stroke": "#f5a623",
                "fontSize": 18
            },
            {
                "id": "node-3e41bea0-7add-4562-8270-fe4c92bca591",
                "renderKey": "JudgmentNode",
                "name": "JudgmentNode",
                "label": "质检标准共识",
                "width": 180,
                "height": 60,
                "ports": {
                    "items": [
                        {
                            "group": "top",
                            "id": "b3ada28f-fba3-4695-99cc-d75acffedb41"
                        },
                        {
                            "group": "right",
                            "id": "6b2f4402-4035-4716-8d7c-37075ddbef34"
                        },
                        {
                            "group": "bottom",
                            "id": "765168ac-317c-42d7-aa92-56ba99d44860"
                        },
                        {
                            "group": "left",
                            "id": "be415689-0e56-4fa9-8aa9-eeb1d87f3e29"
                        }
                    ],
                    "groups": {
                        "top": {
                            "position": {
                                "name": "top"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        },
                        "right": {
                            "position": {
                                "name": "right"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        },
                        "bottom": {
                            "position": {
                                "name": "bottom"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        },
                        "left": {
                            "position": {
                                "name": "left"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        }
                    }
                },
                "originData": {
                    "component": {
                        "compare": null
                    },
                    "name": "JudgmentNode",
                    "width": 180,
                    "height": 60,
                    "label": "自定义判断节点"
                },
                "isCustom": true,
                "x": 2090,
                "y": 260,
                "zIndex": 10,
                "incomingEdges": [
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "strokeWidth": 1,
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5"
                            }
                        },
                        "id": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9:7f3f41c3-e21e-44f0-87a4-72232643938d-node-3e41bea0-7add-4562-8270-fe4c92bca591:be415689-0e56-4fa9-8aa9-eeb1d87f3e29",
                        "targetPortId": "be415689-0e56-4fa9-8aa9-eeb1d87f3e29",
                        "sourcePortId": "7f3f41c3-e21e-44f0-87a4-72232643938d",
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "be415689-0e56-4fa9-8aa9-eeb1d87f3e29",
                            "sourcePortId": "7f3f41c3-e21e-44f0-87a4-72232643938d",
                            "source": {
                                "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                "port": "7f3f41c3-e21e-44f0-87a4-72232643938d"
                            },
                            "target": {
                                "cell": "node-3e41bea0-7add-4562-8270-fe4c92bca591",
                                "port": "be415689-0e56-4fa9-8aa9-eeb1d87f3e29"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "be415689-0e56-4fa9-8aa9-eeb1d87f3e29",
                                "sourcePortId": "7f3f41c3-e21e-44f0-87a4-72232643938d",
                                "source": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                "target": "node-3e41bea0-7add-4562-8270-fe4c92bca591",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9:7f3f41c3-e21e-44f0-87a4-72232643938d-node-3e41bea0-7add-4562-8270-fe4c92bca591:be415689-0e56-4fa9-8aa9-eeb1d87f3e29",
                            "sourcePort": "7f3f41c3-e21e-44f0-87a4-72232643938d",
                            "targetPort": "be415689-0e56-4fa9-8aa9-eeb1d87f3e29"
                        },
                        "source": {
                            "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                            "port": "7f3f41c3-e21e-44f0-87a4-72232643938d"
                        },
                        "target": {
                            "cell": "node-3e41bea0-7add-4562-8270-fe4c92bca591",
                            "port": "be415689-0e56-4fa9-8aa9-eeb1d87f3e29"
                        },
                        "labels": [
                            {
                                "targetPortId": "be415689-0e56-4fa9-8aa9-eeb1d87f3e29",
                                "sourcePortId": "7f3f41c3-e21e-44f0-87a4-72232643938d",
                                "source": {
                                    "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                    "port": "7f3f41c3-e21e-44f0-87a4-72232643938d"
                                },
                                "target": {
                                    "cell": "node-3e41bea0-7add-4562-8270-fe4c92bca591",
                                    "port": "be415689-0e56-4fa9-8aa9-eeb1d87f3e29"
                                },
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                },
                                "zIndex": 1,
                                "data": {
                                    "targetPortId": "be415689-0e56-4fa9-8aa9-eeb1d87f3e29",
                                    "sourcePortId": "7f3f41c3-e21e-44f0-87a4-72232643938d",
                                    "source": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                    "target": "node-3e41bea0-7add-4562-8270-fe4c92bca591",
                                    "attrs": {
                                        "line": {
                                            "stroke": "#A2B1C3",
                                            "targetMarker": {
                                                "name": "block",
                                                "width": 12,
                                                "height": 8
                                            },
                                            "strokeDasharray": "5 5",
                                            "strokeWidth": 1
                                        }
                                    }
                                },
                                "id": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9:7f3f41c3-e21e-44f0-87a4-72232643938d-node-3e41bea0-7add-4562-8270-fe4c92bca591:be415689-0e56-4fa9-8aa9-eeb1d87f3e29",
                                "sourcePort": "7f3f41c3-e21e-44f0-87a4-72232643938d",
                                "targetPort": "be415689-0e56-4fa9-8aa9-eeb1d87f3e29"
                            }
                        ]
                    }
                ],
                "outgoingEdges": [
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "strokeWidth": 1,
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5"
                            }
                        },
                        "id": "node-3e41bea0-7add-4562-8270-fe4c92bca591:6b2f4402-4035-4716-8d7c-37075ddbef34-node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:fdea702a-93fb-4dca-aa5f-bf4a80703f91",
                        "targetPortId": "fdea702a-93fb-4dca-aa5f-bf4a80703f91",
                        "sourcePortId": "6b2f4402-4035-4716-8d7c-37075ddbef34",
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "fdea702a-93fb-4dca-aa5f-bf4a80703f91",
                            "sourcePortId": "6b2f4402-4035-4716-8d7c-37075ddbef34",
                            "source": {
                                "cell": "node-3e41bea0-7add-4562-8270-fe4c92bca591",
                                "port": "6b2f4402-4035-4716-8d7c-37075ddbef34"
                            },
                            "target": {
                                "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                "port": "fdea702a-93fb-4dca-aa5f-bf4a80703f91"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "fdea702a-93fb-4dca-aa5f-bf4a80703f91",
                                "sourcePortId": "6b2f4402-4035-4716-8d7c-37075ddbef34",
                                "source": "node-3e41bea0-7add-4562-8270-fe4c92bca591",
                                "target": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-3e41bea0-7add-4562-8270-fe4c92bca591:6b2f4402-4035-4716-8d7c-37075ddbef34-node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:fdea702a-93fb-4dca-aa5f-bf4a80703f91",
                            "sourcePort": "6b2f4402-4035-4716-8d7c-37075ddbef34",
                            "targetPort": "fdea702a-93fb-4dca-aa5f-bf4a80703f91"
                        },
                        "source": {
                            "cell": "node-3e41bea0-7add-4562-8270-fe4c92bca591",
                            "port": "6b2f4402-4035-4716-8d7c-37075ddbef34"
                        },
                        "target": {
                            "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                            "port": "fdea702a-93fb-4dca-aa5f-bf4a80703f91"
                        },
                        "labels": [
                            {
                                "targetPortId": "fdea702a-93fb-4dca-aa5f-bf4a80703f91",
                                "sourcePortId": "6b2f4402-4035-4716-8d7c-37075ddbef34",
                                "source": {
                                    "cell": "node-3e41bea0-7add-4562-8270-fe4c92bca591",
                                    "port": "6b2f4402-4035-4716-8d7c-37075ddbef34"
                                },
                                "target": {
                                    "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                    "port": "fdea702a-93fb-4dca-aa5f-bf4a80703f91"
                                },
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                },
                                "zIndex": 1,
                                "data": {
                                    "targetPortId": "fdea702a-93fb-4dca-aa5f-bf4a80703f91",
                                    "sourcePortId": "6b2f4402-4035-4716-8d7c-37075ddbef34",
                                    "source": "node-3e41bea0-7add-4562-8270-fe4c92bca591",
                                    "target": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                    "attrs": {
                                        "line": {
                                            "stroke": "#A2B1C3",
                                            "targetMarker": {
                                                "name": "block",
                                                "width": 12,
                                                "height": 8
                                            },
                                            "strokeDasharray": "5 5",
                                            "strokeWidth": 1
                                        }
                                    }
                                },
                                "id": "node-3e41bea0-7add-4562-8270-fe4c92bca591:6b2f4402-4035-4716-8d7c-37075ddbef34-node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:fdea702a-93fb-4dca-aa5f-bf4a80703f91",
                                "sourcePort": "6b2f4402-4035-4716-8d7c-37075ddbef34",
                                "targetPort": "fdea702a-93fb-4dca-aa5f-bf4a80703f91"
                            }
                        ]
                    }
                ],
                "fontSize": 18,
                "stroke": "#f5a623"
            },
            {
                "id": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                "renderKey": "ProcessNode",
                "name": "ProcessNode",
                "label": "创建产品表",
                "width": 180,
                "height": 60,
                "ports": {
                    "items": [
                        {
                            "group": "top",
                            "id": "fdea702a-93fb-4dca-aa5f-bf4a80703f91"
                        },
                        {
                            "group": "right",
                            "id": "d13540af-5af8-47b4-9162-af58bf95c4e0"
                        },
                        {
                            "group": "bottom",
                            "id": "a32fdbf7-bb5d-4c76-b1d2-0cee39b8ae05"
                        },
                        {
                            "group": "left",
                            "id": "c03eedf6-1018-4b89-906a-b26d813d5362"
                        }
                    ],
                    "groups": {
                        "top": {
                            "position": {
                                "name": "top"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        },
                        "right": {
                            "position": {
                                "name": "right"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        },
                        "bottom": {
                            "position": {
                                "name": "bottom"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        },
                        "left": {
                            "position": {
                                "name": "left"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        }
                    }
                },
                "originData": {
                    "name": "ProcessNode",
                    "width": 180,
                    "height": 60,
                    "label": "自定义步骤节点"
                },
                "isCustom": true,
                "x": 2349,
                "y": 487,
                "zIndex": 10,
                "incomingEdges": [
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "strokeWidth": 1,
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5"
                            }
                        },
                        "id": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9:4393d104-65cd-4054-a39f-6470621f5080-node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:c03eedf6-1018-4b89-906a-b26d813d5362",
                        "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
                        "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
                        "zIndex": 1,
                        "data": {
                            "id": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9:4393d104-65cd-4054-a39f-6470621f5080-node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:c03eedf6-1018-4b89-906a-b26d813d5362",
                            "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
                            "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
                            "source": {
                                "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                "port": "4393d104-65cd-4054-a39f-6470621f5080"
                            },
                            "target": {
                                "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                "port": "c03eedf6-1018-4b89-906a-b26d813d5362"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
                                "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
                                "source": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                "target": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "sourcePort": "4393d104-65cd-4054-a39f-6470621f5080",
                            "targetPort": "c03eedf6-1018-4b89-906a-b26d813d5362"
                        },
                        "source": {
                            "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                            "port": "4393d104-65cd-4054-a39f-6470621f5080"
                        },
                        "target": {
                            "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                            "port": "c03eedf6-1018-4b89-906a-b26d813d5362"
                        },
                        "labels": [
                            {
                                "id": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9:4393d104-65cd-4054-a39f-6470621f5080-node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:c03eedf6-1018-4b89-906a-b26d813d5362",
                                "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
                                "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
                                "source": {
                                    "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                    "port": "4393d104-65cd-4054-a39f-6470621f5080"
                                },
                                "target": {
                                    "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                    "port": "c03eedf6-1018-4b89-906a-b26d813d5362"
                                },
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                },
                                "zIndex": 1,
                                "data": {
                                    "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
                                    "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
                                    "source": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                    "target": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                    "attrs": {
                                        "line": {
                                            "stroke": "#A2B1C3",
                                            "targetMarker": {
                                                "name": "block",
                                                "width": 12,
                                                "height": 8
                                            },
                                            "strokeDasharray": "5 5",
                                            "strokeWidth": 1
                                        }
                                    }
                                },
                                "sourcePort": "4393d104-65cd-4054-a39f-6470621f5080",
                                "targetPort": "c03eedf6-1018-4b89-906a-b26d813d5362"
                            }
                        ]
                    },
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "strokeWidth": 1,
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5"
                            }
                        },
                        "id": "node-52da0fbe-f500-42b3-8770-42301ebfa4cb:6ed6483e-850f-48d7-ad79-c76a19497323-node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:fdea702a-93fb-4dca-aa5f-bf4a80703f91",
                        "targetPortId": "fdea702a-93fb-4dca-aa5f-bf4a80703f91",
                        "sourcePortId": "6ed6483e-850f-48d7-ad79-c76a19497323",
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "fdea702a-93fb-4dca-aa5f-bf4a80703f91",
                            "sourcePortId": "6ed6483e-850f-48d7-ad79-c76a19497323",
                            "source": {
                                "cell": "node-52da0fbe-f500-42b3-8770-42301ebfa4cb",
                                "port": "6ed6483e-850f-48d7-ad79-c76a19497323"
                            },
                            "target": {
                                "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                "port": "fdea702a-93fb-4dca-aa5f-bf4a80703f91"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "fdea702a-93fb-4dca-aa5f-bf4a80703f91",
                                "sourcePortId": "6ed6483e-850f-48d7-ad79-c76a19497323",
                                "source": "node-52da0fbe-f500-42b3-8770-42301ebfa4cb",
                                "target": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-52da0fbe-f500-42b3-8770-42301ebfa4cb:6ed6483e-850f-48d7-ad79-c76a19497323-node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:fdea702a-93fb-4dca-aa5f-bf4a80703f91",
                            "sourcePort": "6ed6483e-850f-48d7-ad79-c76a19497323",
                            "targetPort": "fdea702a-93fb-4dca-aa5f-bf4a80703f91"
                        },
                        "source": {
                            "cell": "node-52da0fbe-f500-42b3-8770-42301ebfa4cb",
                            "port": "6ed6483e-850f-48d7-ad79-c76a19497323"
                        },
                        "target": {
                            "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                            "port": "fdea702a-93fb-4dca-aa5f-bf4a80703f91"
                        },
                        "labels": [
                            {
                                "targetPortId": "fdea702a-93fb-4dca-aa5f-bf4a80703f91",
                                "sourcePortId": "6ed6483e-850f-48d7-ad79-c76a19497323",
                                "source": {
                                    "cell": "node-52da0fbe-f500-42b3-8770-42301ebfa4cb",
                                    "port": "6ed6483e-850f-48d7-ad79-c76a19497323"
                                },
                                "target": {
                                    "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                    "port": "fdea702a-93fb-4dca-aa5f-bf4a80703f91"
                                },
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                },
                                "zIndex": 1,
                                "data": {
                                    "targetPortId": "fdea702a-93fb-4dca-aa5f-bf4a80703f91",
                                    "sourcePortId": "6ed6483e-850f-48d7-ad79-c76a19497323",
                                    "source": "node-52da0fbe-f500-42b3-8770-42301ebfa4cb",
                                    "target": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                    "attrs": {
                                        "line": {
                                            "stroke": "#A2B1C3",
                                            "targetMarker": {
                                                "name": "block",
                                                "width": 12,
                                                "height": 8
                                            },
                                            "strokeDasharray": "5 5",
                                            "strokeWidth": 1
                                        }
                                    }
                                },
                                "id": "node-52da0fbe-f500-42b3-8770-42301ebfa4cb:6ed6483e-850f-48d7-ad79-c76a19497323-node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:fdea702a-93fb-4dca-aa5f-bf4a80703f91",
                                "sourcePort": "6ed6483e-850f-48d7-ad79-c76a19497323",
                                "targetPort": "fdea702a-93fb-4dca-aa5f-bf4a80703f91"
                            }
                        ]
                    }
                ],
                "outgoingEdges": [
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "strokeWidth": 1,
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": [
                                    0,
                                    0
                                ]
                            }
                        },
                        "id": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:d13540af-5af8-47b4-9162-af58bf95c4e0-node-17f391ea-aaa1-4a27-b6cc-1e7299afedac:625a203d-7e28-4782-902e-72c7c4edb208",
                        "targetPortId": "625a203d-7e28-4782-902e-72c7c4edb208",
                        "sourcePortId": "d13540af-5af8-47b4-9162-af58bf95c4e0",
                        "zIndex": 1,
                        "data": {
                            "id": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:d13540af-5af8-47b4-9162-af58bf95c4e0-node-17f391ea-aaa1-4a27-b6cc-1e7299afedac:625a203d-7e28-4782-902e-72c7c4edb208",
                            "targetPortId": "625a203d-7e28-4782-902e-72c7c4edb208",
                            "sourcePortId": "d13540af-5af8-47b4-9162-af58bf95c4e0",
                            "source": {
                                "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                "port": "d13540af-5af8-47b4-9162-af58bf95c4e0"
                            },
                            "target": {
                                "cell": "node-17f391ea-aaa1-4a27-b6cc-1e7299afedac",
                                "port": "625a203d-7e28-4782-902e-72c7c4edb208"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": [
                                        0,
                                        0
                                    ],
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "625a203d-7e28-4782-902e-72c7c4edb208",
                                "sourcePortId": "d13540af-5af8-47b4-9162-af58bf95c4e0",
                                "source": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                "target": "node-17f391ea-aaa1-4a27-b6cc-1e7299afedac",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "sourcePort": "d13540af-5af8-47b4-9162-af58bf95c4e0",
                            "targetPort": "625a203d-7e28-4782-902e-72c7c4edb208",
                            "strokeDasharray": [
                                0,
                                0
                            ]
                        },
                        "strokeDasharray": [
                            0,
                            0
                        ],
                        "source": {
                            "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                            "port": "d13540af-5af8-47b4-9162-af58bf95c4e0"
                        },
                        "target": {
                            "cell": "node-17f391ea-aaa1-4a27-b6cc-1e7299afedac",
                            "port": "625a203d-7e28-4782-902e-72c7c4edb208"
                        },
                        "labels": [
                            {
                                "id": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:d13540af-5af8-47b4-9162-af58bf95c4e0-node-17f391ea-aaa1-4a27-b6cc-1e7299afedac:625a203d-7e28-4782-902e-72c7c4edb208",
                                "targetPortId": "625a203d-7e28-4782-902e-72c7c4edb208",
                                "sourcePortId": "d13540af-5af8-47b4-9162-af58bf95c4e0",
                                "source": {
                                    "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                    "port": "d13540af-5af8-47b4-9162-af58bf95c4e0"
                                },
                                "target": {
                                    "cell": "node-17f391ea-aaa1-4a27-b6cc-1e7299afedac",
                                    "port": "625a203d-7e28-4782-902e-72c7c4edb208"
                                },
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": [
                                            0,
                                            0
                                        ],
                                        "strokeWidth": 1
                                    }
                                },
                                "zIndex": 1,
                                "data": {
                                    "targetPortId": "625a203d-7e28-4782-902e-72c7c4edb208",
                                    "sourcePortId": "d13540af-5af8-47b4-9162-af58bf95c4e0",
                                    "source": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                    "target": "node-17f391ea-aaa1-4a27-b6cc-1e7299afedac",
                                    "attrs": {
                                        "line": {
                                            "stroke": "#A2B1C3",
                                            "targetMarker": {
                                                "name": "block",
                                                "width": 12,
                                                "height": 8
                                            },
                                            "strokeDasharray": "5 5",
                                            "strokeWidth": 1
                                        }
                                    }
                                },
                                "sourcePort": "d13540af-5af8-47b4-9162-af58bf95c4e0",
                                "targetPort": "625a203d-7e28-4782-902e-72c7c4edb208",
                                "strokeDasharray": [
                                    0,
                                    0
                                ]
                            }
                        ]
                    }
                ],
                "fontSize": 18,
                "stroke": "#7ed321"
            },
            {
                "id": "node-17f391ea-aaa1-4a27-b6cc-1e7299afedac",
                "renderKey": "CustomTerminalNode",
                "name": "CustomTerminalNode",
                "label": "大货采购",
                "width": 180,
                "height": 60,
                "ports": {
                    "items": [
                        {
                            "group": "top",
                            "id": "62c9c291-cb67-47d4-9607-13c874b22457"
                        },
                        {
                            "group": "right",
                            "id": "5a9b3c64-e0e9-419b-ae64-72a5b7535241"
                        },
                        {
                            "group": "bottom",
                            "id": "99186481-7369-48ca-836f-1ca776e432d9"
                        },
                        {
                            "group": "left",
                            "id": "625a203d-7e28-4782-902e-72c7c4edb208"
                        }
                    ],
                    "groups": {
                        "top": {
                            "position": {
                                "name": "top"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        },
                        "right": {
                            "position": {
                                "name": "right"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        },
                        "bottom": {
                            "position": {
                                "name": "bottom"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        },
                        "left": {
                            "position": {
                                "name": "left"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        }
                    }
                },
                "originData": {
                    "component": {
                        "compare": null
                    },
                    "name": "CustomTerminalNode",
                    "width": 180,
                    "height": 60,
                    "label": "自定义终端节点"
                },
                "isCustom": true,
                "x": 2670,
                "y": 487,
                "zIndex": 10,
                "fontSize": 18,
                "stroke": "#31d0c6",
                "incomingEdges": [
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "strokeWidth": 1,
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": [
                                    0,
                                    0
                                ]
                            }
                        },
                        "id": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:d13540af-5af8-47b4-9162-af58bf95c4e0-node-17f391ea-aaa1-4a27-b6cc-1e7299afedac:625a203d-7e28-4782-902e-72c7c4edb208",
                        "targetPortId": "625a203d-7e28-4782-902e-72c7c4edb208",
                        "sourcePortId": "d13540af-5af8-47b4-9162-af58bf95c4e0",
                        "zIndex": 1,
                        "data": {
                            "id": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:d13540af-5af8-47b4-9162-af58bf95c4e0-node-17f391ea-aaa1-4a27-b6cc-1e7299afedac:625a203d-7e28-4782-902e-72c7c4edb208",
                            "targetPortId": "625a203d-7e28-4782-902e-72c7c4edb208",
                            "sourcePortId": "d13540af-5af8-47b4-9162-af58bf95c4e0",
                            "source": {
                                "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                "port": "d13540af-5af8-47b4-9162-af58bf95c4e0"
                            },
                            "target": {
                                "cell": "node-17f391ea-aaa1-4a27-b6cc-1e7299afedac",
                                "port": "625a203d-7e28-4782-902e-72c7c4edb208"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": [
                                        0,
                                        0
                                    ],
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "625a203d-7e28-4782-902e-72c7c4edb208",
                                "sourcePortId": "d13540af-5af8-47b4-9162-af58bf95c4e0",
                                "source": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                "target": "node-17f391ea-aaa1-4a27-b6cc-1e7299afedac",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "sourcePort": "d13540af-5af8-47b4-9162-af58bf95c4e0",
                            "targetPort": "625a203d-7e28-4782-902e-72c7c4edb208",
                            "strokeDasharray": [
                                0,
                                0
                            ]
                        },
                        "source": {
                            "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                            "port": "d13540af-5af8-47b4-9162-af58bf95c4e0"
                        },
                        "target": {
                            "cell": "node-17f391ea-aaa1-4a27-b6cc-1e7299afedac",
                            "port": "625a203d-7e28-4782-902e-72c7c4edb208"
                        },
                        "labels": [
                            {
                                "targetPortId": "625a203d-7e28-4782-902e-72c7c4edb208",
                                "sourcePortId": "d13540af-5af8-47b4-9162-af58bf95c4e0",
                                "source": {
                                    "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                    "port": "d13540af-5af8-47b4-9162-af58bf95c4e0"
                                },
                                "target": {
                                    "cell": "node-17f391ea-aaa1-4a27-b6cc-1e7299afedac",
                                    "port": "625a203d-7e28-4782-902e-72c7c4edb208"
                                },
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                },
                                "zIndex": 1,
                                "data": {
                                    "targetPortId": "625a203d-7e28-4782-902e-72c7c4edb208",
                                    "sourcePortId": "d13540af-5af8-47b4-9162-af58bf95c4e0",
                                    "source": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                    "target": "node-17f391ea-aaa1-4a27-b6cc-1e7299afedac",
                                    "attrs": {
                                        "line": {
                                            "stroke": "#A2B1C3",
                                            "targetMarker": {
                                                "name": "block",
                                                "width": 12,
                                                "height": 8
                                            },
                                            "strokeDasharray": "5 5",
                                            "strokeWidth": 1
                                        }
                                    }
                                },
                                "id": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:d13540af-5af8-47b4-9162-af58bf95c4e0-node-17f391ea-aaa1-4a27-b6cc-1e7299afedac:625a203d-7e28-4782-902e-72c7c4edb208",
                                "sourcePort": "d13540af-5af8-47b4-9162-af58bf95c4e0",
                                "targetPort": "625a203d-7e28-4782-902e-72c7c4edb208"
                            }
                        ]
                    }
                ],
                "outgoingEdges": null
            },
            {
                "id": "node-dff1f97b-91c8-44f6-967a-c6a44f8c45b2",
                "renderKey": "Note Left",
                "name": "Note Left",
                "label": "≣",
                "width": 40,
                "height": 120,
                "ports": {
                    "items": [
                        {
                            "group": "top",
                            "id": "1e98e21d-d361-4f64-b2e3-0f42cf9b6c6d"
                        },
                        {
                            "group": "right",
                            "id": "83c64f49-915a-44e3-b642-868349c15033"
                        },
                        {
                            "group": "bottom",
                            "id": "2f1bdcb0-9bf4-46f2-826a-cf35bff4435c"
                        },
                        {
                            "group": "left",
                            "id": "1e128fe7-c933-49e3-8349-52c48ff2cf47"
                        }
                    ],
                    "groups": {
                        "top": {
                            "position": {
                                "name": "top"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        },
                        "right": {
                            "position": {
                                "name": "right"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        },
                        "bottom": {
                            "position": {
                                "name": "bottom"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        },
                        "left": {
                            "position": {
                                "name": "left"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        }
                    }
                },
                "x": 2040,
                "y": 290,
                "zIndex": 10,
                "incomingEdges": [
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "strokeWidth": 1,
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5"
                            }
                        },
                        "id": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9:7f3f41c3-e21e-44f0-87a4-72232643938d-node-dff1f97b-91c8-44f6-967a-c6a44f8c45b2:1e128fe7-c933-49e3-8349-52c48ff2cf47",
                        "targetPortId": "1e128fe7-c933-49e3-8349-52c48ff2cf47",
                        "sourcePortId": "7f3f41c3-e21e-44f0-87a4-72232643938d",
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "1e128fe7-c933-49e3-8349-52c48ff2cf47",
                            "sourcePortId": "7f3f41c3-e21e-44f0-87a4-72232643938d",
                            "source": {
                                "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                "port": "7f3f41c3-e21e-44f0-87a4-72232643938d"
                            },
                            "target": {
                                "cell": "node-dff1f97b-91c8-44f6-967a-c6a44f8c45b2",
                                "port": "1e128fe7-c933-49e3-8349-52c48ff2cf47"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "1e128fe7-c933-49e3-8349-52c48ff2cf47",
                                "sourcePortId": "7f3f41c3-e21e-44f0-87a4-72232643938d",
                                "source": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                "target": "node-dff1f97b-91c8-44f6-967a-c6a44f8c45b2",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9:7f3f41c3-e21e-44f0-87a4-72232643938d-node-dff1f97b-91c8-44f6-967a-c6a44f8c45b2:1e128fe7-c933-49e3-8349-52c48ff2cf47",
                            "sourcePort": "7f3f41c3-e21e-44f0-87a4-72232643938d",
                            "targetPort": "1e128fe7-c933-49e3-8349-52c48ff2cf47"
                        },
                        "source": {
                            "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                            "port": "7f3f41c3-e21e-44f0-87a4-72232643938d"
                        },
                        "target": {
                            "cell": "node-dff1f97b-91c8-44f6-967a-c6a44f8c45b2",
                            "port": "1e128fe7-c933-49e3-8349-52c48ff2cf47"
                        },
                        "labels": [
                            {
                                "targetPortId": "1e128fe7-c933-49e3-8349-52c48ff2cf47",
                                "sourcePortId": "7f3f41c3-e21e-44f0-87a4-72232643938d",
                                "source": {
                                    "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                    "port": "7f3f41c3-e21e-44f0-87a4-72232643938d"
                                },
                                "target": {
                                    "cell": "node-dff1f97b-91c8-44f6-967a-c6a44f8c45b2",
                                    "port": "1e128fe7-c933-49e3-8349-52c48ff2cf47"
                                },
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                },
                                "zIndex": 1,
                                "data": {
                                    "targetPortId": "1e128fe7-c933-49e3-8349-52c48ff2cf47",
                                    "sourcePortId": "7f3f41c3-e21e-44f0-87a4-72232643938d",
                                    "source": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                                    "target": "node-dff1f97b-91c8-44f6-967a-c6a44f8c45b2",
                                    "attrs": {
                                        "line": {
                                            "stroke": "#A2B1C3",
                                            "targetMarker": {
                                                "name": "block",
                                                "width": 12,
                                                "height": 8
                                            },
                                            "strokeDasharray": "5 5",
                                            "strokeWidth": 1
                                        }
                                    }
                                },
                                "id": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9:7f3f41c3-e21e-44f0-87a4-72232643938d-node-dff1f97b-91c8-44f6-967a-c6a44f8c45b2:1e128fe7-c933-49e3-8349-52c48ff2cf47",
                                "sourcePort": "7f3f41c3-e21e-44f0-87a4-72232643938d",
                                "targetPort": "1e128fe7-c933-49e3-8349-52c48ff2cf47"
                            }
                        ]
                    }
                ],
                "outgoingEdges": null
            },
            {
                "id": "node-52da0fbe-f500-42b3-8770-42301ebfa4cb",
                "renderKey": "Note Right",
                "name": "Note Right",
                "label": "≣",
                "width": 40,
                "height": 120,
                "ports": {
                    "items": [
                        {
                            "group": "top",
                            "id": "d4be60f4-c12e-44ce-9764-c75a54f840e9"
                        },
                        {
                            "group": "right",
                            "id": "6ed6483e-850f-48d7-ad79-c76a19497323"
                        },
                        {
                            "group": "bottom",
                            "id": "a9374f12-9486-4d5c-8ed5-bfaf975a1fcd"
                        },
                        {
                            "group": "left",
                            "id": "3237c88f-fe1f-4f52-a180-f55192a22b51"
                        }
                    ],
                    "groups": {
                        "top": {
                            "position": {
                                "name": "top"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        },
                        "right": {
                            "position": {
                                "name": "right"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        },
                        "bottom": {
                            "position": {
                                "name": "bottom"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        },
                        "left": {
                            "position": {
                                "name": "left"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        }
                    }
                },
                "x": 2280,
                "y": 290,
                "zIndex": 10,
                "incomingEdges": null,
                "outgoingEdges": [
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "strokeWidth": 1,
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": "5 5"
                            }
                        },
                        "id": "node-52da0fbe-f500-42b3-8770-42301ebfa4cb:6ed6483e-850f-48d7-ad79-c76a19497323-node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:fdea702a-93fb-4dca-aa5f-bf4a80703f91",
                        "targetPortId": "fdea702a-93fb-4dca-aa5f-bf4a80703f91",
                        "sourcePortId": "6ed6483e-850f-48d7-ad79-c76a19497323",
                        "zIndex": 1,
                        "data": {
                            "targetPortId": "fdea702a-93fb-4dca-aa5f-bf4a80703f91",
                            "sourcePortId": "6ed6483e-850f-48d7-ad79-c76a19497323",
                            "source": {
                                "cell": "node-52da0fbe-f500-42b3-8770-42301ebfa4cb",
                                "port": "6ed6483e-850f-48d7-ad79-c76a19497323"
                            },
                            "target": {
                                "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                "port": "fdea702a-93fb-4dca-aa5f-bf4a80703f91"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": "5 5",
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "fdea702a-93fb-4dca-aa5f-bf4a80703f91",
                                "sourcePortId": "6ed6483e-850f-48d7-ad79-c76a19497323",
                                "source": "node-52da0fbe-f500-42b3-8770-42301ebfa4cb",
                                "target": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "id": "node-52da0fbe-f500-42b3-8770-42301ebfa4cb:6ed6483e-850f-48d7-ad79-c76a19497323-node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:fdea702a-93fb-4dca-aa5f-bf4a80703f91",
                            "sourcePort": "6ed6483e-850f-48d7-ad79-c76a19497323",
                            "targetPort": "fdea702a-93fb-4dca-aa5f-bf4a80703f91"
                        },
                        "source": {
                            "cell": "node-52da0fbe-f500-42b3-8770-42301ebfa4cb",
                            "port": "6ed6483e-850f-48d7-ad79-c76a19497323"
                        },
                        "target": {
                            "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                            "port": "fdea702a-93fb-4dca-aa5f-bf4a80703f91"
                        },
                        "labels": [
                            {
                                "targetPortId": "fdea702a-93fb-4dca-aa5f-bf4a80703f91",
                                "sourcePortId": "6ed6483e-850f-48d7-ad79-c76a19497323",
                                "source": {
                                    "cell": "node-52da0fbe-f500-42b3-8770-42301ebfa4cb",
                                    "port": "6ed6483e-850f-48d7-ad79-c76a19497323"
                                },
                                "target": {
                                    "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                    "port": "fdea702a-93fb-4dca-aa5f-bf4a80703f91"
                                },
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                },
                                "zIndex": 1,
                                "data": {
                                    "targetPortId": "fdea702a-93fb-4dca-aa5f-bf4a80703f91",
                                    "sourcePortId": "6ed6483e-850f-48d7-ad79-c76a19497323",
                                    "source": "node-52da0fbe-f500-42b3-8770-42301ebfa4cb",
                                    "target": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                                    "attrs": {
                                        "line": {
                                            "stroke": "#A2B1C3",
                                            "targetMarker": {
                                                "name": "block",
                                                "width": 12,
                                                "height": 8
                                            },
                                            "strokeDasharray": "5 5",
                                            "strokeWidth": 1
                                        }
                                    }
                                },
                                "id": "node-52da0fbe-f500-42b3-8770-42301ebfa4cb:6ed6483e-850f-48d7-ad79-c76a19497323-node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:fdea702a-93fb-4dca-aa5f-bf4a80703f91",
                                "sourcePort": "6ed6483e-850f-48d7-ad79-c76a19497323",
                                "targetPort": "fdea702a-93fb-4dca-aa5f-bf4a80703f91"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "node-9019f473-62dd-4a56-8e51-43cf85e0dc54",
                "renderKey": "CustomTerminalNode",
                "name": "CustomTerminalNode",
                "label": "开发做初步策略",
                "width": 180,
                "height": 60,
                "ports": {
                    "items": [
                        {
                            "group": "top",
                            "id": "591eb409-4dcb-4f5c-89da-bf618d87f73c"
                        },
                        {
                            "group": "right",
                            "id": "9ddbb5ce-e63e-4bbf-8ba3-10bb3635a0ea"
                        },
                        {
                            "group": "bottom",
                            "id": "9e6dc7ff-5baf-4885-8f9f-d8ecc8cef7ba"
                        },
                        {
                            "group": "left",
                            "id": "3f919bc1-5dc9-4927-9966-add4afcb3ab0"
                        }
                    ],
                    "groups": {
                        "top": {
                            "position": {
                                "name": "top"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        },
                        "right": {
                            "position": {
                                "name": "right"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        },
                        "bottom": {
                            "position": {
                                "name": "bottom"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        },
                        "left": {
                            "position": {
                                "name": "left"
                            },
                            "attrs": {
                                "circle": {
                                    "r": 4,
                                    "magnet": true,
                                    "stroke": "#31d0c6",
                                    "strokeWidth": 2,
                                    "fill": "#fff",
                                    "style": {
                                        "visibility": "hidden"
                                    }
                                }
                            },
                            "zIndex": 10
                        }
                    }
                },
                "originData": {
                    "component": {
                        "compare": null
                    },
                    "name": "CustomTerminalNode",
                    "width": 180,
                    "height": 60,
                    "label": "自定义终端节点"
                },
                "isCustom": true,
                "x": 507,
                "y": 487,
                "zIndex": 10,
                "fontSize": 18,
                "fill": "#f0f0f0",
                "stroke": "#bfbfbf",
                "incomingEdges": null,
                "outgoingEdges": [
                    {
                        "shape": "edge",
                        "attrs": {
                            "line": {
                                "stroke": "#A2B1C3",
                                "strokeWidth": 1,
                                "targetMarker": {
                                    "name": "block",
                                    "width": 12,
                                    "height": 8
                                },
                                "strokeDasharray": [
                                    0,
                                    0
                                ]
                            }
                        },
                        "id": "node-9019f473-62dd-4a56-8e51-43cf85e0dc54:9ddbb5ce-e63e-4bbf-8ba3-10bb3635a0ea-node-5c5e445a-f775-4d1b-8a55-554efccfd476:314f73e8-5ea1-4265-aaac-3f5a20fdbbb5",
                        "targetPortId": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5",
                        "sourcePortId": "9ddbb5ce-e63e-4bbf-8ba3-10bb3635a0ea",
                        "zIndex": 1,
                        "data": {
                            "id": "node-9019f473-62dd-4a56-8e51-43cf85e0dc54:9ddbb5ce-e63e-4bbf-8ba3-10bb3635a0ea-node-5c5e445a-f775-4d1b-8a55-554efccfd476:314f73e8-5ea1-4265-aaac-3f5a20fdbbb5",
                            "targetPortId": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5",
                            "sourcePortId": "9ddbb5ce-e63e-4bbf-8ba3-10bb3635a0ea",
                            "source": {
                                "cell": "node-9019f473-62dd-4a56-8e51-43cf85e0dc54",
                                "port": "9ddbb5ce-e63e-4bbf-8ba3-10bb3635a0ea"
                            },
                            "target": {
                                "cell": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                                "port": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5"
                            },
                            "attrs": {
                                "line": {
                                    "stroke": "#A2B1C3",
                                    "targetMarker": {
                                        "name": "block",
                                        "width": 12,
                                        "height": 8
                                    },
                                    "strokeDasharray": [
                                        0,
                                        0
                                    ],
                                    "strokeWidth": 1
                                }
                            },
                            "zIndex": 1,
                            "data": {
                                "targetPortId": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5",
                                "sourcePortId": "9ddbb5ce-e63e-4bbf-8ba3-10bb3635a0ea",
                                "source": "node-9019f473-62dd-4a56-8e51-43cf85e0dc54",
                                "target": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                }
                            },
                            "sourcePort": "9ddbb5ce-e63e-4bbf-8ba3-10bb3635a0ea",
                            "targetPort": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5",
                            "strokeDasharray": [
                                0,
                                0
                            ]
                        },
                        "source": {
                            "cell": "node-9019f473-62dd-4a56-8e51-43cf85e0dc54",
                            "port": "9ddbb5ce-e63e-4bbf-8ba3-10bb3635a0ea"
                        },
                        "target": {
                            "cell": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                            "port": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5"
                        },
                        "labels": [
                            {
                                "targetPortId": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5",
                                "sourcePortId": "9ddbb5ce-e63e-4bbf-8ba3-10bb3635a0ea",
                                "source": {
                                    "cell": "node-9019f473-62dd-4a56-8e51-43cf85e0dc54",
                                    "port": "9ddbb5ce-e63e-4bbf-8ba3-10bb3635a0ea"
                                },
                                "target": {
                                    "cell": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                                    "port": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5"
                                },
                                "attrs": {
                                    "line": {
                                        "stroke": "#A2B1C3",
                                        "targetMarker": {
                                            "name": "block",
                                            "width": 12,
                                            "height": 8
                                        },
                                        "strokeDasharray": "5 5",
                                        "strokeWidth": 1
                                    }
                                },
                                "zIndex": 1,
                                "data": {
                                    "targetPortId": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5",
                                    "sourcePortId": "9ddbb5ce-e63e-4bbf-8ba3-10bb3635a0ea",
                                    "source": "node-9019f473-62dd-4a56-8e51-43cf85e0dc54",
                                    "target": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                                    "attrs": {
                                        "line": {
                                            "stroke": "#A2B1C3",
                                            "targetMarker": {
                                                "name": "block",
                                                "width": 12,
                                                "height": 8
                                            },
                                            "strokeDasharray": "5 5",
                                            "strokeWidth": 1
                                        }
                                    }
                                },
                                "id": "node-9019f473-62dd-4a56-8e51-43cf85e0dc54:9ddbb5ce-e63e-4bbf-8ba3-10bb3635a0ea-node-5c5e445a-f775-4d1b-8a55-554efccfd476:314f73e8-5ea1-4265-aaac-3f5a20fdbbb5",
                                "sourcePort": "9ddbb5ce-e63e-4bbf-8ba3-10bb3635a0ea",
                                "targetPort": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5"
                            }
                        ]
                    }
                ]
            }
        ],
        "edges": [
            {
                "id": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0:c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d-node-164790c3-ba8f-4b4a-bef0-4006f000efa9:ec334731-f845-4b50-b660-0edf1242edd1",
                "targetPortId": "ec334731-f845-4b50-b660-0edf1242edd1",
                "sourcePortId": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d",
                "source": {
                    "cell": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0",
                    "port": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d"
                },
                "target": {
                    "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                    "port": "ec334731-f845-4b50-b660-0edf1242edd1"
                },
                "attrs": {
                    "line": {
                        "stroke": "#A2B1C3",
                        "targetMarker": {
                            "name": "block",
                            "width": 12,
                            "height": 8
                        },
                        "strokeDasharray": [
                            0,
                            0
                        ],
                        "strokeWidth": 1
                    }
                },
                "zIndex": 1,
                "data": {
                    "targetPortId": "ec334731-f845-4b50-b660-0edf1242edd1",
                    "sourcePortId": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d",
                    "source": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0",
                    "target": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5",
                            "strokeWidth": 1
                        }
                    }
                },
                "sourcePort": "c20ea1eb-0d1b-4efd-ae90-6c274cd4e99d",
                "targetPort": "ec334731-f845-4b50-b660-0edf1242edd1",
                "strokeDasharray": [
                    0,
                    0
                ]
            },
            {
                "id": "node-c34e4a14-d014-456c-bcf3-67251212ce82:9b30eaae-7513-4afa-9f81-e62f16bc30e1-node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0:da7c9f33-6c29-4652-b8df-4b9c4bf7e1c0",
                "targetPortId": "da7c9f33-6c29-4652-b8df-4b9c4bf7e1c0",
                "sourcePortId": "9b30eaae-7513-4afa-9f81-e62f16bc30e1",
                "source": {
                    "cell": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                    "port": "9b30eaae-7513-4afa-9f81-e62f16bc30e1"
                },
                "target": {
                    "cell": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0",
                    "port": "da7c9f33-6c29-4652-b8df-4b9c4bf7e1c0"
                },
                "attrs": {
                    "line": {
                        "stroke": "#A2B1C3",
                        "targetMarker": {
                            "name": "block",
                            "width": 12,
                            "height": 8
                        },
                        "strokeDasharray": "5 5",
                        "strokeWidth": 1,
                        "label": "是"
                    },
                    "text": {
                        "fontSize": 18
                    }
                },
                "zIndex": 1,
                "data": {
                    "targetPortId": "da7c9f33-6c29-4652-b8df-4b9c4bf7e1c0",
                    "sourcePortId": "9b30eaae-7513-4afa-9f81-e62f16bc30e1",
                    "source": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                    "target": "node-c3941f3b-9755-4f85-8b97-234ba7e9c7d0",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5",
                            "strokeWidth": 1
                        }
                    }
                },
                "sourcePort": "9b30eaae-7513-4afa-9f81-e62f16bc30e1",
                "targetPort": "da7c9f33-6c29-4652-b8df-4b9c4bf7e1c0",
                "label": "是",
                "fontSize": 18
            },
            {
                "id": "node-c34e4a14-d014-456c-bcf3-67251212ce82:5581f842-9ebf-46c7-8e9c-fcbb32e4881e-node-125b649f-a496-4a5a-81ef-d37b5a36c2a9:ff554a0b-0932-47d5-8a0c-e44f0c6df853",
                "targetPortId": "ff554a0b-0932-47d5-8a0c-e44f0c6df853",
                "sourcePortId": "5581f842-9ebf-46c7-8e9c-fcbb32e4881e",
                "source": {
                    "cell": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                    "port": "5581f842-9ebf-46c7-8e9c-fcbb32e4881e"
                },
                "target": {
                    "cell": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                    "port": "ff554a0b-0932-47d5-8a0c-e44f0c6df853"
                },
                "attrs": {
                    "line": {
                        "stroke": "#A2B1C3",
                        "targetMarker": {
                            "name": "block",
                            "width": 12,
                            "height": 8
                        },
                        "strokeDasharray": "5 5",
                        "strokeWidth": 1,
                        "label": "否"
                    },
                    "text": {
                        "fontSize": 18
                    }
                },
                "zIndex": 1,
                "data": {
                    "targetPortId": "ff554a0b-0932-47d5-8a0c-e44f0c6df853",
                    "sourcePortId": "5581f842-9ebf-46c7-8e9c-fcbb32e4881e",
                    "source": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                    "target": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5",
                            "strokeWidth": 1
                        }
                    }
                },
                "sourcePort": "5581f842-9ebf-46c7-8e9c-fcbb32e4881e",
                "targetPort": "ff554a0b-0932-47d5-8a0c-e44f0c6df853",
                "label": "否",
                "fontSize": 18
            },
            {
                "id": "node-5c5e445a-f775-4d1b-8a55-554efccfd476:b79e9d70-eabb-428f-9bd0-0f424154699c-node-39207817-50a6-4ddd-abcd-30829227705c:bdcbf8cc-3b74-4140-8d59-809f190719e3",
                "targetPortId": "bdcbf8cc-3b74-4140-8d59-809f190719e3",
                "sourcePortId": "b79e9d70-eabb-428f-9bd0-0f424154699c",
                "source": {
                    "cell": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                    "port": "b79e9d70-eabb-428f-9bd0-0f424154699c"
                },
                "target": {
                    "cell": "node-39207817-50a6-4ddd-abcd-30829227705c",
                    "port": "bdcbf8cc-3b74-4140-8d59-809f190719e3"
                },
                "attrs": {
                    "line": {
                        "stroke": "#A2B1C3",
                        "targetMarker": {
                            "name": "block",
                            "width": 12,
                            "height": 8
                        },
                        "strokeDasharray": [
                            0,
                            0
                        ],
                        "strokeWidth": 1
                    }
                },
                "zIndex": 1,
                "data": {
                    "targetPortId": "bdcbf8cc-3b74-4140-8d59-809f190719e3",
                    "sourcePortId": "b79e9d70-eabb-428f-9bd0-0f424154699c",
                    "source": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                    "target": "node-39207817-50a6-4ddd-abcd-30829227705c",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5",
                            "strokeWidth": 1
                        }
                    }
                },
                "sourcePort": "b79e9d70-eabb-428f-9bd0-0f424154699c",
                "targetPort": "bdcbf8cc-3b74-4140-8d59-809f190719e3",
                "strokeDasharray": [
                    0,
                    0
                ]
            },
            {
                "id": "node-5c5e445a-f775-4d1b-8a55-554efccfd476:0eda0ed5-08fa-4441-9e98-510c6408be82-node-125b649f-a496-4a5a-81ef-d37b5a36c2a9:283352b4-41ef-43a9-b0b0-6529e3b67e9b",
                "targetPortId": "283352b4-41ef-43a9-b0b0-6529e3b67e9b",
                "sourcePortId": "0eda0ed5-08fa-4441-9e98-510c6408be82",
                "source": {
                    "cell": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                    "port": "0eda0ed5-08fa-4441-9e98-510c6408be82"
                },
                "target": {
                    "cell": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                    "port": "283352b4-41ef-43a9-b0b0-6529e3b67e9b"
                },
                "attrs": {
                    "line": {
                        "stroke": "#A2B1C3",
                        "targetMarker": {
                            "name": "block",
                            "width": 12,
                            "height": 8
                        },
                        "strokeDasharray": [
                            0,
                            0
                        ],
                        "strokeWidth": 1
                    }
                },
                "zIndex": 1,
                "data": {
                    "targetPortId": "283352b4-41ef-43a9-b0b0-6529e3b67e9b",
                    "sourcePortId": "0eda0ed5-08fa-4441-9e98-510c6408be82",
                    "source": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                    "target": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5",
                            "strokeWidth": 1
                        }
                    }
                },
                "sourcePort": "0eda0ed5-08fa-4441-9e98-510c6408be82",
                "targetPort": "283352b4-41ef-43a9-b0b0-6529e3b67e9b",
                "strokeDasharray": [
                    0,
                    0
                ]
            },
            {
                "id": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:d13540af-5af8-47b4-9162-af58bf95c4e0-node-17f391ea-aaa1-4a27-b6cc-1e7299afedac:625a203d-7e28-4782-902e-72c7c4edb208",
                "targetPortId": "625a203d-7e28-4782-902e-72c7c4edb208",
                "sourcePortId": "d13540af-5af8-47b4-9162-af58bf95c4e0",
                "source": {
                    "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                    "port": "d13540af-5af8-47b4-9162-af58bf95c4e0"
                },
                "target": {
                    "cell": "node-17f391ea-aaa1-4a27-b6cc-1e7299afedac",
                    "port": "625a203d-7e28-4782-902e-72c7c4edb208"
                },
                "attrs": {
                    "line": {
                        "stroke": "#A2B1C3",
                        "targetMarker": {
                            "name": "block",
                            "width": 12,
                            "height": 8
                        },
                        "strokeDasharray": [
                            0,
                            0
                        ],
                        "strokeWidth": 1
                    }
                },
                "zIndex": 1,
                "data": {
                    "targetPortId": "625a203d-7e28-4782-902e-72c7c4edb208",
                    "sourcePortId": "d13540af-5af8-47b4-9162-af58bf95c4e0",
                    "source": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                    "target": "node-17f391ea-aaa1-4a27-b6cc-1e7299afedac",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5",
                            "strokeWidth": 1
                        }
                    }
                },
                "sourcePort": "d13540af-5af8-47b4-9162-af58bf95c4e0",
                "targetPort": "625a203d-7e28-4782-902e-72c7c4edb208",
                "strokeDasharray": [
                    0,
                    0
                ]
            },
            {
                "id": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9:4393d104-65cd-4054-a39f-6470621f5080-node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:c03eedf6-1018-4b89-906a-b26d813d5362",
                "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
                "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
                "source": {
                    "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                    "port": "4393d104-65cd-4054-a39f-6470621f5080"
                },
                "target": {
                    "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                    "port": "c03eedf6-1018-4b89-906a-b26d813d5362"
                },
                "attrs": {
                    "line": {
                        "stroke": "#A2B1C3",
                        "targetMarker": {
                            "name": "block",
                            "width": 12,
                            "height": 8
                        },
                        "strokeDasharray": "5 5",
                        "strokeWidth": 1
                    }
                },
                "zIndex": 1,
                "data": {
                    "targetPortId": "c03eedf6-1018-4b89-906a-b26d813d5362",
                    "sourcePortId": "4393d104-65cd-4054-a39f-6470621f5080",
                    "source": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                    "target": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5",
                            "strokeWidth": 1
                        }
                    }
                },
                "sourcePort": "4393d104-65cd-4054-a39f-6470621f5080",
                "targetPort": "c03eedf6-1018-4b89-906a-b26d813d5362"
            },
            {
                "id": "node-39207817-50a6-4ddd-abcd-30829227705c:d460e613-a8fe-4053-9698-d8b3040c9b74-node-c34e4a14-d014-456c-bcf3-67251212ce82:db2cdff6-f584-4bb9-8a8b-84d153951b17",
                "targetPortId": "db2cdff6-f584-4bb9-8a8b-84d153951b17",
                "sourcePortId": "d460e613-a8fe-4053-9698-d8b3040c9b74",
                "source": {
                    "cell": "node-39207817-50a6-4ddd-abcd-30829227705c",
                    "port": "d460e613-a8fe-4053-9698-d8b3040c9b74"
                },
                "target": {
                    "cell": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                    "port": "db2cdff6-f584-4bb9-8a8b-84d153951b17"
                },
                "attrs": {
                    "line": {
                        "stroke": "#A2B1C3",
                        "targetMarker": {
                            "name": "block",
                            "width": 12,
                            "height": 8
                        },
                        "strokeDasharray": [
                            0,
                            0
                        ],
                        "strokeWidth": 1
                    }
                },
                "zIndex": 1,
                "data": {
                    "targetPortId": "db2cdff6-f584-4bb9-8a8b-84d153951b17",
                    "sourcePortId": "d460e613-a8fe-4053-9698-d8b3040c9b74",
                    "source": "node-39207817-50a6-4ddd-abcd-30829227705c",
                    "target": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5",
                            "strokeWidth": 1
                        }
                    }
                },
                "sourcePort": "d460e613-a8fe-4053-9698-d8b3040c9b74",
                "targetPort": "db2cdff6-f584-4bb9-8a8b-84d153951b17",
                "strokeDasharray": [
                    0,
                    0
                ]
            },
            {
                "id": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9:afbff0aa-f7c3-4471-a5e9-329ec5d2bab0-node-c34e4a14-d014-456c-bcf3-67251212ce82:9751fb89-7e25-4aa4-8eaf-7db41d695da9",
                "targetPortId": "9751fb89-7e25-4aa4-8eaf-7db41d695da9",
                "sourcePortId": "afbff0aa-f7c3-4471-a5e9-329ec5d2bab0",
                "source": {
                    "cell": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                    "port": "afbff0aa-f7c3-4471-a5e9-329ec5d2bab0"
                },
                "target": {
                    "cell": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                    "port": "9751fb89-7e25-4aa4-8eaf-7db41d695da9"
                },
                "attrs": {
                    "line": {
                        "stroke": "#A2B1C3",
                        "targetMarker": {
                            "name": "block",
                            "width": 12,
                            "height": 8
                        },
                        "strokeDasharray": [
                            0,
                            0
                        ],
                        "strokeWidth": 1
                    }
                },
                "zIndex": 1,
                "data": {
                    "targetPortId": "9751fb89-7e25-4aa4-8eaf-7db41d695da9",
                    "sourcePortId": "afbff0aa-f7c3-4471-a5e9-329ec5d2bab0",
                    "source": "node-125b649f-a496-4a5a-81ef-d37b5a36c2a9",
                    "target": "node-c34e4a14-d014-456c-bcf3-67251212ce82",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5",
                            "strokeWidth": 1
                        }
                    }
                },
                "sourcePort": "afbff0aa-f7c3-4471-a5e9-329ec5d2bab0",
                "targetPort": "9751fb89-7e25-4aa4-8eaf-7db41d695da9",
                "strokeDasharray": [
                    0,
                    0
                ]
            },
            {
                "id": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9:7f3f41c3-e21e-44f0-87a4-72232643938d-node-dff1f97b-91c8-44f6-967a-c6a44f8c45b2:1e128fe7-c933-49e3-8349-52c48ff2cf47",
                "targetPortId": "1e128fe7-c933-49e3-8349-52c48ff2cf47",
                "sourcePortId": "7f3f41c3-e21e-44f0-87a4-72232643938d",
                "source": {
                    "cell": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                    "port": "7f3f41c3-e21e-44f0-87a4-72232643938d"
                },
                "target": {
                    "cell": "node-dff1f97b-91c8-44f6-967a-c6a44f8c45b2",
                    "port": "1e128fe7-c933-49e3-8349-52c48ff2cf47"
                },
                "attrs": {
                    "line": {
                        "stroke": "#A2B1C3",
                        "targetMarker": {
                            "name": "block",
                            "width": 12,
                            "height": 8
                        },
                        "strokeDasharray": "5 5",
                        "strokeWidth": 1
                    }
                },
                "zIndex": 1,
                "data": {
                    "targetPortId": "1e128fe7-c933-49e3-8349-52c48ff2cf47",
                    "sourcePortId": "7f3f41c3-e21e-44f0-87a4-72232643938d",
                    "source": "node-164790c3-ba8f-4b4a-bef0-4006f000efa9",
                    "target": "node-dff1f97b-91c8-44f6-967a-c6a44f8c45b2",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5",
                            "strokeWidth": 1
                        }
                    }
                },
                "sourcePort": "7f3f41c3-e21e-44f0-87a4-72232643938d",
                "targetPort": "1e128fe7-c933-49e3-8349-52c48ff2cf47"
            },
            {
                "id": "node-52da0fbe-f500-42b3-8770-42301ebfa4cb:6ed6483e-850f-48d7-ad79-c76a19497323-node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268:fdea702a-93fb-4dca-aa5f-bf4a80703f91",
                "targetPortId": "fdea702a-93fb-4dca-aa5f-bf4a80703f91",
                "sourcePortId": "6ed6483e-850f-48d7-ad79-c76a19497323",
                "source": {
                    "cell": "node-52da0fbe-f500-42b3-8770-42301ebfa4cb",
                    "port": "6ed6483e-850f-48d7-ad79-c76a19497323"
                },
                "target": {
                    "cell": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                    "port": "fdea702a-93fb-4dca-aa5f-bf4a80703f91"
                },
                "attrs": {
                    "line": {
                        "stroke": "#A2B1C3",
                        "targetMarker": {
                            "name": "block",
                            "width": 12,
                            "height": 8
                        },
                        "strokeDasharray": "5 5",
                        "strokeWidth": 1
                    }
                },
                "zIndex": 1,
                "data": {
                    "targetPortId": "fdea702a-93fb-4dca-aa5f-bf4a80703f91",
                    "sourcePortId": "6ed6483e-850f-48d7-ad79-c76a19497323",
                    "source": "node-52da0fbe-f500-42b3-8770-42301ebfa4cb",
                    "target": "node-91a6c94a-1f6e-4ba6-9c3b-b7240a2d7268",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5",
                            "strokeWidth": 1
                        }
                    }
                },
                "sourcePort": "6ed6483e-850f-48d7-ad79-c76a19497323",
                "targetPort": "fdea702a-93fb-4dca-aa5f-bf4a80703f91"
            },
            {
                "id": "node-9019f473-62dd-4a56-8e51-43cf85e0dc54:9ddbb5ce-e63e-4bbf-8ba3-10bb3635a0ea-node-5c5e445a-f775-4d1b-8a55-554efccfd476:314f73e8-5ea1-4265-aaac-3f5a20fdbbb5",
                "targetPortId": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5",
                "sourcePortId": "9ddbb5ce-e63e-4bbf-8ba3-10bb3635a0ea",
                "source": {
                    "cell": "node-9019f473-62dd-4a56-8e51-43cf85e0dc54",
                    "port": "9ddbb5ce-e63e-4bbf-8ba3-10bb3635a0ea"
                },
                "target": {
                    "cell": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                    "port": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5"
                },
                "attrs": {
                    "line": {
                        "stroke": "#A2B1C3",
                        "targetMarker": {
                            "name": "block",
                            "width": 12,
                            "height": 8
                        },
                        "strokeDasharray": [
                            0,
                            0
                        ],
                        "strokeWidth": 1
                    }
                },
                "zIndex": 1,
                "data": {
                    "targetPortId": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5",
                    "sourcePortId": "9ddbb5ce-e63e-4bbf-8ba3-10bb3635a0ea",
                    "source": "node-9019f473-62dd-4a56-8e51-43cf85e0dc54",
                    "target": "node-5c5e445a-f775-4d1b-8a55-554efccfd476",
                    "attrs": {
                        "line": {
                            "stroke": "#A2B1C3",
                            "targetMarker": {
                                "name": "block",
                                "width": 12,
                                "height": 8
                            },
                            "strokeDasharray": "5 5",
                            "strokeWidth": 1
                        }
                    }
                },
                "sourcePort": "9ddbb5ce-e63e-4bbf-8ba3-10bb3635a0ea",
                "targetPort": "314f73e8-5ea1-4265-aaac-3f5a20fdbbb5",
                "strokeDasharray": [
                    0,
                    0
                ]
            }
        ]
    }
}