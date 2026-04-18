import type { VercelConfig } from '@vercel/config/v1';

export const config: VercelConfig = {
	ignoreCommand: "git diff --quiet HEAD~1 HEAD -- . ':!**.md' ':!LICENSE' ':!.env.example' ':!.github/**' ':!.vscode/**' || exit 1",
	trailingSlash: false,
};
