// ==UserScript==
// @name                BiliBili-DownloadDanmaku
// @name:zh-CN          BiliBili-弹幕下载
// @namespace           https://github.com/Mehver
// @version             1.0
// @description         在任意视频播放页右下提供弹幕下载按钮，提供较为全面的弹幕抓取能力。
// @description:zh-CN   在任意视频播放页右下提供弹幕下载按钮，提供较为全面的弹幕抓取能力。
// @author              https://github.com/Mehver
// @icon                data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAA1RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiI+CjxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CjxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOklwdGM0eG1wQ29yZT0iaHR0cDovL2lwdGMub3JnL3N0ZC9JcHRjNHhtcENvcmUvMS4wL3htbG5zLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSI0MDAwIiBleGlmOlBpeGVsWURpbWVuc2lvbj0iNDAwMCI+CjwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJ3Ij8+KSSA3QAABChJREFUeJztlXlMVFcUxhW1iks1Nk1M3ZrYVI0L2lg1McYmNHFparWViAtRY21pMy5xizYW1FSjAtVqWhpDAmqAsLgnmrQqo6XKuERFBlSK1GEfmCrDMIAKx+8M9+Hzct/MA//tS37JzHvfOec79577Xpcu/18Gl+UWMf3Ah2ACCAHDQPAb5PwYnAd14AjooxJx0fXADloASTSDbDCng8VngUop18+yiLtMAG5FYZlSsAoEBSgcBGaAO4ocVr1wkkiq6tqIRmABXQ2KdwVfgnJF7DNuQBP2AXcVohci+B9QbWCuASwwMPCJaEqOaQI/gG6acKlC9ACsBCPBUDAeHAC1Cq2TdVLxDwyaYsNr2ooLcZIkKrK0Tr7cUTAIBx5F4ovgLaHraWmdclnDq7mx3ZbhxmVJeEgurtMy34j918fw9kSK4nMVJl3gK9BdlTRHEkcqq7/S82TzUW2W4hzgc3BFuv8cbLUYnRiFgZh2y9Q+pgdIUSxzsRgy/T1++Qzwl8wqBeTx4PkzIOImiO4CHdV5gRLFKwJrQKKY/F1gtjZkUqxq2PSc47nwa2DvhZoZGan5lJniD3tL1mFb9pMf05bRhsS27dl0rWlURkp+iyomLbWgMf5sycxAK+m7kPRXQCbJAG0fpfNRp63/bklV6W4ui8n5aOBvhaPNGAgC20GpSROJWuyYg/aoMYfsVLgl7TVN1raT6SheANaZWgVhpAcYC6aBleAUaJANPNuYRGv3/LUYyafPj7sRFhFjo9EwEb/zD7q67QSdiT5LIQfzmvE8FUwDU8E40PHPOQqOAlatuHNzMk39JZeQrDM4TG2JwsRgcJ8NRO+2+pJ992cZ7bM5TbPuUgW9n1DEsec6Y4BnJIENRMTk+AzkVbrJ6/Waxl7lpk8zHnPsIzl5bzAFTAID/ZjYxQYWxl73GSiq9vgSe+q99NjlocLqOnJ7XhUse9J672ldve//Q2cdfXbSwbEV+qTBIBN4gQdcAMMVxVl3kQ2E6wwcu1dD8045aHJyMYWdKaEHKKIZiLvupInHimnWcQdt/7uS7pS7NQPl+sRfSBPeAn7Xn3P87gkWATdrlsTadAZctCGrgpJya8hWUkv/iW6Z+zCTnu+i6OxKH/lVagPLFWe8QUz9YWGGO3+qPdcb6MgMGG3BELH0Zt+CtNjAAA8lL3OK3UU3y2rpNn7XBzIgTMR1xEC4NIQaN0praQf2OgrLvdlaQZkFLiMDVbKB/uL93mzGwKJYWyMbKNQNnBl4QOec8BkoUx2xQeAoqPJT/AXIDd1/O5MNJN7F4KFrsyRja0KOFrOBy0ZHnY30BaEgAqwWrADz+XjyCwkJ3uMuOvkqbgKhhgbMXkjyLvgapInEe8D3IJJ5p5Vv8fsn0AD4yzgXjHjj4pKRXmCyn+fdQAh4W/X8JXjuyYsdSLwsAAAAAElFTkSuQmCC
// @match               http*://www.bilibili.com
// @match               http*://www.bilibili.com/*
// @match               http*://bangumi.bilibili.com/*
// @match               http*://bilibili.com
// @match               http*://bilibili.com/*
// @license             BSD 3-Clause License
// @charset              UTF-8
// @homepageURL         https://github.com/MehverSynRGB/BiliBili-DownloadDanmaku
// @contributionURL     https://github.com/MehverSynRGB/BiliBili-DownloadDanmaku
// @copyright           Copyright (c) 2026 Mehver (https://github.com/Mehver). All rights reserved.
// @grant               GM_xmlhttpRequest
// @run-at               document-end
// ==/UserScript==

