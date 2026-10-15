
const partsByUsage = {
    armor: [
        "头盔镶板",
        "胸甲镶板",
        "护腿镶板",
        "靴子镶板",
        "盾牌基底",
        "皮革",
        "锁链基底"
    ],

    ranged: [
        "刀刃",
        "吹管",
        "吹嘴",
        "弓弦",
        "弓臂",
        "弓把",
        "储液器",
        "坚韧手柄",
        "宽刃",
        "枪管",
        "蓄电池",
        "激光传导器",
        "离子化腔"
    ],

    tool: [
        "坚韧手柄",
        "三叉戟头",
        "宽刃",
        "小型剑刃",
        "魂珠",
        "工具手柄",
        "长剑刃",
        "巨刃",
        "护手",
        "小型斧刃",
        "镐头",
        "直刀刃",
        "绑定结",
        "圆板",
        "窄刃",
        "大板",
        "核心电池",
        "板斧刃",
        "挖掘核心",
        "巨剑核心",
        "牌板",
        "锤头",
        "骑士圆环",
        "沉重核心",
        "约束厂发生器",
        "巨人剑刃",
        "感知宝石"
    ],

    other: [
        "弓弦",
        "弓臂",
        "紫水晶碎片",
        "绑定结",
        "法杖头部",
        "传送核心",
        "坚韧手柄",
        "戒环",
        "镶饰"
    ],

    special: [
        "魂珠",
        "储液器",
        "枪管",
        "蓄电池",
        "激光传导器",
        "离子化腔",
        "核心电池",
        "挖掘核心",
        "巨剑核心",
        "骑士圆环",
        "沉重核心",
        "约束厂发生器",
        "巨人剑刃",
        "感知宝石"
    ]
};

const usageFilter = document.querySelector("#usage-filter");
const partFilter = document.querySelector("#part-filter");

usageFilter.addEventListener("change", () => {
    const usage = usageFilter.value;

    // 清除上一次用途对应的选项
    partFilter.replaceChildren();

    if (!usage) {
        partFilter.add(new Option("请先选择用途", ""));
        partFilter.disabled = true;
        return;
    }

    // 添加默认选项
    partFilter.add(new Option("全部部件", ""));

    // 根据用途添加对应部件
    for (const part of partsByUsage[usage]) {
        partFilter.add(new Option(part, part));
    }

    partFilter.disabled = false;
});
