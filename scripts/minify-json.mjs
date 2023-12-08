import fs from 'fs/promises';
import path from 'path';

async function minifyAndWriteJson(inputDir, outputDir) {
    try {
        // 读取输入目录下的所有文件
        const files = await fs.readdir(inputDir);

        // 并行处理每个文件
        await Promise.all(
            files.map(async (file) => {
                // 确保是 JSON 文件
                if (path.extname(file) === '.json') {
                    const filePath = path.join(inputDir, file);
                    const outputFile = path.join(outputDir, file);

                    // 读取原始 JSON 文件内容
                    const jsonContent = await fs.readFile(filePath, 'utf8');

                    // Minify JSON
                    const parsedJson = JSON.parse(jsonContent);
                    const minifiedJson = JSON.stringify(parsedJson);

                    // 将 minified JSON 写入输出目录
                    await fs.writeFile(outputFile, minifiedJson, 'utf8');

                    console.log(`Minified and written: ${outputFile}`);
                }
            })
        );

        console.log('Minification complete.');
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// 指定输入和输出目录
const inputDirectory = 'netron/source';
const outputDirectory = 'public';

// 执行 minify 操作
minifyAndWriteJson(inputDirectory, outputDirectory).catch(console.log);
