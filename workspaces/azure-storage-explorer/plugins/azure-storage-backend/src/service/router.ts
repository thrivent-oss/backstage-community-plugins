/*
 * Copyright 2024 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Config } from '@backstage/config';
import { Logger } from 'winston';
import { AzureStorageBuilder } from './AzureStorageBuilder';

/**
 * @deprecated Please migrate to the new backend system as this will be removed in the future.
 *
 * @public */
export interface RouterOptions {
  logger: Logger;
  config: Config;
}

/**
 * @deprecated Please migrate to the new backend system as this will be removed in the future.
 *
 * @public */
export async function createRouter(options: RouterOptions) {
  const { logger, config } = options;
  const { router } = await AzureStorageBuilder.createBuilder({
    logger,
    config,
  }).build();

  return router;
}
