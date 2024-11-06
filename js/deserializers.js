var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2070 = root || request.c( 'UnityEngine.JointSpring' )
  var i2071 = data
  i2070.spring = i2071[0]
  i2070.damper = i2071[1]
  i2070.targetPosition = i2071[2]
  return i2070
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2072 = root || request.c( 'UnityEngine.JointMotor' )
  var i2073 = data
  i2072.m_TargetVelocity = i2073[0]
  i2072.m_Force = i2073[1]
  i2072.m_FreeSpin = i2073[2]
  return i2072
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2074 = root || request.c( 'UnityEngine.JointLimits' )
  var i2075 = data
  i2074.m_Min = i2075[0]
  i2074.m_Max = i2075[1]
  i2074.m_Bounciness = i2075[2]
  i2074.m_BounceMinVelocity = i2075[3]
  i2074.m_ContactDistance = i2075[4]
  i2074.minBounce = i2075[5]
  i2074.maxBounce = i2075[6]
  return i2074
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2076 = root || request.c( 'UnityEngine.JointDrive' )
  var i2077 = data
  i2076.m_PositionSpring = i2077[0]
  i2076.m_PositionDamper = i2077[1]
  i2076.m_MaximumForce = i2077[2]
  return i2076
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2078 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2079 = data
  i2078.m_Spring = i2079[0]
  i2078.m_Damper = i2079[1]
  return i2078
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2080 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2081 = data
  i2080.m_Limit = i2081[0]
  i2080.m_Bounciness = i2081[1]
  i2080.m_ContactDistance = i2081[2]
  return i2080
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2082 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2083 = data
  i2082.m_ExtremumSlip = i2083[0]
  i2082.m_ExtremumValue = i2083[1]
  i2082.m_AsymptoteSlip = i2083[2]
  i2082.m_AsymptoteValue = i2083[3]
  i2082.m_Stiffness = i2083[4]
  return i2082
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2084 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2085 = data
  i2084.m_LowerAngle = i2085[0]
  i2084.m_UpperAngle = i2085[1]
  return i2084
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2086 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2087 = data
  i2086.m_MotorSpeed = i2087[0]
  i2086.m_MaximumMotorTorque = i2087[1]
  return i2086
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2088 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2089 = data
  i2088.m_DampingRatio = i2089[0]
  i2088.m_Frequency = i2089[1]
  i2088.m_Angle = i2089[2]
  return i2088
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2090 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2091 = data
  i2090.m_LowerTranslation = i2091[0]
  i2090.m_UpperTranslation = i2091[1]
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2092 = root || new pc.UnityMaterial()
  var i2093 = data
  i2092.name = i2093[0]
  request.r(i2093[1], i2093[2], 0, i2092, 'shader')
  i2092.renderQueue = i2093[3]
  i2092.enableInstancing = !!i2093[4]
  var i2095 = i2093[5]
  var i2094 = []
  for(var i = 0; i < i2095.length; i += 1) {
    i2094.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2095[i + 0]) );
  }
  i2092.floatParameters = i2094
  var i2097 = i2093[6]
  var i2096 = []
  for(var i = 0; i < i2097.length; i += 1) {
    i2096.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2097[i + 0]) );
  }
  i2092.colorParameters = i2096
  var i2099 = i2093[7]
  var i2098 = []
  for(var i = 0; i < i2099.length; i += 1) {
    i2098.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2099[i + 0]) );
  }
  i2092.vectorParameters = i2098
  var i2101 = i2093[8]
  var i2100 = []
  for(var i = 0; i < i2101.length; i += 1) {
    i2100.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2101[i + 0]) );
  }
  i2092.textureParameters = i2100
  var i2103 = i2093[9]
  var i2102 = []
  for(var i = 0; i < i2103.length; i += 1) {
    i2102.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2103[i + 0]) );
  }
  i2092.materialFlags = i2102
  return i2092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2107 = data
  i2106.name = i2107[0]
  i2106.value = i2107[1]
  return i2106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2111 = data
  i2110.name = i2111[0]
  i2110.value = new pc.Color(i2111[1], i2111[2], i2111[3], i2111[4])
  return i2110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2115 = data
  i2114.name = i2115[0]
  i2114.value = new pc.Vec4( i2115[1], i2115[2], i2115[3], i2115[4] )
  return i2114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2119 = data
  i2118.name = i2119[0]
  request.r(i2119[1], i2119[2], 0, i2118, 'value')
  return i2118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2123 = data
  i2122.name = i2123[0]
  i2122.enabled = !!i2123[1]
  return i2122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2125 = data
  i2124.name = i2125[0]
  i2124.width = i2125[1]
  i2124.height = i2125[2]
  i2124.mipmapCount = i2125[3]
  i2124.anisoLevel = i2125[4]
  i2124.filterMode = i2125[5]
  i2124.hdr = !!i2125[6]
  i2124.format = i2125[7]
  i2124.wrapMode = i2125[8]
  i2124.alphaIsTransparency = !!i2125[9]
  i2124.alphaSource = i2125[10]
  return i2124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2127 = data
  i2126.name = i2127[0]
  i2126.atlasId = i2127[1]
  i2126.mipmapCount = i2127[2]
  i2126.hdr = !!i2127[3]
  i2126.size = i2127[4]
  i2126.anisoLevel = i2127[5]
  i2126.filterMode = i2127[6]
  i2126.wrapMode = i2127[7]
  var i2129 = i2127[8]
  var i2128 = []
  for(var i = 0; i < i2129.length; i += 4) {
    i2128.push( UnityEngine.Rect.MinMaxRect(i2129[i + 0], i2129[i + 1], i2129[i + 2], i2129[i + 3]) );
  }
  i2126.rects = i2128
  return i2126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2133 = data
  i2132.name = i2133[0]
  i2132.index = i2133[1]
  i2132.startup = !!i2133[2]
  return i2132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2135 = data
  i2134.position = new pc.Vec3( i2135[0], i2135[1], i2135[2] )
  i2134.scale = new pc.Vec3( i2135[3], i2135[4], i2135[5] )
  i2134.rotation = new pc.Quat(i2135[6], i2135[7], i2135[8], i2135[9])
  return i2134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2137 = data
  i2136.enabled = !!i2137[0]
  i2136.aspect = i2137[1]
  i2136.orthographic = !!i2137[2]
  i2136.orthographicSize = i2137[3]
  i2136.backgroundColor = new pc.Color(i2137[4], i2137[5], i2137[6], i2137[7])
  i2136.nearClipPlane = i2137[8]
  i2136.farClipPlane = i2137[9]
  i2136.fieldOfView = i2137[10]
  i2136.depth = i2137[11]
  i2136.clearFlags = i2137[12]
  i2136.cullingMask = i2137[13]
  i2136.rect = i2137[14]
  request.r(i2137[15], i2137[16], 0, i2136, 'targetTexture')
  i2136.usePhysicalProperties = !!i2137[17]
  i2136.focalLength = i2137[18]
  i2136.sensorSize = new pc.Vec2( i2137[19], i2137[20] )
  i2136.lensShift = new pc.Vec2( i2137[21], i2137[22] )
  i2136.gateFit = i2137[23]
  return i2136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2139 = data
  i2138.name = i2139[0]
  i2138.tagId = i2139[1]
  i2138.enabled = !!i2139[2]
  i2138.isStatic = !!i2139[3]
  i2138.layer = i2139[4]
  return i2138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2141 = data
  i2140.pivot = new pc.Vec2( i2141[0], i2141[1] )
  i2140.anchorMin = new pc.Vec2( i2141[2], i2141[3] )
  i2140.anchorMax = new pc.Vec2( i2141[4], i2141[5] )
  i2140.sizeDelta = new pc.Vec2( i2141[6], i2141[7] )
  i2140.anchoredPosition3D = new pc.Vec3( i2141[8], i2141[9], i2141[10] )
  i2140.rotation = new pc.Quat(i2141[11], i2141[12], i2141[13], i2141[14])
  i2140.scale = new pc.Vec3( i2141[15], i2141[16], i2141[17] )
  return i2140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2143 = data
  i2142.enabled = !!i2143[0]
  i2142.planeDistance = i2143[1]
  i2142.referencePixelsPerUnit = i2143[2]
  i2142.isFallbackOverlay = !!i2143[3]
  i2142.renderMode = i2143[4]
  i2142.renderOrder = i2143[5]
  i2142.sortingLayerName = i2143[6]
  i2142.sortingOrder = i2143[7]
  i2142.scaleFactor = i2143[8]
  request.r(i2143[9], i2143[10], 0, i2142, 'worldCamera')
  i2142.overrideSorting = !!i2143[11]
  i2142.pixelPerfect = !!i2143[12]
  i2142.targetDisplay = i2143[13]
  i2142.overridePixelPerfect = !!i2143[14]
  return i2142
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2144 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2145 = data
  i2144.m_UiScaleMode = i2145[0]
  i2144.m_ReferencePixelsPerUnit = i2145[1]
  i2144.m_ScaleFactor = i2145[2]
  i2144.m_ReferenceResolution = new pc.Vec2( i2145[3], i2145[4] )
  i2144.m_ScreenMatchMode = i2145[5]
  i2144.m_MatchWidthOrHeight = i2145[6]
  i2144.m_PhysicalUnit = i2145[7]
  i2144.m_FallbackScreenDPI = i2145[8]
  i2144.m_DefaultSpriteDPI = i2145[9]
  i2144.m_DynamicPixelsPerUnit = i2145[10]
  i2144.m_PresetInfoIsWorld = !!i2145[11]
  return i2144
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2146 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2147 = data
  i2146.m_IgnoreReversedGraphics = !!i2147[0]
  i2146.m_BlockingObjects = i2147[1]
  i2146.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2147[2] )
  return i2146
}