(function () {
  'use strict';

  /* =============================================================
   * 1. PROTOC 极简解码器 (仅解码 DmSegMobileReply / DmWebViewReply)
   * ============================================================= */
  const Dec = {
    _d: null,
    _p: 0,

    init(buf) {
      this._d = new Uint8Array(buf);
      this._p = 0;
    },

    /** 读取一个 varint，返回数值 */
    vi() {
      let r = 0, s = 0, b;
      while (this._p < this._d.length) {
        b = this._d[this._p++];
        r |= (b & 0x7F) << s;
        if (!(b & 0x80)) break;
        s += 7;
      }
      return r;
    },

    /** 读取 tag → { f: fieldNumber, w: wireType } */
    tg() {
      const t = this.vi();
      return { f: t >>> 3, w: t & 7 };
    },

    /** 读取 length-delimited 字段原始字节 Uint8Array */
    ld() {
      const len = this.vi();
      const start = this._p;
      this._p += len;
      return this._d.slice(start, this._p);
    },

    /** 读取 UTF-8 字符串 */
    rs() {
      return new TextDecoder('utf-8').decode(this.ld());
    },

    /** 跳过当前字段 */
    skip(w) {
      if (w === 0) this.vi();
      else if (w === 2) this._p += this.vi();
      else if (w === 5) this._p += 4;
      else if (w === 1) this._p += 8;
    },

    /* ---------- 解码一个 DanmakuElem ---------- */
    dmElem(data) {
      const save = { d: this._d, p: this._p };
      this._d = data;
      this._p = 0;
      const dm = {};
      while (this._p < this._d.length) {
        const { f, w } = this.tg();
        if (w === 0) {
          if (f === 1 || f === 8) dm[['', 'id', '', '', '', '', '', '', 'ctime'][f]] = this.vi();
          else {
            const v = this.vi();
            if (f === 2) dm.progress = v;
            else if (f === 3) dm.mode = v;
            else if (f === 4) dm.fontsize = v;
            else if (f === 5) dm.color = v;
            else if (f === 9) dm.weight = v;
            else if (f === 11) dm.pool = v;
            else if (f === 13) dm.attr = v;
          }
        } else if (w === 2) {
          if (f === 6) dm.midHash = this.rs();
          else if (f === 7) dm.content = this.rs();
          else if (f === 10) dm.action = this.rs();
          else if (f === 12) dm.idStr = this.rs();
          else if (f === 22) this.ld();
          else if (f === 24) this.ld();
          else this.ld();
        } else {
          this.skip(w);
        }
      }
      this._d = save.d;
      this._p = save.p;
      return dm;
    },

    /* ---------- 解码 DmSegMobileReply → DanmakuElem[] ---------- */
    segReply(buf) {
      this.init(buf);
      const list = [];
      while (this._p < this._d.length) {
        const { f, w } = this.tg();
        if (f === 1 && w === 2) {
          list.push(this.dmElem(this.ld()));
        } else {
          this.skip(w);
        }
      }
      return list;
    },

    /* ---------- 解码 DmWebViewReply → { dmSge, specialDms, count } ---------- */
    viewReply(buf) {
      this.init(buf);
      const view = {};
      while (this._p < this._d.length) {
        const { f, w } = this.tg();
        if (w === 0) {
          const v = this.vi();
          if (f === 1) view.state = v;
          else if (f === 8) view.count = v;
        } else if (w === 2) {
          if (f === 4) {
            /* DmSegConfig 嵌套在 field 4 (dmSge) */
            const inner = this.ld();
            view.dmSge = this._decodeSegConfig(inner);
          } else if (f === 5) {
            this.ld(); /* flag - skip */
          } else if (f === 6) {
            if (!view.specialDms) view.specialDms = [];
            view.specialDms.push(this.rs());
          } else if (f === 2 || f === 3) {
            this.ld();
          } else if (f === 9) {
            this.ld(); /* commandDms - skip */
          } else if (f === 10) {
            this.ld(); /* dmSetting - skip */
          } else {
            this.ld();
          }
        } else {
          this.skip(w);
        }
      }
      return view;
    },

    _decodeSegConfig(data) {
      const save = { d: this._d, p: this._p };
      this._d = data;
      this._p = 0;
      const cfg = {};
      while (this._p < this._d.length) {
        const { f, w } = this.tg();
        if (w === 0) {
          const v = this.vi();
          if (f === 1) cfg.pageSize = v;
          else if (f === 2) cfg.total = v;
        } else {
          this.skip(w);
        }
      }
      this._d = save.d;
      this._p = save.p;
      return cfg;
    }
  };

  /* =============================================================
   * 2. 页面信息提取
   * ============================================================= */
  function extractPageInfo() {
    const url = location.href;
    const win = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
    const IIS = win.__INITIAL_STATE__;

    // ---- 2a. __INITIAL_STATE__ - PGC 番剧 / 电影 / 纪录片 ----
    if (IIS && IIS.epInfo && IIS.mediaInfo) {
      const ep = IIS.epInfo;
      const m = IIS.mediaInfo;
      return {
        type: 'pgc',
        cid: ep.cid,
        aid: ep.aid,
        bvid: ep.bvid,
        epid: ep.id,
        seasonId: m.season_id,
        title: m.title || m.season_title || '',
        seasonTitle: m.title || m.season_title || '',
        epTitle: ep.title || ep.long_title || '',
      };
    }

    // ---- 2b. __INITIAL_STATE__ - 普通 av/bv 视频 ----
    if (IIS && IIS.videoData) {
      const vd = IIS.videoData;
      return {
        type: 'video',
        cid: vd.cid,
        aid: vd.aid,
        bvid: vd.bvid,
        title: vd.title || '',
        pages: vd.pages || [],
      };
    }

    // ---- 2c. #__NEXT_DATA__ (Next.js SSR) 递归搜索 cid ----
    const el = document.querySelector('#__NEXT_DATA__, script[id*="NEXT_DATA" i], script[id*="next_data" i]');
    if (el) {
      try {
        const nd = JSON.parse(el.textContent);

        // 深度优先搜索：在所有嵌套对象中找 { cid, aid/bvid } 或 { cid, id/epid }
        const found = _deepSearchCid(nd);
        if (found) {
          if (found.epid || found.id) {
            return {
              type: 'pgc',
              cid: found.cid,
              aid: found.aid,
              bvid: found.bvid,
              epid: found.epid || found.id,
              seasonId: found.season_id,
              title: found.title || found.season_title || '',
              seasonTitle: found.title || found.season_title || '',
              epTitle: found.long_title || found.epTitle || '',
            };
          }
          return {
            type: 'video',
            cid: found.cid,
            aid: found.aid,
            bvid: found.bvid,
            title: found.title || '',
            pages: found.pages || [],
          };
        }
      } catch (e) { /* ignore */ }
    }

    // ---- 2d. URL 回退 ----
    let aid = null, bvid = null, epid = null, seasonId = null;
    const m1 = url.match(/\/video\/(?:[aA][vV](\d+)|([bB][vV][0-9A-Za-z]+))/);
    if (m1) {
      if (m1[1]) aid = parseInt(m1[1]);
      if (m1[2]) bvid = m1[2];
      return { type: 'video', aid, bvid, cid: null, title: '' };
    }
    const m2 = url.match(/\/bangumi\/play\/(?:ss(\d+)|ep(\d+))/);
    if (m2) {
      if (m2[1]) seasonId = parseInt(m2[1]);
      if (m2[2]) epid = parseInt(m2[2]);
      return { type: 'pgc', seasonId, epid, cid: null, aid: null, title: '' };
    }

    return null;
  }

  /** 从 JSON 对象中深度递归搜索包含 cid 的子对象 */
  function _deepSearchCid(obj, depth) {
    if (!obj || typeof obj !== 'object' || (depth || 0) > 20) return null;
    if (depth == null) depth = 0;

    // 当前层有 cid 且不是 null/undefined
    if (obj.cid != null && (obj.aid != null || obj.bvid != null || obj.epid != null || obj.id != null || obj.title != null)) {
      return obj;
    }

    // 递归
    if (Array.isArray(obj)) {
      for (const item of obj) {
        const r = _deepSearchCid(item, depth + 1);
        if (r) return r;
      }
    } else {
      for (const key of Object.keys(obj)) {
        // 跳过无关的巨型属性
        if (key === 'queries' || key === 'state' || key === 'data' || key === 'result' ||
            key === 'pageProps' || key === 'props' || key === 'dehydratedState' ||
            key === 'epInfo' || key === 'mediaInfo' || key === 'videoData' ||
            key === 'epList' || key === 'sections' || key === 'episodes' || key === 'episode') {
          const r = _deepSearchCid(obj[key], depth + 1);
          if (r) return r;
        }
      }
      // 再扫其余键
      for (const key of Object.keys(obj)) {
        const r = _deepSearchCid(obj[key], depth + 1);
        if (r) return r;
      }
    }
    return null;
  }

  /* =============================================================
   * 3. API 请求封装
   * ============================================================= */
  function apiGet(url, responseType) {
    return new Promise((resolve, reject) => {
      if (typeof GM_xmlhttpRequest !== 'undefined') {
        GM_xmlhttpRequest({
          method: 'GET',
          url: url,
          responseType: responseType || 'arraybuffer',
          timeout: 30000,
          onload: r => resolve(r),
          onerror: e => reject(e),
          ontimeout: () => reject(new Error('timeout'))
        });
      } else {
        fetch(url, { credentials: 'include' })
          .then(r => {
            if (!r.ok) throw new Error('HTTP ' + r.status);
            return responseType === 'arraybuffer' ? r.arrayBuffer() : r.json();
          })
          .then(d => resolve({ response: d }))
          .catch(reject);
      }
    });
  }

  function apiGetJSON(url) {
    return apiGet(url, 'text').then(r => {
      const raw = r.response;
      if (typeof raw === 'string') {
        try { return JSON.parse(raw); } catch (e) {
          console.log('[BiliDM] JSON parse failed for', url, 'first 200 chars:', raw.substring(0, 200));
          throw e;
        }
      }
      // already parsed (fetch fallback)
      return raw;
    });
  }

  /* =============================================================
   * 4. 解析 cid
   * ============================================================= */
  async function resolveCid(info) {
    if (info.cid != null) return info;

    if (info.type === 'video' && (info.aid || info.bvid)) {
      const param = info.bvid ? `bvid=${info.bvid}` : `aid=${info.aid}`;
      const data = await apiGetJSON(`https://api.bilibili.com/x/web-interface/view?${param}`);
      if (data.code !== 0) throw new Error('获取视频信息失败: ' + (data.message || data.code));
      info.cid = data.data.cid;
      info.aid = data.data.aid;
      info.bvid = data.data.bvid;
      info.title = data.data.title;
      info.pages = data.data.pages;
      return info;
    }

    if (info.type === 'pgc') {
      let param;
      if (info.seasonId) param = `season_id=${info.seasonId}`;
      else if (info.epid) param = `ep_id=${info.epid}`;
      else throw new Error('无法确定番剧标识');

      const log = (...args) => console.log('[BiliDM][PGC]', ...args);

      // 尝试 1: pgc/view/web/season
      try {
        const data = await apiGetJSON(`https://api.bilibili.com/pgc/view/web/season?${param}`);
        log('season API 响应字段:', Object.keys(data || {}).join(', '));
        log('season API 原始:', JSON.stringify(data).substring(0, 300));

        // 兼容两种返回格式: {code, message, result} 和直接 {result}
        const result = data.result || (data.code === 0 ? data.data : null);
        if (result && result.episodes) {
          const eps = result.episodes;
          let ep;
          if (info.epid) {
            ep = eps.find(e => e.id === info.epid || e.ep_id === info.epid);
          }
          if (!ep) {
            ep = eps.find(e => e.status === 2 || e.status === 13);
            if (!ep && eps.length > 0) ep = eps[0];
          }
          if (ep && ep.cid) {
            info.cid = ep.cid;
            info.aid = ep.aid;
            info.bvid = ep.bvid;
            info.epid = ep.id || ep.ep_id;
            info.seasonTitle = result.title || result.season_title || '';
            info.epTitle = ep.title || ep.long_title || ep.share_copy || '';
            info.title = info.seasonTitle + (info.epTitle ? ' - ' + info.epTitle : '');
            return info;
          }
        }
        log('season API code=' + data.code + ' msg=' + (data.message || '(无)'));
      } catch (e) {
        log('season API 异常:', e.message);
      }

      // 尝试 2: 用 aid/bvid 走 video API（番剧底层仍对应一个 av 号）
      if (info.aid || info.bvid) {
        try {
          const vparam = info.bvid ? `bvid=${info.bvid}` : `aid=${info.aid}`;
          const vdata = await apiGetJSON(`https://api.bilibili.com/x/web-interface/view?${vparam}`);
          if (vdata.code === 0 && vdata.data && vdata.data.cid) {
            info.cid = vdata.data.cid;
            info.aid = vdata.data.aid;
            info.bvid = vdata.data.bvid;
            info.title = vdata.data.title || info.title;
            info.pages = vdata.data.pages;
            return info;
          }
          log('video API fallback code=' + vdata.code);
        } catch (e) {
          log('video API fallback 异常:', e.message);
        }
      }

      // 尝试 3: 从当前页的播放器抓 cid
      try {
        const win = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
        const player = win.player || win.__player__;
        if (player && player.getVideoMessage) {
          const vm = player.getVideoMessage();
          if (vm && vm.cid) {
            log('从播放器实例获取 cid=' + vm.cid);
            info.cid = vm.cid;
            info.aid = vm.aid;
            info.bvid = vm.bvid;
            info.title = vm.title || info.title;
            return info;
          }
        }
      } catch (e) { /* ignore */ }

      throw new Error('获取番剧信息失败 (已尝试 season API / video API / 播放器实例)');
    }

    throw new Error('无法获取 cid');
  }

  /* =============================================================
   * 5. 下载弹幕主体逻辑
   * ============================================================= */

  /** 获取 view config (segment 数量 + 特殊弹幕地址) */
  async function fetchViewConfig(cid) {
    const url = `https://api.bilibili.com/x/v2/dm/web/view?type=1&oid=${cid}`;
    const r = await apiGet(url, 'arraybuffer');
    const buf = r.response;
    if (!buf || buf.byteLength === 0) throw new Error('view config 响应为空');
    return Dec.viewReply(buf);
  }

  /** 获取一个 segment 的弹幕 */
  async function fetchSegment(cid, idx) {
    const url = `https://api.bilibili.com/x/v2/dm/web/seg.so?type=1&oid=${cid}&segment_index=${idx}`;
    const r = await apiGet(url, 'arraybuffer');
    const buf = r.response;
    if (!buf || buf.byteLength === 0) return [];
    return Dec.segReply(buf);
  }

  /** 获取特殊弹幕专包 (BAS / 代码弹幕) */
  async function fetchSpecialDanmaku(urls) {
    if (!urls || urls.length === 0) return [];
    const results = await Promise.allSettled(
      urls.map(u => apiGet(u, 'arraybuffer').then(r => Dec.segReply(r.response)))
    );
    const all = [];
    for (const r of results) {
      if (r.status === 'fulfilled') all.push(...r.value);
    }
    return all;
  }

  let _btnEl = null;
  let _btnTextEl = null;
  let _btnIconEl = null;

  let _downloading = false;

  function setBtnState(state) {
    if (!_btnEl) return;
    const s = {
      idle:    { bg: '#00a1d6', text: '',          pointer: '',        opacity: '' },
      loading: { bg: '#ffb027', text: '',          pointer: 'wait',    opacity: '0.8' },
      done:    { bg: '#00a1d6', text: '',          pointer: '',        opacity: '' },
      error:   { bg: '#e74c3c', text: '',          pointer: '',        opacity: '' },
    }[state] || { bg: '#00a1d6', text: '', pointer: '', opacity: '' };
    _btnEl.style.background = s.bg;
    _btnEl.style.cursor = s.pointer || 'pointer';
    _btnEl.style.opacity = s.opacity || '1';
    if (_btnTextEl && _btnTextEl.style.display === 'block') {
      const labels = { idle:'下载弹幕', loading:'加载中…', done:'下载完成', error:'下载失败' };
      _btnTextEl.textContent = labels[state] || '下载弹幕';
    }
  }

  /** 主下载函数 */
  async function downloadDanmaku() {
    const log = (...args) => console.log('[BiliDM]', ...args);

    if (_downloading) {
      log('已有下载任务进行中');
      return;
    }
    _downloading = true;
    setBtnState('loading');

    log('开始分析页面...');
    let info;
    try {
      info = extractPageInfo();
      if (!info) throw new Error('未检测到视频页面，请在 AV/BV 视频或番剧播放页使用');
      log('页面类型:', info.type);
    } catch (e) {
      log('ERROR: ' + e.message);
      alert('[BiliDM] ' + e.message);
      setBtnState('error');
      _downloading = false;
      return;
    }

    try {
      info = await resolveCid(info);
      if (!info.cid) throw new Error('无法获取 cid');
      log('cid:', info.cid, 'title:', info.title);
    } catch (e) {
      log('ERROR: ' + e.message);
      alert('[BiliDM] ' + e.message);
      setBtnState('error');
      _downloading = false;
      return;
    }

    log('正在获取弹幕元数据...');
    let view;
    try {
      view = await fetchViewConfig(info.cid);
    } catch (e) {
      log('获取 view config 失败，将使用时长估算分段', e);
      view = { dmSge: null, specialDms: [] };
    }

    // 确定分段数
    let segmentCount = 1;
    if (view.dmSge && view.dmSge.total > 0) {
      segmentCount = Number(view.dmSge.total);
      log(`分段数: ${segmentCount} (来自 API)`);
    } else {
      // 尝试从页面获取时长估算
      const dur = info.pages && info.pages.length > 0
        ? info.pages[0].duration
        : (typeof unsafeWindow !== 'undefined' ? unsafeWindow : window).player
          ? ((typeof unsafeWindow !== 'undefined' ? unsafeWindow : window).player.getDuration)
            ? ((typeof unsafeWindow !== 'undefined' ? unsafeWindow : window).player.getDuration() * 1000)
            : null
          : null;
      if (dur) {
        segmentCount = Math.max(1, Math.ceil(dur / 360000));
      } else {
        // 探测式
        segmentCount = 200;
      }
      log(`分段数: ${segmentCount} (估算)`);
    }

    // 并发获取所有分段弹幕 (限制并发数)
    const CONCURRENCY = 6;
    const allDanmaku = [];
    log(`正在获取 ${segmentCount} 个分段弹幕...`);

    let consecutiveEmpties = 0;

    for (let i = 0; i < segmentCount; i += CONCURRENCY) {
      const batch = [];
      for (let j = i; j < Math.min(i + CONCURRENCY, segmentCount); j++) {
        batch.push(
          fetchSegment(info.cid, j + 1).catch(e => {
            log(`分段 ${j + 1} 获取失败:`, e.message);
            return [];
          })
        );
      }
      const results = await Promise.all(batch);

      let anyNonEmpty = false;
      for (const dms of results) {
        if (dms.length > 0) {
          anyNonEmpty = true;
          allDanmaku.push(...dms);
        }
      }

      if (!anyNonEmpty) {
        consecutiveEmpties++;
        if (consecutiveEmpties >= 3 && i >= 6) {
          log('连续空分段，提前结束');
          break;
        }
      } else {
        consecutiveEmpties = 0;
      }

      const pct = Math.min(100, Math.round((i + CONCURRENCY) / segmentCount * 100));
      log(`进度: ${pct}% (已获取 ${allDanmaku.length} 条弹幕)`);
    }

    log(`普通弹幕: ${allDanmaku.length} 条`);

    // 获取特殊弹幕
    let specialDms = [];
    if (view.specialDms && view.specialDms.length > 0) {
      log('正在获取特殊弹幕专包...');
      specialDms = await fetchSpecialDanmaku(view.specialDms);
      log(`特殊弹幕: ${specialDms.length} 条`);
    }

    // 合并 & 去重 (按 id)
    const all = [...allDanmaku, ...specialDms];
    const seen = new Set();
    const unique = all.filter(dm => {
      const key = dm.idStr || String(dm.id);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
    unique.sort((a, b) => (a.progress || 0) - (b.progress || 0));

    log(`总计弹幕: ${unique.length} 条 (去重后)`);

    if (unique.length === 0) {
      alert('[BiliDM] 未获取到任何弹幕');
      setBtnState('error');
      _downloading = false;
      return;
    }

    // 生成 ASS
    const assContent = generateASS(unique, info);

    // 下载 — 用原生 Blob + a.click() 方式以弹出浏览器下载窗口
    const safeTitle = (info.title || 'bilibili_danmaku').replace(/[\\/:*?"<>|]/g, '_');
    const filename = `[bilibili] ${safeTitle}.ass`.substring(0, 250);

    const bom = '\uFEFF';
    const blob = new Blob([bom + assContent], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // 延迟 revoke 以确保浏览器已开始下载
    setTimeout(() => URL.revokeObjectURL(url), 120000);
    log(`下载已触发 → ${filename} (${unique.length} 条弹幕)`);
    setBtnState('done');
    _downloading = false;
  }

  /* =============================================================
   * 6. ASS 字幕生成
   * ============================================================= */
  function generateASS(danmakuList, info) {
    const playResX = 1920;
    const playResY = 1080;

    const lines = [];
    lines.push('[Script Info]');
    lines.push('Title: ' + (info.title || 'Bilibili Danmaku').replace(/,/g, '，'));
    lines.push('Original Script: Bilibili Danmaku Downloader (UserScript)');
    lines.push('ScriptType: v4.00+');
    lines.push('Collisions: Normal');
    lines.push(`PlayResX: ${playResX}`);
    lines.push(`PlayResY: ${playResY}`);
    lines.push('Timer: 100.0000');
    lines.push('WrapStyle: 2');
    lines.push('');

    lines.push('[V4+ Styles]');
    lines.push('Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding');
    // R2L: 右→左滚动
    lines.push('Style: R2L,Microsoft YaHei,25,&H00FFFFFF,&H000000FF,&H00000000,&H00000000,0,0,0,0,100,100,0,0,1,1,0,2,10,10,10,1');
    // L2R: 左→右滚动 (逆向弹幕)
    lines.push('Style: L2R,Microsoft YaHei,25,&H00FFFFFF,&H000000FF,&H00000000,&H00000000,0,0,0,0,100,100,0,0,1,1,0,2,10,10,10,1');
    // TOP: 顶部固定
    lines.push('Style: TOP,Microsoft YaHei,25,&H00FFFFFF,&H000000FF,&H00000000,&H00000000,0,0,0,0,100,100,0,0,1,1,0,8,10,10,10,1');
    // BTM: 底部固定
    lines.push('Style: BTM,Microsoft YaHei,25,&H00FFFFFF,&H000000FF,&H00000000,&H00000000,0,0,0,0,100,100,0,0,1,1,0,2,10,10,10,1');
    // SPC: 特殊/高级弹幕
    lines.push('Style: SPC,Microsoft YaHei,25,&H00FFFFFF,&H000000FF,&H00000000,&H00000000,0,0,0,0,100,100,0,0,1,1,0,2,10,10,10,1');
    lines.push('');

    lines.push('[Events]');
    lines.push('Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text');

    // 滚动弹幕轨道分配 (减少重叠)
    const trackCount = 15;
    const trackUsage = new Array(trackCount).fill(0);

    // 底部弹幕轨道
    const btmTrackCount = 5;
    const btmTrackUsage = new Array(btmTrackCount).fill(0);

    for (const dm of danmakuList) {
      const progress = dm.progress || 0;  // ms
      const mode = dm.mode || 1;
      const fontSize = dm.fontsize || 25;
      const color = dm.color || 16777215;
      const content = (dm.content || '').replace(/\r?\n/g, ' ').replace(/\{/g, '\\{').replace(/\}/g, '\\}');

      if (!content.trim()) continue;

      const startMs = progress / 1000;  // 转换为秒 (ASS 用秒)
      const colorHex = '&H' + ((color & 0xFF) << 16 | (color & 0xFF00) | ((color >> 16) & 0xFF)).toString(16).toUpperCase().padStart(6, '0') + '&';

      let style, duration, effect;
      const fontSizeScale = fontSize / 25;

      if (mode >= 1 && mode <= 3) {
        // 普通滚动弹幕 R2L
        style = 'R2L';
        const textWidth = content.length * fontSize * 0.65;
        const scrollSpeed = 200;
        duration = Math.max(5, (playResX + textWidth) / scrollSpeed);
        const track = findTrack(trackUsage, startMs);
        trackUsage[track] = startMs + duration;
        const y = Math.round((track / trackCount) * (playResY * 0.78) + playResY * 0.06);
        const fontSizeTag = fontSize !== 25 ? `\\fs${fontSize}` : '';
        effect = `{\\move(${playResX},${y},${-Math.round(textWidth)},${y})\\c${colorHex}${fontSizeTag}}`;
      } else if (mode === 4) {
        // 底部固定
        style = 'BTM';
        duration = 5.0;
        const track = findTrack(btmTrackUsage, startMs);
        btmTrackUsage[track] = startMs + duration;
        const y = Math.round(playResY * 0.85 + track * fontSize * 2);
        const fontSizeTag = fontSize !== 25 ? `\\fs${fontSize}` : '';
        effect = `{\\an2\\pos(${Math.round(playResX / 2)},${y})\\c${colorHex}${fontSizeTag}}`;
      } else if (mode === 5) {
        // 顶部固定
        style = 'TOP';
        duration = 5.0;
        const track = (dm.id || 0) % 10;
        const y = Math.round(fontSize * 2 * track + fontSize);
        const fontSizeTag = fontSize !== 25 ? `\\fs${fontSize}` : '';
        effect = `{\\an8\\pos(${Math.round(playResX / 2)},${y})\\c${colorHex}${fontSizeTag}}`;
      } else if (mode === 6) {
        // 逆向弹幕 L2R
        style = 'L2R';
        const textWidth = content.length * fontSize * 0.65;
        const scrollSpeed = 200;
        duration = Math.max(5, (playResX + textWidth) / scrollSpeed);
        const track = findTrack(trackUsage, startMs);
        trackUsage[track] = startMs + duration;
        const y = Math.round((track / trackCount) * (playResY * 0.78) + playResY * 0.06);
        const fontSizeTag = fontSize !== 25 ? `\\fs${fontSize}` : '';
        effect = `{\\move(${-Math.round(textWidth)},${y},${playResX},${y})\\c${colorHex}${fontSizeTag}}`;
      } else {
        // mode 7 高级 / 8 代码 / 9 BAS → 特殊样式滚动
        style = 'SPC';
        const textWidth = content.length * fontSize * 0.65;
        const scrollSpeed = 200;
        duration = Math.max(5, (playResX + textWidth) / scrollSpeed);
        const track = findTrack(trackUsage, startMs);
        trackUsage[track] = startMs + duration;
        const y = Math.round((track / trackCount) * (playResY * 0.78) + playResY * 0.06);
        const fontSizeTag = fontSize !== 25 ? `\\fs${fontSize}` : '';
        effect = `{\\move(${playResX},${y},${-Math.round(textWidth)},${y})\\c${colorHex}${fontSizeTag}}`;
      }

      const endMs = startMs + duration;
      const startAss = msToASS(startMs);
      const endAss = msToASS(endMs);

      lines.push(`Dialogue: 0,${startAss},${endAss},${style},,0,0,0,,${effect}${content}`);
    }

    return lines.join('\r\n');
  }

  /** 找一个可用的轨道 (时间不重叠) */
  function findTrack(usage, startTime) {
    for (let i = 0; i < usage.length; i++) {
      if (usage[i] <= startTime) return i;
    }
    // 全部忙碌 → 找最早结束的
    let min = Infinity, idx = 0;
    for (let i = 0; i < usage.length; i++) {
      if (usage[i] < min) { min = usage[i]; idx = i; }
    }
    usage[idx] = startTime; // 覆盖
    return idx;
  }

  /** 秒转 ASS 时间格式 H:MM:SS.CC */
  function msToASS(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    const cs = Math.round((seconds % 1) * 100);
    return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}.${String(cs).padStart(2, '0')}`;
  }

  /* =============================================================
   * 7. 右下角悬浮按钮
   * ============================================================= */
  const FAB_HTML = `
    <div id="bili-dm-dl-wrap" title="下载弹幕 (ASS字幕)"
         style="position:fixed;bottom:80px;right:24px;z-index:9999;
                width:44px;height:44px;border-radius:50%;
                background:#00a1d6;color:#fff;cursor:pointer;
                display:flex;align-items:center;justify-content:center;
                box-shadow:0 2px 10px rgba(0,161,214,0.4);
                transition:transform 0.15s,opacity 0.15s,background 0.15s;
                user-select:none;"
         onmouseover="this.style.transform='scale(1.08)';this.style.boxShadow='0 4px 16px rgba(0,161,214,0.55)'"
         onmouseout="this.style.transform='';this.style.boxShadow='0 2px 10px rgba(0,161,214,0.4)'">
      <svg id="bili-dm-dl-icon" width="24" height="24" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M14.045 25.545c-6.351 0-11.5-5.149-11.5-11.5s5.149-11.5 11.5-11.5 11.5 5.149 11.5 11.5-5.149 11.5-11.5 11.5zm-.955-17.18v5.457l-2.703-2.612a.906.906 0 10-1.255 1.305l4.213 4.052a.907.907 0 001.23 0l4.212-4.052a.906.906 0 00-1.255-1.305l-2.532 2.447V8.364a.906.906 0 00-1.812 0z"
              fill="currentColor"/>
      </svg>
      <span id="bili-dm-dl-text"
            style="display:none;position:absolute;bottom:48px;right:0;
                   background:rgba(0,0,0,0.75);color:#fff;font-size:12px;
                   padding:4px 8px;border-radius:4px;white-space:nowrap;pointer-events:none;">
        下载弹幕
      </span>
    </div>`;

  function injectFAB() {
    if (document.getElementById('bili-dm-dl-wrap')) return;

    const temp = document.createElement('div');
    temp.innerHTML = FAB_HTML;
    const fab = temp.firstElementChild;
    document.body.appendChild(fab);

    _btnEl = fab;
    _btnIconEl = document.getElementById('bili-dm-dl-icon');
    _btnTextEl = document.getElementById('bili-dm-dl-text');

    fab.addEventListener('click', e => {
      e.stopPropagation();
      downloadDanmaku();
    });

    // 鼠标悬停显示文字提示
    fab.addEventListener('mouseenter', () => {
      if (_btnTextEl) _btnTextEl.style.display = 'block';
    });
    fab.addEventListener('mouseleave', () => {
      if (_btnTextEl) _btnTextEl.style.display = 'none';
    });
  }

  /* =============================================================
   * 8. 初始化
   * ============================================================= */
  const global = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
  global.__bili_dm_dl__ = downloadDanmaku;

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    injectFAB();
  } else {
    window.addEventListener('DOMContentLoaded', injectFAB);
  }
  // 兜底：SPA 导航可能导致 body 重建
  setTimeout(injectFAB, 2000);
  setTimeout(injectFAB, 5000);

  console.log("Script BiliBili-DownloadDanmaku (BiliBili-弹幕下载) loaded successfully. https://github.com/MehverSynRGB/BiliBili-DownloadDanmaku");
})();
