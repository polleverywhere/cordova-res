"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const utils_fs_1 = require("@ionic/utils-fs");
const debug_1 = tslib_1.__importDefault(require("debug"));
const path_1 = tslib_1.__importDefault(require("path"));
const util_1 = tslib_1.__importDefault(require("util"));
const platform_1 = require("./platform");
const resources_1 = require("./resources");
const debug = debug_1.default('cordova-res:native');
const IOS_APP_ICON_SET_NAME = 'AppIcon';
const IOS_SPLASH_IMAGE_SET_NAME = 'Splash';
const ANDROID_RES_PATH = 'app/src/main/res';
const IOS_ICONS = [
    {
        type: "ios-icon" /* IOS_ICON */,
        source: resources_1.IOS_20_PT_ICON.src,
        target: 'AppIcon-20x20@1x.png',
    },
    {
        type: "ios-icon" /* IOS_ICON */,
        source: resources_1.IOS_20_PT_2X_ICON.src,
        target: 'AppIcon-20x20@2x.png',
    },
    {
        type: "ios-icon" /* IOS_ICON */,
        source: resources_1.IOS_20_PT_2X_ICON.src,
        target: 'AppIcon-20x20@2x-1.png',
    },
    {
        type: "ios-icon" /* IOS_ICON */,
        source: resources_1.IOS_20_PT_3X_ICON.src,
        target: 'AppIcon-20x20@3x.png',
    },
    {
        type: "ios-icon" /* IOS_ICON */,
        source: resources_1.IOS_29_PT_ICON.src,
        target: 'AppIcon-29x29@1x.png',
    },
    {
        type: "ios-icon" /* IOS_ICON */,
        source: resources_1.IOS_29_PT_2X_ICON.src,
        target: 'AppIcon-29x29@2x.png',
    },
    {
        type: "ios-icon" /* IOS_ICON */,
        source: resources_1.IOS_29_PT_2X_ICON.src,
        target: 'AppIcon-29x29@2x-1.png',
    },
    {
        type: "ios-icon" /* IOS_ICON */,
        source: resources_1.IOS_29_PT_3X_ICON.src,
        target: 'AppIcon-29x29@3x.png',
    },
    {
        type: "ios-icon" /* IOS_ICON */,
        source: resources_1.IOS_40_PT_ICON.src,
        target: 'AppIcon-40x40@1x.png',
    },
    {
        type: "ios-icon" /* IOS_ICON */,
        source: resources_1.IOS_40_PT_2X_ICON.src,
        target: 'AppIcon-40x40@2x.png',
    },
    {
        type: "ios-icon" /* IOS_ICON */,
        source: resources_1.IOS_40_PT_2X_ICON.src,
        target: 'AppIcon-40x40@2x-1.png',
    },
    {
        type: "ios-icon" /* IOS_ICON */,
        source: resources_1.IOS_40_PT_3X_ICON.src,
        target: 'AppIcon-40x40@3x.png',
    },
    {
        type: "ios-icon" /* IOS_ICON */,
        source: resources_1.IOS_60_PT_2X_ICON.src,
        target: 'AppIcon-60x60@2x.png',
    },
    {
        type: "ios-icon" /* IOS_ICON */,
        source: resources_1.IOS_60_PT_3X_ICON.src,
        target: 'AppIcon-60x60@3x.png',
    },
    {
        type: "ios-icon" /* IOS_ICON */,
        source: resources_1.IOS_76_PT_ICON.src,
        target: 'AppIcon-76x76@1x.png',
    },
    {
        type: "ios-icon" /* IOS_ICON */,
        source: resources_1.IOS_76_PT_2X_ICON.src,
        target: 'AppIcon-76x76@2x.png',
    },
    {
        type: "ios-icon" /* IOS_ICON */,
        source: resources_1.IOS_83_5_PT_2X_ICON.src,
        target: 'AppIcon-83.5x83.5@2x.png',
    },
    {
        type: "ios-icon" /* IOS_ICON */,
        source: resources_1.IOS_1024_ICON.src,
        target: 'AppIcon-512@2x.png',
    },
];
const IOS_SPLASHES = [
    {
        type: "ios-splash" /* IOS_SPLASH */,
        source: resources_1.IOS_2X_UNIVERSAL_ANYANY_SPLASH.src,
        target: 'splash-2732x2732.png',
    },
    {
        type: "ios-splash" /* IOS_SPLASH */,
        source: resources_1.IOS_2X_UNIVERSAL_ANYANY_SPLASH.src,
        target: 'splash-2732x2732-1.png',
    },
    {
        type: "ios-splash" /* IOS_SPLASH */,
        source: resources_1.IOS_2X_UNIVERSAL_ANYANY_SPLASH.src,
        target: 'splash-2732x2732-2.png',
    },
];
function androidIcons(assetSuffix) {
    const suffix = assetSuffix ? `-${assetSuffix}` : '';
    return [
        {
            type: "android-legacy" /* ANDROID_LEGACY */,
            source: resources_1.ANDROID_MDPI_ICON.src,
            target: `mipmap-mdpi/ic_launcher${suffix}.png`,
        },
        {
            type: "android-round" /* ANDROID_ROUND */,
            source: resources_1.ANDROID_MDPI_ICON.src,
            target: `mipmap-mdpi/ic_launcher_round${suffix}.png`,
        },
        {
            type: "android-adaptive-foreground" /* ANDROID_ADAPTIVE_FOREGROUND */,
            source: resources_1.ANDROID_MDPI_ADAPTIVE_ICON.foreground,
            target: `mipmap-mdpi/ic_launcher_foreground${suffix}.png`,
        },
        {
            type: "android-legacy" /* ANDROID_LEGACY */,
            source: resources_1.ANDROID_HDPI_ICON.src,
            target: `mipmap-hdpi/ic_launcher${suffix}.png`,
        },
        {
            type: "android-round" /* ANDROID_ROUND */,
            source: resources_1.ANDROID_HDPI_ICON.src,
            target: `mipmap-hdpi/ic_launcher_round${suffix}.png`,
        },
        {
            type: "android-adaptive-foreground" /* ANDROID_ADAPTIVE_FOREGROUND */,
            source: resources_1.ANDROID_HDPI_ADAPTIVE_ICON.foreground,
            target: `mipmap-hdpi/ic_launcher_foreground${suffix}.png`,
        },
        {
            type: "android-legacy" /* ANDROID_LEGACY */,
            source: resources_1.ANDROID_XHDPI_ICON.src,
            target: `mipmap-xhdpi/ic_launcher${suffix}.png`,
        },
        {
            type: "android-round" /* ANDROID_ROUND */,
            source: resources_1.ANDROID_XHDPI_ICON.src,
            target: `mipmap-xhdpi/ic_launcher_round${suffix}.png`,
        },
        {
            type: "android-adaptive-foreground" /* ANDROID_ADAPTIVE_FOREGROUND */,
            source: resources_1.ANDROID_XHDPI_ADAPTIVE_ICON.foreground,
            target: `mipmap-xhdpi/ic_launcher_foreground${suffix}.png`,
        },
        {
            type: "android-legacy" /* ANDROID_LEGACY */,
            source: resources_1.ANDROID_XXHDPI_ICON.src,
            target: `mipmap-xxhdpi/ic_launcher${suffix}.png`,
        },
        {
            type: "android-round" /* ANDROID_ROUND */,
            source: resources_1.ANDROID_XXHDPI_ICON.src,
            target: `mipmap-xxhdpi/ic_launcher_round${suffix}.png`,
        },
        {
            type: "android-adaptive-foreground" /* ANDROID_ADAPTIVE_FOREGROUND */,
            source: resources_1.ANDROID_XXHDPI_ADAPTIVE_ICON.foreground,
            target: `mipmap-xxhdpi/ic_launcher_foreground${suffix}.png`,
        },
        {
            type: "android-legacy" /* ANDROID_LEGACY */,
            source: resources_1.ANDROID_XXXHDPI_ICON.src,
            target: `mipmap-xxxhdpi/ic_launcher${suffix}.png`,
        },
        {
            type: "android-round" /* ANDROID_ROUND */,
            source: resources_1.ANDROID_XXXHDPI_ICON.src,
            target: `mipmap-xxxhdpi/ic_launcher_round${suffix}.png`,
        },
        {
            type: "android-adaptive-foreground" /* ANDROID_ADAPTIVE_FOREGROUND */,
            source: resources_1.ANDROID_XXXHDPI_ADAPTIVE_ICON.foreground,
            target: `mipmap-xxxhdpi/ic_launcher_foreground${suffix}.png`,
        },
    ];
}
function androidSplashes(assetSuffix) {
    const suffix = assetSuffix ? `-${assetSuffix}` : '';
    return [
        {
            type: "android-splash" /* ANDROID_SPLASH */,
            source: resources_1.ANDROID_LAND_MDPI_SCREEN.src,
            target: `drawable/splash${suffix}.png`,
        },
        {
            type: "android-splash" /* ANDROID_SPLASH */,
            source: resources_1.ANDROID_LAND_MDPI_SCREEN.src,
            target: `drawable-land-mdpi/splash${suffix}.png`,
        },
        {
            type: "android-splash" /* ANDROID_SPLASH */,
            source: resources_1.ANDROID_LAND_HDPI_SCREEN.src,
            target: `drawable-land-hdpi/splash${suffix}.png`,
        },
        {
            type: "android-splash" /* ANDROID_SPLASH */,
            source: resources_1.ANDROID_LAND_XHDPI_SCREEN.src,
            target: `drawable-land-xhdpi/splash${suffix}.png`,
        },
        {
            type: "android-splash" /* ANDROID_SPLASH */,
            source: resources_1.ANDROID_LAND_XXHDPI_SCREEN.src,
            target: `drawable-land-xxhdpi/splash${suffix}.png`,
        },
        {
            type: "android-splash" /* ANDROID_SPLASH */,
            source: resources_1.ANDROID_LAND_XXXHDPI_SCREEN.src,
            target: `drawable-land-xxxhdpi/splash${suffix}.png`,
        },
        {
            type: "android-splash" /* ANDROID_SPLASH */,
            source: resources_1.ANDROID_PORT_MDPI_SCREEN.src,
            target: `drawable-port-mdpi/splash${suffix}.png`,
        },
        {
            type: "android-splash" /* ANDROID_SPLASH */,
            source: resources_1.ANDROID_PORT_HDPI_SCREEN.src,
            target: `drawable-port-hdpi/splash${suffix}.png`,
        },
        {
            type: "android-splash" /* ANDROID_SPLASH */,
            source: resources_1.ANDROID_PORT_XHDPI_SCREEN.src,
            target: `drawable-port-xhdpi/splash${suffix}.png`,
        },
        {
            type: "android-splash" /* ANDROID_SPLASH */,
            source: resources_1.ANDROID_PORT_XXHDPI_SCREEN.src,
            target: `drawable-port-xxhdpi/splash${suffix}.png`,
        },
        {
            type: "android-splash" /* ANDROID_SPLASH */,
            source: resources_1.ANDROID_PORT_XXXHDPI_SCREEN.src,
            target: `drawable-port-xxxhdpi/splash${suffix}.png`,
        },
    ];
}
function resourcesFor(resourcesDirectory, platform, assetType) {
    return path_1.default.join(resourcesDirectory, platform, assetType);
}
function iosAppIconSetPath(assetSuffix) {
    const suffix = assetSuffix ? `-${assetSuffix}` : '';
    return `App/App/Assets.xcassets/${IOS_APP_ICON_SET_NAME}${suffix}.appiconset`;
}
function iosSplashImageSetPath(assetSuffix) {
    const suffix = assetSuffix ? `-${assetSuffix}` : '';
    return `App/App/Assets.xcassets/${IOS_SPLASH_IMAGE_SET_NAME}${suffix}.imageset`;
}
async function copyImages(sourcePath, targetPath, images, errstream) {
    await Promise.all(images.map(async (item) => {
        const source = path_1.default.join(sourcePath, item.source);
        const target = path_1.default.join(targetPath, item.target);
        debug('Copying generated resource from %O to %O', source, target);
        try {
            await utils_fs_1.copy(source, target);
        }
        catch (e) {
            debug(e);
            errstream === null || errstream === void 0 ? void 0 : errstream.write(`WARN:\tError occurred while copying ${source}\n`);
        }
    }));
    return images.length;
}
async function copyToNativeProject(platform, nativeProject, resourcesDirectory, shouldCopyIcons, shouldCopySplash, assetSuffix, logstream, errstream) {
    let count = 0;
    if (platform === "ios" /* IOS */) {
        const iosProjectDirectory = nativeProject.directory || 'ios';
        if (shouldCopyIcons) {
            count += await copyImages(resourcesFor(resourcesDirectory, platform, 'icon'), path_1.default.join(iosProjectDirectory, iosAppIconSetPath(assetSuffix)), IOS_ICONS, errstream);
        }
        if (shouldCopySplash) {
            count += await copyImages(resourcesFor(resourcesDirectory, platform, 'splash'), path_1.default.join(iosProjectDirectory, iosSplashImageSetPath(assetSuffix)), IOS_SPLASHES, errstream);
        }
    }
    else if (platform === "android" /* ANDROID */) {
        const androidProjectDirectory = nativeProject.directory || 'android';
        if (shouldCopyIcons) {
            count += await copyImages(resourcesFor(resourcesDirectory, platform, 'icon'), path_1.default.join(androidProjectDirectory, ANDROID_RES_PATH), androidIcons(assetSuffix), errstream);
        }
        if (shouldCopySplash) {
            count += await copyImages(resourcesFor(resourcesDirectory, platform, 'splash'), path_1.default.join(androidProjectDirectory, ANDROID_RES_PATH), androidSplashes(assetSuffix), errstream);
        }
    }
    else {
        errstream === null || errstream === void 0 ? void 0 : errstream.write(util_1.default.format('WARN:\tCopying to native projects is not supported for %s', platform_1.prettyPlatform(platform)) + '\n');
        return;
    }
    logstream === null || logstream === void 0 ? void 0 : logstream.write(util_1.default.format(`Copied %s resource items to %s`, count, platform_1.prettyPlatform(platform)) + '\n');
}
exports.copyToNativeProject = copyToNativeProject;