Deserializers["Test"] = function (request, data, root) {
  var i2148 = root || request.c( 'Test' )
  var i2149 = data
  i2148.currentStatus = !!i2149[0]
  return i2148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2151 = data
  i2150.cullTransparentMesh = !!i2151[0]
  return i2150
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2152 = root || request.c( 'UnityEngine.UI.Text' )
  var i2153 = data
  i2152.m_FontData = request.d('UnityEngine.UI.FontData', i2153[0], i2152.m_FontData)
  i2152.m_Text = i2153[1]
  request.r(i2153[2], i2153[3], 0, i2152, 'm_Material')
  i2152.m_Maskable = !!i2153[4]
  i2152.m_Color = new pc.Color(i2153[5], i2153[6], i2153[7], i2153[8])
  i2152.m_RaycastTarget = !!i2153[9]
  i2152.m_RaycastPadding = new pc.Vec4( i2153[10], i2153[11], i2153[12], i2153[13] )
  return i2152
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2154 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2155 = data
  request.r(i2155[0], i2155[1], 0, i2154, 'm_Font')
  i2154.m_FontSize = i2155[2]
  i2154.m_FontStyle = i2155[3]
  i2154.m_BestFit = !!i2155[4]
  i2154.m_MinSize = i2155[5]
  i2154.m_MaxSize = i2155[6]
  i2154.m_Alignment = i2155[7]
  i2154.m_AlignByGeometry = !!i2155[8]
  i2154.m_RichText = !!i2155[9]
  i2154.m_HorizontalOverflow = i2155[10]
  i2154.m_VerticalOverflow = i2155[11]
  i2154.m_LineSpacing = i2155[12]
  return i2154
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2156 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2157 = data
  request.r(i2157[0], i2157[1], 0, i2156, 'm_FirstSelected')
  i2156.m_sendNavigationEvents = !!i2157[2]
  i2156.m_DragThreshold = i2157[3]
  return i2156
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2158 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2159 = data
  i2158.m_HorizontalAxis = i2159[0]
  i2158.m_VerticalAxis = i2159[1]
  i2158.m_SubmitButton = i2159[2]
  i2158.m_CancelButton = i2159[3]
  i2158.m_InputActionsPerSecond = i2159[4]
  i2158.m_RepeatDelay = i2159[5]
  i2158.m_ForceModuleActive = !!i2159[6]
  return i2158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2161 = data
  i2160.ambientIntensity = i2161[0]
  i2160.reflectionIntensity = i2161[1]
  i2160.ambientMode = i2161[2]
  i2160.ambientLight = new pc.Color(i2161[3], i2161[4], i2161[5], i2161[6])
  i2160.ambientSkyColor = new pc.Color(i2161[7], i2161[8], i2161[9], i2161[10])
  i2160.ambientGroundColor = new pc.Color(i2161[11], i2161[12], i2161[13], i2161[14])
  i2160.ambientEquatorColor = new pc.Color(i2161[15], i2161[16], i2161[17], i2161[18])
  i2160.fogColor = new pc.Color(i2161[19], i2161[20], i2161[21], i2161[22])
  i2160.fogEndDistance = i2161[23]
  i2160.fogStartDistance = i2161[24]
  i2160.fogDensity = i2161[25]
  i2160.fog = !!i2161[26]
  request.r(i2161[27], i2161[28], 0, i2160, 'skybox')
  i2160.fogMode = i2161[29]
  var i2163 = i2161[30]
  var i2162 = []
  for(var i = 0; i < i2163.length; i += 1) {
    i2162.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2163[i + 0]) );
  }
  i2160.lightmaps = i2162
  i2160.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2161[31], i2160.lightProbes)
  i2160.lightmapsMode = i2161[32]
  i2160.mixedBakeMode = i2161[33]
  i2160.environmentLightingMode = i2161[34]
  i2160.ambientProbe = new pc.SphericalHarmonicsL2(i2161[35])
  i2160.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2161[36])
  i2160.useReferenceAmbientProbe = !!i2161[37]
  request.r(i2161[38], i2161[39], 0, i2160, 'customReflection')
  request.r(i2161[40], i2161[41], 0, i2160, 'defaultReflection')
  i2160.defaultReflectionMode = i2161[42]
  i2160.defaultReflectionResolution = i2161[43]
  i2160.sunLightObjectId = i2161[44]
  i2160.pixelLightCount = i2161[45]
  i2160.defaultReflectionHDR = !!i2161[46]
  i2160.hasLightDataAsset = !!i2161[47]
  i2160.hasManualGenerate = !!i2161[48]
  return i2160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2167 = data
  request.r(i2167[0], i2167[1], 0, i2166, 'lightmapColor')
  request.r(i2167[2], i2167[3], 0, i2166, 'lightmapDirection')
  return i2166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2168 = root || new UnityEngine.LightProbes()
  var i2169 = data
  return i2168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2177 = data
  var i2179 = i2177[0]
  var i2178 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i2179.length; i += 1) {
    i2178.add(i2179[i + 0]);
  }
  i2176.invalidShaderVariants = i2178
  i2176.name = i2177[1]
  i2176.guid = i2177[2]
  var i2181 = i2177[3]
  var i2180 = []
  for(var i = 0; i < i2181.length; i += 1) {
    i2180.push( i2181[i + 0] );
  }
  i2176.shaderDefinedKeywords = i2180
  var i2183 = i2177[4]
  var i2182 = []
  for(var i = 0; i < i2183.length; i += 1) {
    i2182.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2183[i + 0]) );
  }
  i2176.passes = i2182
  var i2185 = i2177[5]
  var i2184 = []
  for(var i = 0; i < i2185.length; i += 1) {
    i2184.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2185[i + 0]) );
  }
  i2176.usePasses = i2184
  var i2187 = i2177[6]
  var i2186 = []
  for(var i = 0; i < i2187.length; i += 1) {
    i2186.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2187[i + 0]) );
  }
  i2176.defaultParameterValues = i2186
  request.r(i2177[7], i2177[8], 0, i2176, 'unityFallbackShader')
  i2176.readDepth = !!i2177[9]
  i2176.isCreatedByShaderGraph = !!i2177[10]
  i2176.usedBatchUniforms = i2177[11]
  return i2176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2194 = root || new pc.UnityShaderPass()
  var i2195 = data
  i2194.id = i2195[0]
  i2194.subShaderIndex = i2195[1]
  i2194.name = i2195[2]
  i2194.passType = i2195[3]
  i2194.usePass = !!i2195[4]
  i2194.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2195[5], i2194.zTest)
  i2194.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2195[6], i2194.zWrite)
  i2194.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2195[7], i2194.culling)
  i2194.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2195[8], i2194.blending)
  i2194.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2195[9], i2194.alphaBlending)
  i2194.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2195[10], i2194.colorWriteMask)
  i2194.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2195[11], i2194.offsetUnits)
  i2194.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2195[12], i2194.offsetFactor)
  i2194.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2195[13], i2194.stencilRef)
  i2194.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2195[14], i2194.stencilReadMask)
  i2194.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2195[15], i2194.stencilWriteMask)
  i2194.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2195[16], i2194.stencilOp)
  i2194.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2195[17], i2194.stencilOpFront)
  i2194.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2195[18], i2194.stencilOpBack)
  var i2197 = i2195[19]
  var i2196 = []
  for(var i = 0; i < i2197.length; i += 1) {
    i2196.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2197[i + 0]) );
  }
  i2194.tags = i2196
  var i2199 = i2195[20]
  var i2198 = []
  for(var i = 0; i < i2199.length; i += 1) {
    i2198.push( i2199[i + 0] );
  }
  i2194.passDefinedKeywords = i2198
  var i2201 = i2195[21]
  var i2200 = []
  for(var i = 0; i < i2201.length; i += 1) {
    i2200.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2201[i + 0]) );
  }
  i2194.passDefinedKeywordGroups = i2200
  var i2203 = i2195[22]
  var i2202 = []
  for(var i = 0; i < i2203.length; i += 1) {
    i2202.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2203[i + 0]) );
  }
  i2194.variants = i2202
  var i2205 = i2195[23]
  var i2204 = []
  for(var i = 0; i < i2205.length; i += 1) {
    i2204.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2205[i + 0]) );
  }
  i2194.excludedVariants = i2204
  i2194.hasDepthReader = !!i2195[24]
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2207 = data
  i2206.val = i2207[0]
  i2206.name = i2207[1]
  return i2206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2209 = data
  i2208.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2209[0], i2208.src)
  i2208.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2209[1], i2208.dst)
  i2208.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2209[2], i2208.op)
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2211 = data
  i2210.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2211[0], i2210.pass)
  i2210.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2211[1], i2210.fail)
  i2210.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2211[2], i2210.zFail)
  i2210.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2211[3], i2210.comp)
  return i2210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2215 = data
  i2214.name = i2215[0]
  i2214.value = i2215[1]
  return i2214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2219 = data
  var i2221 = i2219[0]
  var i2220 = []
  for(var i = 0; i < i2221.length; i += 1) {
    i2220.push( i2221[i + 0] );
  }
  i2218.keywords = i2220
  i2218.hasDiscard = !!i2219[1]
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2225 = data
  i2224.passId = i2225[0]
  i2224.subShaderIndex = i2225[1]
  var i2227 = i2225[2]
  var i2226 = []
  for(var i = 0; i < i2227.length; i += 1) {
    i2226.push( i2227[i + 0] );
  }
  i2224.keywords = i2226
  i2224.vertexProgram = i2225[3]
  i2224.fragmentProgram = i2225[4]
  i2224.readDepth = !!i2225[5]
  return i2224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2231 = data
  request.r(i2231[0], i2231[1], 0, i2230, 'shader')
  i2230.pass = i2231[2]
  return i2230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2235 = data
  i2234.name = i2235[0]
  i2234.type = i2235[1]
  i2234.value = new pc.Vec4( i2235[2], i2235[3], i2235[4], i2235[5] )
  i2234.textureValue = i2235[6]
  return i2234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2237 = data
  i2236.name = i2237[0]
  i2236.ascent = i2237[1]
  i2236.originalLineHeight = i2237[2]
  i2236.fontSize = i2237[3]
  var i2239 = i2237[4]
  var i2238 = []
  for(var i = 0; i < i2239.length; i += 1) {
    i2238.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2239[i + 0]) );
  }
  i2236.characterInfo = i2238
  request.r(i2237[5], i2237[6], 0, i2236, 'texture')
  i2236.originalFontSize = i2237[7]
  return i2236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2243 = data
  i2242.index = i2243[0]
  i2242.advance = i2243[1]
  i2242.bearing = i2243[2]
  i2242.glyphWidth = i2243[3]
  i2242.glyphHeight = i2243[4]
  i2242.minX = i2243[5]
  i2242.maxX = i2243[6]
  i2242.minY = i2243[7]
  i2242.maxY = i2243[8]
  i2242.uvBottomLeftX = i2243[9]
  i2242.uvBottomLeftY = i2243[10]
  i2242.uvBottomRightX = i2243[11]
  i2242.uvBottomRightY = i2243[12]
  i2242.uvTopLeftX = i2243[13]
  i2242.uvTopLeftY = i2243[14]
  i2242.uvTopRightX = i2243[15]
  i2242.uvTopRightY = i2243[16]
  return i2242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2245 = data
  var i2247 = i2245[0]
  var i2246 = []
  for(var i = 0; i < i2247.length; i += 1) {
    i2246.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2247[i + 0]) );
  }
  i2244.files = i2246
  i2244.componentToPrefabIds = i2245[1]
  return i2244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2251 = data
  i2250.path = i2251[0]
  request.r(i2251[1], i2251[2], 0, i2250, 'unityObject')
  return i2250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2253 = data
  var i2255 = i2253[0]
  var i2254 = []
  for(var i = 0; i < i2255.length; i += 1) {
    i2254.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2255[i + 0]) );
  }
  i2252.scriptsExecutionOrder = i2254
  var i2257 = i2253[1]
  var i2256 = []
  for(var i = 0; i < i2257.length; i += 1) {
    i2256.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2257[i + 0]) );
  }
  i2252.sortingLayers = i2256
  var i2259 = i2253[2]
  var i2258 = []
  for(var i = 0; i < i2259.length; i += 1) {
    i2258.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2259[i + 0]) );
  }
  i2252.cullingLayers = i2258
  i2252.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2253[3], i2252.timeSettings)
  i2252.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2253[4], i2252.physicsSettings)
  i2252.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2253[5], i2252.physics2DSettings)
  i2252.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2253[6], i2252.qualitySettings)
  i2252.enableRealtimeShadows = !!i2253[7]
  i2252.enableAutoInstancing = !!i2253[8]
  i2252.enableDynamicBatching = !!i2253[9]
  i2252.lightmapEncodingQuality = i2253[10]
  i2252.desiredColorSpace = i2253[11]
  var i2261 = i2253[12]
  var i2260 = []
  for(var i = 0; i < i2261.length; i += 1) {
    i2260.push( i2261[i + 0] );
  }
  i2252.allTags = i2260
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2265 = data
  i2264.name = i2265[0]
  i2264.value = i2265[1]
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2269 = data
  i2268.id = i2269[0]
  i2268.name = i2269[1]
  i2268.value = i2269[2]
  return i2268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2273 = data
  i2272.id = i2273[0]
  i2272.name = i2273[1]
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2275 = data
  i2274.fixedDeltaTime = i2275[0]
  i2274.maximumDeltaTime = i2275[1]
  i2274.timeScale = i2275[2]
  i2274.maximumParticleTimestep = i2275[3]
  return i2274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2277 = data
  i2276.gravity = new pc.Vec3( i2277[0], i2277[1], i2277[2] )
  i2276.defaultSolverIterations = i2277[3]
  i2276.bounceThreshold = i2277[4]
  i2276.autoSyncTransforms = !!i2277[5]
  i2276.autoSimulation = !!i2277[6]
  var i2279 = i2277[7]
  var i2278 = []
  for(var i = 0; i < i2279.length; i += 1) {
    i2278.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2279[i + 0]) );
  }
  i2276.collisionMatrix = i2278
  return i2276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2283 = data
  i2282.enabled = !!i2283[0]
  i2282.layerId = i2283[1]
  i2282.otherLayerId = i2283[2]
  return i2282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2285 = data
  request.r(i2285[0], i2285[1], 0, i2284, 'material')
  i2284.gravity = new pc.Vec2( i2285[2], i2285[3] )
  i2284.positionIterations = i2285[4]
  i2284.velocityIterations = i2285[5]
  i2284.velocityThreshold = i2285[6]
  i2284.maxLinearCorrection = i2285[7]
  i2284.maxAngularCorrection = i2285[8]
  i2284.maxTranslationSpeed = i2285[9]
  i2284.maxRotationSpeed = i2285[10]
  i2284.baumgarteScale = i2285[11]
  i2284.baumgarteTOIScale = i2285[12]
  i2284.timeToSleep = i2285[13]
  i2284.linearSleepTolerance = i2285[14]
  i2284.angularSleepTolerance = i2285[15]
  i2284.defaultContactOffset = i2285[16]
  i2284.autoSimulation = !!i2285[17]
  i2284.queriesHitTriggers = !!i2285[18]
  i2284.queriesStartInColliders = !!i2285[19]
  i2284.callbacksOnDisable = !!i2285[20]
  i2284.reuseCollisionCallbacks = !!i2285[21]
  i2284.autoSyncTransforms = !!i2285[22]
  var i2287 = i2285[23]
  var i2286 = []
  for(var i = 0; i < i2287.length; i += 1) {
    i2286.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2287[i + 0]) );
  }
  i2284.collisionMatrix = i2286
  return i2284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2291 = data
  i2290.enabled = !!i2291[0]
  i2290.layerId = i2291[1]
  i2290.otherLayerId = i2291[2]
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2293 = data
  var i2295 = i2293[0]
  var i2294 = []
  for(var i = 0; i < i2295.length; i += 1) {
    i2294.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2295[i + 0]) );
  }
  i2292.qualityLevels = i2294
  var i2297 = i2293[1]
  var i2296 = []
  for(var i = 0; i < i2297.length; i += 1) {
    i2296.push( i2297[i + 0] );
  }
  i2292.names = i2296
  i2292.shadows = i2293[2]
  i2292.anisotropicFiltering = i2293[3]
  i2292.antiAliasing = i2293[4]
  i2292.lodBias = i2293[5]
  i2292.shadowCascades = i2293[6]
  i2292.shadowDistance = i2293[7]
  i2292.shadowmaskMode = i2293[8]
  i2292.shadowProjection = i2293[9]
  i2292.shadowResolution = i2293[10]
  i2292.softParticles = !!i2293[11]
  i2292.softVegetation = !!i2293[12]
  i2292.activeColorSpace = i2293[13]
  i2292.desiredColorSpace = i2293[14]
  i2292.masterTextureLimit = i2293[15]
  i2292.maxQueuedFrames = i2293[16]
  i2292.particleRaycastBudget = i2293[17]
  i2292.pixelLightCount = i2293[18]
  i2292.realtimeReflectionProbes = !!i2293[19]
  i2292.shadowCascade2Split = i2293[20]
  i2292.shadowCascade4Split = new pc.Vec3( i2293[21], i2293[22], i2293[23] )
  i2292.streamingMipmapsActive = !!i2293[24]
  i2292.vSyncCount = i2293[25]
  i2292.asyncUploadBufferSize = i2293[26]
  i2292.asyncUploadTimeSlice = i2293[27]
  i2292.billboardsFaceCameraPosition = !!i2293[28]
  i2292.shadowNearPlaneOffset = i2293[29]
  i2292.streamingMipmapsMemoryBudget = i2293[30]
  i2292.maximumLODLevel = i2293[31]
  i2292.streamingMipmapsAddAllCameras = !!i2293[32]
  i2292.streamingMipmapsMaxLevelReduction = i2293[33]
  i2292.streamingMipmapsRenderersPerFrame = i2293[34]
  i2292.resolutionScalingFixedDPIFactor = i2293[35]
  i2292.streamingMipmapsMaxFileIORequests = i2293[36]
  i2292.currentQualityLevel = i2293[37]
  return i2292
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"passDefinedKeywordGroups":21,"variants":22,"excludedVariants":23,"hasDepthReader":24},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"19":[20],"21":[20],"22":[20],"23":[20],"24":[20],"25":[20],"26":[27],"28":[2],"29":[30],"31":[30],"32":[30],"33":[30],"34":[30],"35":[30],"36":[30],"37":[38],"39":[38],"40":[38],"41":[38],"42":[38],"43":[38],"44":[38],"45":[38],"46":[38],"47":[38],"48":[38],"49":[38],"50":[38],"51":[2],"52":[53],"54":[55],"56":[55],"5":[4],"57":[4],"58":[11,4],"59":[53],"60":[11,4],"61":[4],"62":[53,4],"63":[4,11],"64":[4],"65":[66],"67":[4],"68":[4],"8":[5],"69":[11,4],"70":[4],"7":[5],"71":[4],"72":[4],"73":[4],"74":[4],"75":[4],"76":[4],"77":[4],"78":[4],"79":[4],"80":[11,4],"81":[4],"82":[4],"83":[4],"84":[4],"12":[11,4],"85":[4],"86":[14],"87":[14],"15":[14],"88":[14],"89":[2],"90":[2],"91":[66],"92":[93],"94":[66]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","Test","UnityEngine.CanvasRenderer","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","UnityEngine.Texture2D","UnityEngine.Material","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TextContainer","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.Image","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.SceneVariables","UnityEngine.Purchasing.IAPButton","UnityEngine.UI.Button","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2020.3.48f1";

Deserializers.productName = "2D Project";

Deserializers.lunaInitializationTime = "11/06/2024 11:00:36";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "5.2.0";

Deserializers.lunaSHA = "a655a1e01be315dbfa8d2e1b74c75f56b0112281";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "14455";

Deserializers.projectId = "10ad67313f4034357812315f3c407484";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.7.3\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = ".\Assets\Plugins\Bright.js";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1634";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3053";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, reflection, prefabs";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.buildID = "280f50cf-65e2-4582-91e1-3c267571c275";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

