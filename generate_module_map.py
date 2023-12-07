

import os
import re

def find_requires(directory):
    js_files = [file for file in os.listdir(directory) if file.endswith(".js")]

    modules = set([])
    for js_file in js_files:
        file_path = os.path.join(directory, js_file)
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()

            # 使用正则表达式匹配 require('./xxx')，提取 xxx 部分
            matches = re.findall(r"require\('./(.*)'\)", content)

            if matches:
                print(f"In file {js_file}:")
                for match in matches:
                    print(f"  - {match}")
                    modules.add(match)

    
    print(modules)

    content = ""
    for module in modules:
        content += "import * as {} from '../netron/source/{}';\n".format(module.replace('-', '_'), module)

    content += "export default {"
    for module in modules:
        content += "'./{}': {},\n".format(module, module.replace('-', '_'))
    content += '}'

    print(content)

    with open('src/modules.js', 'w+') as f:
        f.write(content)
    


# 替换 'your_directory' 为实际目录路径
directory_path = 'netron/source'
find_requires(directory_path)
