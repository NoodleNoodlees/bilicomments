#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_USERNAME_LEN 100
#define MAX_LINE_LEN 200
#define MAX_USERS 40000

const char* provinces[] = {
    "北京", "天津", "上海", "重庆",
    "河北", "山西", "辽宁", "吉林", "黑龙江",
    "江苏", "浙江", "安徽", "福建", "江西", "山东",
    "河南", "湖北", "湖南", "广东", "海南",
    "四川", "贵州", "云南", "陕西", "甘肃", "青海",
    "台湾",
    "内蒙古", "广西", "西藏", "宁夏", "新疆",
    "香港", "澳门"
};
const int province_count = 34;
const int province_weights[] = {
    5, 5, 7, 5,
    3, 2, 3, 2, 2,
    8, 8, 2, 6, 2, 7,
    4, 4, 4, 10, 2,
    8, 2, 2, 3, 1, 1,
    2,
    1, 2, 1, 1, 1,
    2, 1
};

unsigned int simple_hash(const char* str) {
    unsigned int hash = 5381;
    int c;
    while ((c = *str++))
        hash = ((hash << 5) + hash) + c;
    return hash;
}

int pick_province(const char* username) {
    // 构造权重累加表
    int cum_weights[province_count];
    int total = 0;
    for (int i = 0; i < province_count; ++i) {
        total += province_weights[i];
        cum_weights[i] = total;
    }

    unsigned int h1 = simple_hash(username);
    unsigned int h2 = simple_hash(username + 1); // 不同偏移用于多哈希

    int threshold = h1 % 100;
    int idx;

    if (threshold < 60) {
        // 权重分布路径
        int rand = h2 % total;
        idx = 0;
        while (idx < province_count && rand >= cum_weights[idx]) {
            idx++;
        }
        if (idx >= province_count) idx = province_count - 1;
    } else {
        // 完全随机路径
        idx = h2 % province_count;
    }

    return idx;
}

int main() {
    FILE* infile = fopen("username.txt", "r");
    if (!infile) {
        perror("无法打开 username.txt");
        return 1;
    }

    FILE* outfile = fopen("ipvector.txt", "w");
    if (!outfile) {
        perror("无法创建 ipvector.txt");
        fclose(infile);
        return 1;
    }

    char line[MAX_LINE_LEN];
    int count = 0;

    while (fgets(line, sizeof(line), infile)) {
        line[strcspn(line, "\r\n")] = '\0'; // 去除换行符
        if (strlen(line) == 0) continue;

        int province_index = pick_province(line);
        fprintf(outfile, "%s\n", provinces[province_index]);

        count++;
        if (count >= MAX_USERS) break;
    }

    fclose(infile);
    fclose(outfile);
    return 0;
}

