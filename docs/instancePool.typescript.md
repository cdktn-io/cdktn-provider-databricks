# `instancePool` Submodule <a name="`instancePool` Submodule" id="@cdktn/provider-databricks.instancePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InstancePool <a name="InstancePool" id="@cdktn/provider-databricks.instancePool.InstancePool"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool databricks_instance_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.instancePool.InstancePool.Initializer"></a>

```typescript
import { instancePool } from '@cdktn/provider-databricks'

new instancePool.InstancePool(scope: Construct, id: string, config: InstancePoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolConfig">InstancePoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.instancePool.InstancePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.instancePool.InstancePool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.instancePool.InstancePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolConfig">InstancePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.putAwsAttributes">putAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.putAzureAttributes">putAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.putDiskSpec">putDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.putGcpAttributes">putGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.putInstancePoolFleetAttributes">putInstancePoolFleetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.putNodeTypeFlexibility">putNodeTypeFlexibility</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.putPreloadedDockerImage">putPreloadedDockerImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.resetAwsAttributes">resetAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.resetAzureAttributes">resetAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.resetCustomTags">resetCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.resetDiskSpec">resetDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.resetEnableElasticDisk">resetEnableElasticDisk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.resetGcpAttributes">resetGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.resetInstancePoolFleetAttributes">resetInstancePoolFleetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.resetInstancePoolId">resetInstancePoolId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.resetMaxCapacity">resetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.resetMinIdleInstances">resetMinIdleInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.resetNodeTypeFlexibility">resetNodeTypeFlexibility</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.resetNodeTypeId">resetNodeTypeId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.resetPreloadedDockerImage">resetPreloadedDockerImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.resetPreloadedSparkVersions">resetPreloadedSparkVersions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.instancePool.InstancePool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.instancePool.InstancePool.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.instancePool.InstancePool.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.instancePool.InstancePool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.instancePool.InstancePool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.instancePool.InstancePool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.instancePool.InstancePool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.instancePool.InstancePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.instancePool.InstancePool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.instancePool.InstancePool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.instancePool.InstancePool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.instancePool.InstancePool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.instancePool.InstancePool.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.instancePool.InstancePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.instancePool.InstancePool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.instancePool.InstancePool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.instancePool.InstancePool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.instancePool.InstancePool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.instancePool.InstancePool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.instancePool.InstancePool.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.instancePool.InstancePool.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.instancePool.InstancePool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.instancePool.InstancePool.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.instancePool.InstancePool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.instancePool.InstancePool.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.instancePool.InstancePool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.instancePool.InstancePool.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.instancePool.InstancePool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.instancePool.InstancePool.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.instancePool.InstancePool.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.instancePool.InstancePool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAwsAttributes` <a name="putAwsAttributes" id="@cdktn/provider-databricks.instancePool.InstancePool.putAwsAttributes"></a>

```typescript
public putAwsAttributes(value: InstancePoolAwsAttributes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.instancePool.InstancePool.putAwsAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributes">InstancePoolAwsAttributes</a>

---

##### `putAzureAttributes` <a name="putAzureAttributes" id="@cdktn/provider-databricks.instancePool.InstancePool.putAzureAttributes"></a>

```typescript
public putAzureAttributes(value: InstancePoolAzureAttributes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.instancePool.InstancePool.putAzureAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributes">InstancePoolAzureAttributes</a>

---

##### `putDiskSpec` <a name="putDiskSpec" id="@cdktn/provider-databricks.instancePool.InstancePool.putDiskSpec"></a>

```typescript
public putDiskSpec(value: InstancePoolDiskSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.instancePool.InstancePool.putDiskSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpec">InstancePoolDiskSpec</a>

---

##### `putGcpAttributes` <a name="putGcpAttributes" id="@cdktn/provider-databricks.instancePool.InstancePool.putGcpAttributes"></a>

```typescript
public putGcpAttributes(value: InstancePoolGcpAttributes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.instancePool.InstancePool.putGcpAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributes">InstancePoolGcpAttributes</a>

---

##### `putInstancePoolFleetAttributes` <a name="putInstancePoolFleetAttributes" id="@cdktn/provider-databricks.instancePool.InstancePool.putInstancePoolFleetAttributes"></a>

```typescript
public putInstancePoolFleetAttributes(value: InstancePoolInstancePoolFleetAttributes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.instancePool.InstancePool.putInstancePoolFleetAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes">InstancePoolInstancePoolFleetAttributes</a>

---

##### `putNodeTypeFlexibility` <a name="putNodeTypeFlexibility" id="@cdktn/provider-databricks.instancePool.InstancePool.putNodeTypeFlexibility"></a>

```typescript
public putNodeTypeFlexibility(value: InstancePoolNodeTypeFlexibility): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.instancePool.InstancePool.putNodeTypeFlexibility.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibility">InstancePoolNodeTypeFlexibility</a>

---

##### `putPreloadedDockerImage` <a name="putPreloadedDockerImage" id="@cdktn/provider-databricks.instancePool.InstancePool.putPreloadedDockerImage"></a>

```typescript
public putPreloadedDockerImage(value: IResolvable | InstancePoolPreloadedDockerImage[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.instancePool.InstancePool.putPreloadedDockerImage.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImage">InstancePoolPreloadedDockerImage</a>[]

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.instancePool.InstancePool.putProviderConfig"></a>

```typescript
public putProviderConfig(value: InstancePoolProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.instancePool.InstancePool.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolProviderConfig">InstancePoolProviderConfig</a>

---

##### `resetAwsAttributes` <a name="resetAwsAttributes" id="@cdktn/provider-databricks.instancePool.InstancePool.resetAwsAttributes"></a>

```typescript
public resetAwsAttributes(): void
```

##### `resetAzureAttributes` <a name="resetAzureAttributes" id="@cdktn/provider-databricks.instancePool.InstancePool.resetAzureAttributes"></a>

```typescript
public resetAzureAttributes(): void
```

##### `resetCustomTags` <a name="resetCustomTags" id="@cdktn/provider-databricks.instancePool.InstancePool.resetCustomTags"></a>

```typescript
public resetCustomTags(): void
```

##### `resetDiskSpec` <a name="resetDiskSpec" id="@cdktn/provider-databricks.instancePool.InstancePool.resetDiskSpec"></a>

```typescript
public resetDiskSpec(): void
```

##### `resetEnableElasticDisk` <a name="resetEnableElasticDisk" id="@cdktn/provider-databricks.instancePool.InstancePool.resetEnableElasticDisk"></a>

```typescript
public resetEnableElasticDisk(): void
```

##### `resetGcpAttributes` <a name="resetGcpAttributes" id="@cdktn/provider-databricks.instancePool.InstancePool.resetGcpAttributes"></a>

```typescript
public resetGcpAttributes(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.instancePool.InstancePool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstancePoolFleetAttributes` <a name="resetInstancePoolFleetAttributes" id="@cdktn/provider-databricks.instancePool.InstancePool.resetInstancePoolFleetAttributes"></a>

```typescript
public resetInstancePoolFleetAttributes(): void
```

##### `resetInstancePoolId` <a name="resetInstancePoolId" id="@cdktn/provider-databricks.instancePool.InstancePool.resetInstancePoolId"></a>

```typescript
public resetInstancePoolId(): void
```

##### `resetMaxCapacity` <a name="resetMaxCapacity" id="@cdktn/provider-databricks.instancePool.InstancePool.resetMaxCapacity"></a>

```typescript
public resetMaxCapacity(): void
```

##### `resetMinIdleInstances` <a name="resetMinIdleInstances" id="@cdktn/provider-databricks.instancePool.InstancePool.resetMinIdleInstances"></a>

```typescript
public resetMinIdleInstances(): void
```

##### `resetNodeTypeFlexibility` <a name="resetNodeTypeFlexibility" id="@cdktn/provider-databricks.instancePool.InstancePool.resetNodeTypeFlexibility"></a>

```typescript
public resetNodeTypeFlexibility(): void
```

##### `resetNodeTypeId` <a name="resetNodeTypeId" id="@cdktn/provider-databricks.instancePool.InstancePool.resetNodeTypeId"></a>

```typescript
public resetNodeTypeId(): void
```

##### `resetPreloadedDockerImage` <a name="resetPreloadedDockerImage" id="@cdktn/provider-databricks.instancePool.InstancePool.resetPreloadedDockerImage"></a>

```typescript
public resetPreloadedDockerImage(): void
```

##### `resetPreloadedSparkVersions` <a name="resetPreloadedSparkVersions" id="@cdktn/provider-databricks.instancePool.InstancePool.resetPreloadedSparkVersions"></a>

```typescript
public resetPreloadedSparkVersions(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.instancePool.InstancePool.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a InstancePool resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.instancePool.InstancePool.isConstruct"></a>

```typescript
import { instancePool } from '@cdktn/provider-databricks'

instancePool.InstancePool.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.instancePool.InstancePool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.instancePool.InstancePool.isTerraformElement"></a>

```typescript
import { instancePool } from '@cdktn/provider-databricks'

instancePool.InstancePool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.instancePool.InstancePool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.instancePool.InstancePool.isTerraformResource"></a>

```typescript
import { instancePool } from '@cdktn/provider-databricks'

instancePool.InstancePool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.instancePool.InstancePool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.instancePool.InstancePool.generateConfigForImport"></a>

```typescript
import { instancePool } from '@cdktn/provider-databricks'

instancePool.InstancePool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a InstancePool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.instancePool.InstancePool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.instancePool.InstancePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the InstancePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.instancePool.InstancePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing InstancePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.instancePool.InstancePool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the InstancePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.awsAttributes">awsAttributes</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference">InstancePoolAwsAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.azureAttributes">azureAttributes</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference">InstancePoolAzureAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.diskSpec">diskSpec</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference">InstancePoolDiskSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.gcpAttributes">gcpAttributes</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference">InstancePoolGcpAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.instancePoolFleetAttributes">instancePoolFleetAttributes</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference">InstancePoolInstancePoolFleetAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.nodeTypeFlexibility">nodeTypeFlexibility</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference">InstancePoolNodeTypeFlexibilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.preloadedDockerImage">preloadedDockerImage</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList">InstancePoolPreloadedDockerImageList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference">InstancePoolProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.awsAttributesInput">awsAttributesInput</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributes">InstancePoolAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.azureAttributesInput">azureAttributesInput</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributes">InstancePoolAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.customTagsInput">customTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.diskSpecInput">diskSpecInput</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpec">InstancePoolDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.enableElasticDiskInput">enableElasticDiskInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.gcpAttributesInput">gcpAttributesInput</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributes">InstancePoolGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.idleInstanceAutoterminationMinutesInput">idleInstanceAutoterminationMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.instancePoolFleetAttributesInput">instancePoolFleetAttributesInput</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes">InstancePoolInstancePoolFleetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.instancePoolIdInput">instancePoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.instancePoolNameInput">instancePoolNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.maxCapacityInput">maxCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.minIdleInstancesInput">minIdleInstancesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.nodeTypeFlexibilityInput">nodeTypeFlexibilityInput</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibility">InstancePoolNodeTypeFlexibility</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.nodeTypeIdInput">nodeTypeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.preloadedDockerImageInput">preloadedDockerImageInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImage">InstancePoolPreloadedDockerImage</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.preloadedSparkVersionsInput">preloadedSparkVersionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.providerConfigInput">providerConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolProviderConfig">InstancePoolProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.customTags">customTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.enableElasticDisk">enableElasticDisk</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.idleInstanceAutoterminationMinutes">idleInstanceAutoterminationMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.instancePoolId">instancePoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.instancePoolName">instancePoolName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.maxCapacity">maxCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.minIdleInstances">minIdleInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.nodeTypeId">nodeTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.preloadedSparkVersions">preloadedSparkVersions</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.instancePool.InstancePool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.instancePool.InstancePool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.instancePool.InstancePool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.instancePool.InstancePool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.instancePool.InstancePool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.instancePool.InstancePool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.instancePool.InstancePool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.instancePool.InstancePool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.instancePool.InstancePool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.instancePool.InstancePool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.instancePool.InstancePool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.instancePool.InstancePool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.instancePool.InstancePool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.instancePool.InstancePool.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `awsAttributes`<sup>Required</sup> <a name="awsAttributes" id="@cdktn/provider-databricks.instancePool.InstancePool.property.awsAttributes"></a>

```typescript
public readonly awsAttributes: InstancePoolAwsAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference">InstancePoolAwsAttributesOutputReference</a>

---

##### `azureAttributes`<sup>Required</sup> <a name="azureAttributes" id="@cdktn/provider-databricks.instancePool.InstancePool.property.azureAttributes"></a>

```typescript
public readonly azureAttributes: InstancePoolAzureAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference">InstancePoolAzureAttributesOutputReference</a>

---

##### `diskSpec`<sup>Required</sup> <a name="diskSpec" id="@cdktn/provider-databricks.instancePool.InstancePool.property.diskSpec"></a>

```typescript
public readonly diskSpec: InstancePoolDiskSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference">InstancePoolDiskSpecOutputReference</a>

---

##### `gcpAttributes`<sup>Required</sup> <a name="gcpAttributes" id="@cdktn/provider-databricks.instancePool.InstancePool.property.gcpAttributes"></a>

```typescript
public readonly gcpAttributes: InstancePoolGcpAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference">InstancePoolGcpAttributesOutputReference</a>

---

##### `instancePoolFleetAttributes`<sup>Required</sup> <a name="instancePoolFleetAttributes" id="@cdktn/provider-databricks.instancePool.InstancePool.property.instancePoolFleetAttributes"></a>

```typescript
public readonly instancePoolFleetAttributes: InstancePoolInstancePoolFleetAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference">InstancePoolInstancePoolFleetAttributesOutputReference</a>

---

##### `nodeTypeFlexibility`<sup>Required</sup> <a name="nodeTypeFlexibility" id="@cdktn/provider-databricks.instancePool.InstancePool.property.nodeTypeFlexibility"></a>

```typescript
public readonly nodeTypeFlexibility: InstancePoolNodeTypeFlexibilityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference">InstancePoolNodeTypeFlexibilityOutputReference</a>

---

##### `preloadedDockerImage`<sup>Required</sup> <a name="preloadedDockerImage" id="@cdktn/provider-databricks.instancePool.InstancePool.property.preloadedDockerImage"></a>

```typescript
public readonly preloadedDockerImage: InstancePoolPreloadedDockerImageList;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList">InstancePoolPreloadedDockerImageList</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.instancePool.InstancePool.property.providerConfig"></a>

```typescript
public readonly providerConfig: InstancePoolProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference">InstancePoolProviderConfigOutputReference</a>

---

##### `awsAttributesInput`<sup>Optional</sup> <a name="awsAttributesInput" id="@cdktn/provider-databricks.instancePool.InstancePool.property.awsAttributesInput"></a>

```typescript
public readonly awsAttributesInput: InstancePoolAwsAttributes;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributes">InstancePoolAwsAttributes</a>

---

##### `azureAttributesInput`<sup>Optional</sup> <a name="azureAttributesInput" id="@cdktn/provider-databricks.instancePool.InstancePool.property.azureAttributesInput"></a>

```typescript
public readonly azureAttributesInput: InstancePoolAzureAttributes;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributes">InstancePoolAzureAttributes</a>

---

##### `customTagsInput`<sup>Optional</sup> <a name="customTagsInput" id="@cdktn/provider-databricks.instancePool.InstancePool.property.customTagsInput"></a>

```typescript
public readonly customTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `diskSpecInput`<sup>Optional</sup> <a name="diskSpecInput" id="@cdktn/provider-databricks.instancePool.InstancePool.property.diskSpecInput"></a>

```typescript
public readonly diskSpecInput: InstancePoolDiskSpec;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpec">InstancePoolDiskSpec</a>

---

##### `enableElasticDiskInput`<sup>Optional</sup> <a name="enableElasticDiskInput" id="@cdktn/provider-databricks.instancePool.InstancePool.property.enableElasticDiskInput"></a>

```typescript
public readonly enableElasticDiskInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `gcpAttributesInput`<sup>Optional</sup> <a name="gcpAttributesInput" id="@cdktn/provider-databricks.instancePool.InstancePool.property.gcpAttributesInput"></a>

```typescript
public readonly gcpAttributesInput: InstancePoolGcpAttributes;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributes">InstancePoolGcpAttributes</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.instancePool.InstancePool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `idleInstanceAutoterminationMinutesInput`<sup>Optional</sup> <a name="idleInstanceAutoterminationMinutesInput" id="@cdktn/provider-databricks.instancePool.InstancePool.property.idleInstanceAutoterminationMinutesInput"></a>

```typescript
public readonly idleInstanceAutoterminationMinutesInput: number;
```

- *Type:* number

---

##### `instancePoolFleetAttributesInput`<sup>Optional</sup> <a name="instancePoolFleetAttributesInput" id="@cdktn/provider-databricks.instancePool.InstancePool.property.instancePoolFleetAttributesInput"></a>

```typescript
public readonly instancePoolFleetAttributesInput: InstancePoolInstancePoolFleetAttributes;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes">InstancePoolInstancePoolFleetAttributes</a>

---

##### `instancePoolIdInput`<sup>Optional</sup> <a name="instancePoolIdInput" id="@cdktn/provider-databricks.instancePool.InstancePool.property.instancePoolIdInput"></a>

```typescript
public readonly instancePoolIdInput: string;
```

- *Type:* string

---

##### `instancePoolNameInput`<sup>Optional</sup> <a name="instancePoolNameInput" id="@cdktn/provider-databricks.instancePool.InstancePool.property.instancePoolNameInput"></a>

```typescript
public readonly instancePoolNameInput: string;
```

- *Type:* string

---

##### `maxCapacityInput`<sup>Optional</sup> <a name="maxCapacityInput" id="@cdktn/provider-databricks.instancePool.InstancePool.property.maxCapacityInput"></a>

```typescript
public readonly maxCapacityInput: number;
```

- *Type:* number

---

##### `minIdleInstancesInput`<sup>Optional</sup> <a name="minIdleInstancesInput" id="@cdktn/provider-databricks.instancePool.InstancePool.property.minIdleInstancesInput"></a>

```typescript
public readonly minIdleInstancesInput: number;
```

- *Type:* number

---

##### `nodeTypeFlexibilityInput`<sup>Optional</sup> <a name="nodeTypeFlexibilityInput" id="@cdktn/provider-databricks.instancePool.InstancePool.property.nodeTypeFlexibilityInput"></a>

```typescript
public readonly nodeTypeFlexibilityInput: InstancePoolNodeTypeFlexibility;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibility">InstancePoolNodeTypeFlexibility</a>

---

##### `nodeTypeIdInput`<sup>Optional</sup> <a name="nodeTypeIdInput" id="@cdktn/provider-databricks.instancePool.InstancePool.property.nodeTypeIdInput"></a>

```typescript
public readonly nodeTypeIdInput: string;
```

- *Type:* string

---

##### `preloadedDockerImageInput`<sup>Optional</sup> <a name="preloadedDockerImageInput" id="@cdktn/provider-databricks.instancePool.InstancePool.property.preloadedDockerImageInput"></a>

```typescript
public readonly preloadedDockerImageInput: IResolvable | InstancePoolPreloadedDockerImage[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImage">InstancePoolPreloadedDockerImage</a>[]

---

##### `preloadedSparkVersionsInput`<sup>Optional</sup> <a name="preloadedSparkVersionsInput" id="@cdktn/provider-databricks.instancePool.InstancePool.property.preloadedSparkVersionsInput"></a>

```typescript
public readonly preloadedSparkVersionsInput: string[];
```

- *Type:* string[]

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.instancePool.InstancePool.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: InstancePoolProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolProviderConfig">InstancePoolProviderConfig</a>

---

##### `customTags`<sup>Required</sup> <a name="customTags" id="@cdktn/provider-databricks.instancePool.InstancePool.property.customTags"></a>

```typescript
public readonly customTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `enableElasticDisk`<sup>Required</sup> <a name="enableElasticDisk" id="@cdktn/provider-databricks.instancePool.InstancePool.property.enableElasticDisk"></a>

```typescript
public readonly enableElasticDisk: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.instancePool.InstancePool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idleInstanceAutoterminationMinutes`<sup>Required</sup> <a name="idleInstanceAutoterminationMinutes" id="@cdktn/provider-databricks.instancePool.InstancePool.property.idleInstanceAutoterminationMinutes"></a>

```typescript
public readonly idleInstanceAutoterminationMinutes: number;
```

- *Type:* number

---

##### `instancePoolId`<sup>Required</sup> <a name="instancePoolId" id="@cdktn/provider-databricks.instancePool.InstancePool.property.instancePoolId"></a>

```typescript
public readonly instancePoolId: string;
```

- *Type:* string

---

##### `instancePoolName`<sup>Required</sup> <a name="instancePoolName" id="@cdktn/provider-databricks.instancePool.InstancePool.property.instancePoolName"></a>

```typescript
public readonly instancePoolName: string;
```

- *Type:* string

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktn/provider-databricks.instancePool.InstancePool.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: number;
```

- *Type:* number

---

##### `minIdleInstances`<sup>Required</sup> <a name="minIdleInstances" id="@cdktn/provider-databricks.instancePool.InstancePool.property.minIdleInstances"></a>

```typescript
public readonly minIdleInstances: number;
```

- *Type:* number

---

##### `nodeTypeId`<sup>Required</sup> <a name="nodeTypeId" id="@cdktn/provider-databricks.instancePool.InstancePool.property.nodeTypeId"></a>

```typescript
public readonly nodeTypeId: string;
```

- *Type:* string

---

##### `preloadedSparkVersions`<sup>Required</sup> <a name="preloadedSparkVersions" id="@cdktn/provider-databricks.instancePool.InstancePool.property.preloadedSparkVersions"></a>

```typescript
public readonly preloadedSparkVersions: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.instancePool.InstancePool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### InstancePoolAwsAttributes <a name="InstancePoolAwsAttributes" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributes.Initializer"></a>

```typescript
import { instancePool } from '@cdktn/provider-databricks'

const instancePoolAwsAttributes: instancePool.InstancePoolAwsAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributes.property.availability">availability</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#availability InstancePool#availability}. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributes.property.instanceProfileArn">instanceProfileArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#instance_profile_arn InstancePool#instance_profile_arn}. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributes.property.spotBidPricePercent">spotBidPricePercent</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#spot_bid_price_percent InstancePool#spot_bid_price_percent}. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributes.property.zoneId">zoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#zone_id InstancePool#zone_id}. |

---

##### `availability`<sup>Optional</sup> <a name="availability" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributes.property.availability"></a>

```typescript
public readonly availability: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#availability InstancePool#availability}.

---

##### `instanceProfileArn`<sup>Optional</sup> <a name="instanceProfileArn" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributes.property.instanceProfileArn"></a>

```typescript
public readonly instanceProfileArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#instance_profile_arn InstancePool#instance_profile_arn}.

---

##### `spotBidPricePercent`<sup>Optional</sup> <a name="spotBidPricePercent" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributes.property.spotBidPricePercent"></a>

```typescript
public readonly spotBidPricePercent: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#spot_bid_price_percent InstancePool#spot_bid_price_percent}.

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributes.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#zone_id InstancePool#zone_id}.

---

### InstancePoolAzureAttributes <a name="InstancePoolAzureAttributes" id="@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributes.Initializer"></a>

```typescript
import { instancePool } from '@cdktn/provider-databricks'

const instancePoolAzureAttributes: instancePool.InstancePoolAzureAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributes.property.availability">availability</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#availability InstancePool#availability}. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributes.property.spotBidMaxPrice">spotBidMaxPrice</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#spot_bid_max_price InstancePool#spot_bid_max_price}. |

---

##### `availability`<sup>Optional</sup> <a name="availability" id="@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributes.property.availability"></a>

```typescript
public readonly availability: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#availability InstancePool#availability}.

---

##### `spotBidMaxPrice`<sup>Optional</sup> <a name="spotBidMaxPrice" id="@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributes.property.spotBidMaxPrice"></a>

```typescript
public readonly spotBidMaxPrice: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#spot_bid_max_price InstancePool#spot_bid_max_price}.

---

### InstancePoolConfig <a name="InstancePoolConfig" id="@cdktn/provider-databricks.instancePool.InstancePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.instancePool.InstancePoolConfig.Initializer"></a>

```typescript
import { instancePool } from '@cdktn/provider-databricks'

const instancePoolConfig: instancePool.InstancePoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.idleInstanceAutoterminationMinutes">idleInstanceAutoterminationMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#idle_instance_autotermination_minutes InstancePool#idle_instance_autotermination_minutes}. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.instancePoolName">instancePoolName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#instance_pool_name InstancePool#instance_pool_name}. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.awsAttributes">awsAttributes</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributes">InstancePoolAwsAttributes</a></code> | aws_attributes block. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.azureAttributes">azureAttributes</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributes">InstancePoolAzureAttributes</a></code> | azure_attributes block. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.customTags">customTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#custom_tags InstancePool#custom_tags}. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.diskSpec">diskSpec</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpec">InstancePoolDiskSpec</a></code> | disk_spec block. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.enableElasticDisk">enableElasticDisk</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#enable_elastic_disk InstancePool#enable_elastic_disk}. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.gcpAttributes">gcpAttributes</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributes">InstancePoolGcpAttributes</a></code> | gcp_attributes block. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#id InstancePool#id}. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.instancePoolFleetAttributes">instancePoolFleetAttributes</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes">InstancePoolInstancePoolFleetAttributes</a></code> | instance_pool_fleet_attributes block. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.instancePoolId">instancePoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#instance_pool_id InstancePool#instance_pool_id}. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.maxCapacity">maxCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#max_capacity InstancePool#max_capacity}. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.minIdleInstances">minIdleInstances</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#min_idle_instances InstancePool#min_idle_instances}. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.nodeTypeFlexibility">nodeTypeFlexibility</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibility">InstancePoolNodeTypeFlexibility</a></code> | node_type_flexibility block. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.nodeTypeId">nodeTypeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#node_type_id InstancePool#node_type_id}. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.preloadedDockerImage">preloadedDockerImage</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImage">InstancePoolPreloadedDockerImage</a>[]</code> | preloaded_docker_image block. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.preloadedSparkVersions">preloadedSparkVersions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#preloaded_spark_versions InstancePool#preloaded_spark_versions}. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolProviderConfig">InstancePoolProviderConfig</a></code> | provider_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `idleInstanceAutoterminationMinutes`<sup>Required</sup> <a name="idleInstanceAutoterminationMinutes" id="@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.idleInstanceAutoterminationMinutes"></a>

```typescript
public readonly idleInstanceAutoterminationMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#idle_instance_autotermination_minutes InstancePool#idle_instance_autotermination_minutes}.

---

##### `instancePoolName`<sup>Required</sup> <a name="instancePoolName" id="@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.instancePoolName"></a>

```typescript
public readonly instancePoolName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#instance_pool_name InstancePool#instance_pool_name}.

---

##### `awsAttributes`<sup>Optional</sup> <a name="awsAttributes" id="@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.awsAttributes"></a>

```typescript
public readonly awsAttributes: InstancePoolAwsAttributes;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributes">InstancePoolAwsAttributes</a>

aws_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#aws_attributes InstancePool#aws_attributes}

---

##### `azureAttributes`<sup>Optional</sup> <a name="azureAttributes" id="@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.azureAttributes"></a>

```typescript
public readonly azureAttributes: InstancePoolAzureAttributes;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributes">InstancePoolAzureAttributes</a>

azure_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#azure_attributes InstancePool#azure_attributes}

---

##### `customTags`<sup>Optional</sup> <a name="customTags" id="@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.customTags"></a>

```typescript
public readonly customTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#custom_tags InstancePool#custom_tags}.

---

##### `diskSpec`<sup>Optional</sup> <a name="diskSpec" id="@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.diskSpec"></a>

```typescript
public readonly diskSpec: InstancePoolDiskSpec;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpec">InstancePoolDiskSpec</a>

disk_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#disk_spec InstancePool#disk_spec}

---

##### `enableElasticDisk`<sup>Optional</sup> <a name="enableElasticDisk" id="@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.enableElasticDisk"></a>

```typescript
public readonly enableElasticDisk: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#enable_elastic_disk InstancePool#enable_elastic_disk}.

---

##### `gcpAttributes`<sup>Optional</sup> <a name="gcpAttributes" id="@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.gcpAttributes"></a>

```typescript
public readonly gcpAttributes: InstancePoolGcpAttributes;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributes">InstancePoolGcpAttributes</a>

gcp_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#gcp_attributes InstancePool#gcp_attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#id InstancePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instancePoolFleetAttributes`<sup>Optional</sup> <a name="instancePoolFleetAttributes" id="@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.instancePoolFleetAttributes"></a>

```typescript
public readonly instancePoolFleetAttributes: InstancePoolInstancePoolFleetAttributes;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes">InstancePoolInstancePoolFleetAttributes</a>

instance_pool_fleet_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#instance_pool_fleet_attributes InstancePool#instance_pool_fleet_attributes}

---

##### `instancePoolId`<sup>Optional</sup> <a name="instancePoolId" id="@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.instancePoolId"></a>

```typescript
public readonly instancePoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#instance_pool_id InstancePool#instance_pool_id}.

---

##### `maxCapacity`<sup>Optional</sup> <a name="maxCapacity" id="@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#max_capacity InstancePool#max_capacity}.

---

##### `minIdleInstances`<sup>Optional</sup> <a name="minIdleInstances" id="@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.minIdleInstances"></a>

```typescript
public readonly minIdleInstances: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#min_idle_instances InstancePool#min_idle_instances}.

---

##### `nodeTypeFlexibility`<sup>Optional</sup> <a name="nodeTypeFlexibility" id="@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.nodeTypeFlexibility"></a>

```typescript
public readonly nodeTypeFlexibility: InstancePoolNodeTypeFlexibility;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibility">InstancePoolNodeTypeFlexibility</a>

node_type_flexibility block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#node_type_flexibility InstancePool#node_type_flexibility}

---

##### `nodeTypeId`<sup>Optional</sup> <a name="nodeTypeId" id="@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.nodeTypeId"></a>

```typescript
public readonly nodeTypeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#node_type_id InstancePool#node_type_id}.

---

##### `preloadedDockerImage`<sup>Optional</sup> <a name="preloadedDockerImage" id="@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.preloadedDockerImage"></a>

```typescript
public readonly preloadedDockerImage: IResolvable | InstancePoolPreloadedDockerImage[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImage">InstancePoolPreloadedDockerImage</a>[]

preloaded_docker_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#preloaded_docker_image InstancePool#preloaded_docker_image}

---

##### `preloadedSparkVersions`<sup>Optional</sup> <a name="preloadedSparkVersions" id="@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.preloadedSparkVersions"></a>

```typescript
public readonly preloadedSparkVersions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#preloaded_spark_versions InstancePool#preloaded_spark_versions}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.instancePool.InstancePoolConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: InstancePoolProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolProviderConfig">InstancePoolProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#provider_config InstancePool#provider_config}

---

### InstancePoolDiskSpec <a name="InstancePoolDiskSpec" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpec.Initializer"></a>

```typescript
import { instancePool } from '@cdktn/provider-databricks'

const instancePoolDiskSpec: instancePool.InstancePoolDiskSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpec.property.diskCount">diskCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#disk_count InstancePool#disk_count}. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpec.property.diskSize">diskSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#disk_size InstancePool#disk_size}. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpec.property.diskType">diskType</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskType">InstancePoolDiskSpecDiskType</a></code> | disk_type block. |

---

##### `diskCount`<sup>Optional</sup> <a name="diskCount" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpec.property.diskCount"></a>

```typescript
public readonly diskCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#disk_count InstancePool#disk_count}.

---

##### `diskSize`<sup>Optional</sup> <a name="diskSize" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpec.property.diskSize"></a>

```typescript
public readonly diskSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#disk_size InstancePool#disk_size}.

---

##### `diskType`<sup>Optional</sup> <a name="diskType" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpec.property.diskType"></a>

```typescript
public readonly diskType: InstancePoolDiskSpecDiskType;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskType">InstancePoolDiskSpecDiskType</a>

disk_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#disk_type InstancePool#disk_type}

---

### InstancePoolDiskSpecDiskType <a name="InstancePoolDiskSpecDiskType" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskType.Initializer"></a>

```typescript
import { instancePool } from '@cdktn/provider-databricks'

const instancePoolDiskSpecDiskType: instancePool.InstancePoolDiskSpecDiskType = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskType.property.azureDiskVolumeType">azureDiskVolumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#azure_disk_volume_type InstancePool#azure_disk_volume_type}. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskType.property.ebsVolumeType">ebsVolumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#ebs_volume_type InstancePool#ebs_volume_type}. |

---

##### `azureDiskVolumeType`<sup>Optional</sup> <a name="azureDiskVolumeType" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskType.property.azureDiskVolumeType"></a>

```typescript
public readonly azureDiskVolumeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#azure_disk_volume_type InstancePool#azure_disk_volume_type}.

---

##### `ebsVolumeType`<sup>Optional</sup> <a name="ebsVolumeType" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskType.property.ebsVolumeType"></a>

```typescript
public readonly ebsVolumeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#ebs_volume_type InstancePool#ebs_volume_type}.

---

### InstancePoolGcpAttributes <a name="InstancePoolGcpAttributes" id="@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributes.Initializer"></a>

```typescript
import { instancePool } from '@cdktn/provider-databricks'

const instancePoolGcpAttributes: instancePool.InstancePoolGcpAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributes.property.gcpAvailability">gcpAvailability</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#gcp_availability InstancePool#gcp_availability}. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributes.property.localSsdCount">localSsdCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#local_ssd_count InstancePool#local_ssd_count}. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributes.property.zoneId">zoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#zone_id InstancePool#zone_id}. |

---

##### `gcpAvailability`<sup>Optional</sup> <a name="gcpAvailability" id="@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributes.property.gcpAvailability"></a>

```typescript
public readonly gcpAvailability: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#gcp_availability InstancePool#gcp_availability}.

---

##### `localSsdCount`<sup>Optional</sup> <a name="localSsdCount" id="@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributes.property.localSsdCount"></a>

```typescript
public readonly localSsdCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#local_ssd_count InstancePool#local_ssd_count}.

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributes.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#zone_id InstancePool#zone_id}.

---

### InstancePoolInstancePoolFleetAttributes <a name="InstancePoolInstancePoolFleetAttributes" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes.Initializer"></a>

```typescript
import { instancePool } from '@cdktn/provider-databricks'

const instancePoolInstancePoolFleetAttributes: instancePool.InstancePoolInstancePoolFleetAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes.property.launchTemplateOverride">launchTemplateOverride</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride">InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride</a>[]</code> | launch_template_override block. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes.property.fleetOnDemandOption">fleetOnDemandOption</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption">InstancePoolInstancePoolFleetAttributesFleetOnDemandOption</a></code> | fleet_on_demand_option block. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes.property.fleetSpotOption">fleetSpotOption</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption">InstancePoolInstancePoolFleetAttributesFleetSpotOption</a></code> | fleet_spot_option block. |

---

##### `launchTemplateOverride`<sup>Required</sup> <a name="launchTemplateOverride" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes.property.launchTemplateOverride"></a>

```typescript
public readonly launchTemplateOverride: IResolvable | InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride">InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride</a>[]

launch_template_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#launch_template_override InstancePool#launch_template_override}

---

##### `fleetOnDemandOption`<sup>Optional</sup> <a name="fleetOnDemandOption" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes.property.fleetOnDemandOption"></a>

```typescript
public readonly fleetOnDemandOption: InstancePoolInstancePoolFleetAttributesFleetOnDemandOption;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption">InstancePoolInstancePoolFleetAttributesFleetOnDemandOption</a>

fleet_on_demand_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#fleet_on_demand_option InstancePool#fleet_on_demand_option}

---

##### `fleetSpotOption`<sup>Optional</sup> <a name="fleetSpotOption" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes.property.fleetSpotOption"></a>

```typescript
public readonly fleetSpotOption: InstancePoolInstancePoolFleetAttributesFleetSpotOption;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption">InstancePoolInstancePoolFleetAttributesFleetSpotOption</a>

fleet_spot_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#fleet_spot_option InstancePool#fleet_spot_option}

---

### InstancePoolInstancePoolFleetAttributesFleetOnDemandOption <a name="InstancePoolInstancePoolFleetAttributesFleetOnDemandOption" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption.Initializer"></a>

```typescript
import { instancePool } from '@cdktn/provider-databricks'

const instancePoolInstancePoolFleetAttributesFleetOnDemandOption: instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption.property.allocationStrategy">allocationStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#allocation_strategy InstancePool#allocation_strategy}. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption.property.instancePoolsToUseCount">instancePoolsToUseCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#instance_pools_to_use_count InstancePool#instance_pools_to_use_count}. |

---

##### `allocationStrategy`<sup>Required</sup> <a name="allocationStrategy" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption.property.allocationStrategy"></a>

```typescript
public readonly allocationStrategy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#allocation_strategy InstancePool#allocation_strategy}.

---

##### `instancePoolsToUseCount`<sup>Optional</sup> <a name="instancePoolsToUseCount" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption.property.instancePoolsToUseCount"></a>

```typescript
public readonly instancePoolsToUseCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#instance_pools_to_use_count InstancePool#instance_pools_to_use_count}.

---

### InstancePoolInstancePoolFleetAttributesFleetSpotOption <a name="InstancePoolInstancePoolFleetAttributesFleetSpotOption" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption.Initializer"></a>

```typescript
import { instancePool } from '@cdktn/provider-databricks'

const instancePoolInstancePoolFleetAttributesFleetSpotOption: instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption.property.allocationStrategy">allocationStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#allocation_strategy InstancePool#allocation_strategy}. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption.property.instancePoolsToUseCount">instancePoolsToUseCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#instance_pools_to_use_count InstancePool#instance_pools_to_use_count}. |

---

##### `allocationStrategy`<sup>Required</sup> <a name="allocationStrategy" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption.property.allocationStrategy"></a>

```typescript
public readonly allocationStrategy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#allocation_strategy InstancePool#allocation_strategy}.

---

##### `instancePoolsToUseCount`<sup>Optional</sup> <a name="instancePoolsToUseCount" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption.property.instancePoolsToUseCount"></a>

```typescript
public readonly instancePoolsToUseCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#instance_pools_to_use_count InstancePool#instance_pools_to_use_count}.

---

### InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride <a name="InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride.Initializer"></a>

```typescript
import { instancePool } from '@cdktn/provider-databricks'

const instancePoolInstancePoolFleetAttributesLaunchTemplateOverride: instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#availability_zone InstancePool#availability_zone}. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride.property.instanceType">instanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#instance_type InstancePool#instance_type}. |

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#availability_zone InstancePool#availability_zone}.

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#instance_type InstancePool#instance_type}.

---

### InstancePoolNodeTypeFlexibility <a name="InstancePoolNodeTypeFlexibility" id="@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibility"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibility.Initializer"></a>

```typescript
import { instancePool } from '@cdktn/provider-databricks'

const instancePoolNodeTypeFlexibility: instancePool.InstancePoolNodeTypeFlexibility = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibility.property.alternateNodeTypeIds">alternateNodeTypeIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#alternate_node_type_ids InstancePool#alternate_node_type_ids}. |

---

##### `alternateNodeTypeIds`<sup>Required</sup> <a name="alternateNodeTypeIds" id="@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibility.property.alternateNodeTypeIds"></a>

```typescript
public readonly alternateNodeTypeIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#alternate_node_type_ids InstancePool#alternate_node_type_ids}.

---

### InstancePoolPreloadedDockerImage <a name="InstancePoolPreloadedDockerImage" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImage.Initializer"></a>

```typescript
import { instancePool } from '@cdktn/provider-databricks'

const instancePoolPreloadedDockerImage: instancePool.InstancePoolPreloadedDockerImage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImage.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#url InstancePool#url}. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImage.property.basicAuth">basicAuth</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth">InstancePoolPreloadedDockerImageBasicAuth</a></code> | basic_auth block. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImage.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#url InstancePool#url}.

---

##### `basicAuth`<sup>Optional</sup> <a name="basicAuth" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImage.property.basicAuth"></a>

```typescript
public readonly basicAuth: InstancePoolPreloadedDockerImageBasicAuth;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth">InstancePoolPreloadedDockerImageBasicAuth</a>

basic_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#basic_auth InstancePool#basic_auth}

---

### InstancePoolPreloadedDockerImageBasicAuth <a name="InstancePoolPreloadedDockerImageBasicAuth" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth.Initializer"></a>

```typescript
import { instancePool } from '@cdktn/provider-databricks'

const instancePoolPreloadedDockerImageBasicAuth: instancePool.InstancePoolPreloadedDockerImageBasicAuth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#password InstancePool#password}. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#username InstancePool#username}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#password InstancePool#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#username InstancePool#username}.

---

### InstancePoolProviderConfig <a name="InstancePoolProviderConfig" id="@cdktn/provider-databricks.instancePool.InstancePoolProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.instancePool.InstancePoolProviderConfig.Initializer"></a>

```typescript
import { instancePool } from '@cdktn/provider-databricks'

const instancePoolProviderConfig: instancePool.InstancePoolProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#workspace_id InstancePool#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.instancePool.InstancePoolProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/instance_pool#workspace_id InstancePool#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### InstancePoolAwsAttributesOutputReference <a name="InstancePoolAwsAttributesOutputReference" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.Initializer"></a>

```typescript
import { instancePool } from '@cdktn/provider-databricks'

new instancePool.InstancePoolAwsAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.resetAvailability">resetAvailability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.resetInstanceProfileArn">resetInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.resetSpotBidPricePercent">resetSpotBidPricePercent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailability` <a name="resetAvailability" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.resetAvailability"></a>

```typescript
public resetAvailability(): void
```

##### `resetInstanceProfileArn` <a name="resetInstanceProfileArn" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.resetInstanceProfileArn"></a>

```typescript
public resetInstanceProfileArn(): void
```

##### `resetSpotBidPricePercent` <a name="resetSpotBidPricePercent" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.resetSpotBidPricePercent"></a>

```typescript
public resetSpotBidPricePercent(): void
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.resetZoneId"></a>

```typescript
public resetZoneId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.availabilityInput">availabilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.instanceProfileArnInput">instanceProfileArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.spotBidPricePercentInput">spotBidPricePercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.availability">availability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.instanceProfileArn">instanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.spotBidPricePercent">spotBidPricePercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributes">InstancePoolAwsAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityInput`<sup>Optional</sup> <a name="availabilityInput" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.availabilityInput"></a>

```typescript
public readonly availabilityInput: string;
```

- *Type:* string

---

##### `instanceProfileArnInput`<sup>Optional</sup> <a name="instanceProfileArnInput" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.instanceProfileArnInput"></a>

```typescript
public readonly instanceProfileArnInput: string;
```

- *Type:* string

---

##### `spotBidPricePercentInput`<sup>Optional</sup> <a name="spotBidPricePercentInput" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.spotBidPricePercentInput"></a>

```typescript
public readonly spotBidPricePercentInput: number;
```

- *Type:* number

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `availability`<sup>Required</sup> <a name="availability" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.availability"></a>

```typescript
public readonly availability: string;
```

- *Type:* string

---

##### `instanceProfileArn`<sup>Required</sup> <a name="instanceProfileArn" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.instanceProfileArn"></a>

```typescript
public readonly instanceProfileArn: string;
```

- *Type:* string

---

##### `spotBidPricePercent`<sup>Required</sup> <a name="spotBidPricePercent" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.spotBidPricePercent"></a>

```typescript
public readonly spotBidPricePercent: number;
```

- *Type:* number

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: InstancePoolAwsAttributes;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolAwsAttributes">InstancePoolAwsAttributes</a>

---


### InstancePoolAzureAttributesOutputReference <a name="InstancePoolAzureAttributesOutputReference" id="@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.Initializer"></a>

```typescript
import { instancePool } from '@cdktn/provider-databricks'

new instancePool.InstancePoolAzureAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.resetAvailability">resetAvailability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.resetSpotBidMaxPrice">resetSpotBidMaxPrice</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailability` <a name="resetAvailability" id="@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.resetAvailability"></a>

```typescript
public resetAvailability(): void
```

##### `resetSpotBidMaxPrice` <a name="resetSpotBidMaxPrice" id="@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.resetSpotBidMaxPrice"></a>

```typescript
public resetSpotBidMaxPrice(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.availabilityInput">availabilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.spotBidMaxPriceInput">spotBidMaxPriceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.availability">availability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.spotBidMaxPrice">spotBidMaxPrice</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributes">InstancePoolAzureAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityInput`<sup>Optional</sup> <a name="availabilityInput" id="@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.availabilityInput"></a>

```typescript
public readonly availabilityInput: string;
```

- *Type:* string

---

##### `spotBidMaxPriceInput`<sup>Optional</sup> <a name="spotBidMaxPriceInput" id="@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.spotBidMaxPriceInput"></a>

```typescript
public readonly spotBidMaxPriceInput: number;
```

- *Type:* number

---

##### `availability`<sup>Required</sup> <a name="availability" id="@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.availability"></a>

```typescript
public readonly availability: string;
```

- *Type:* string

---

##### `spotBidMaxPrice`<sup>Required</sup> <a name="spotBidMaxPrice" id="@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.spotBidMaxPrice"></a>

```typescript
public readonly spotBidMaxPrice: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: InstancePoolAzureAttributes;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolAzureAttributes">InstancePoolAzureAttributes</a>

---


### InstancePoolDiskSpecDiskTypeOutputReference <a name="InstancePoolDiskSpecDiskTypeOutputReference" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.Initializer"></a>

```typescript
import { instancePool } from '@cdktn/provider-databricks'

new instancePool.InstancePoolDiskSpecDiskTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.resetAzureDiskVolumeType">resetAzureDiskVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.resetEbsVolumeType">resetEbsVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAzureDiskVolumeType` <a name="resetAzureDiskVolumeType" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.resetAzureDiskVolumeType"></a>

```typescript
public resetAzureDiskVolumeType(): void
```

##### `resetEbsVolumeType` <a name="resetEbsVolumeType" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.resetEbsVolumeType"></a>

```typescript
public resetEbsVolumeType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.azureDiskVolumeTypeInput">azureDiskVolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.ebsVolumeTypeInput">ebsVolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.azureDiskVolumeType">azureDiskVolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.ebsVolumeType">ebsVolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskType">InstancePoolDiskSpecDiskType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `azureDiskVolumeTypeInput`<sup>Optional</sup> <a name="azureDiskVolumeTypeInput" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.azureDiskVolumeTypeInput"></a>

```typescript
public readonly azureDiskVolumeTypeInput: string;
```

- *Type:* string

---

##### `ebsVolumeTypeInput`<sup>Optional</sup> <a name="ebsVolumeTypeInput" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.ebsVolumeTypeInput"></a>

```typescript
public readonly ebsVolumeTypeInput: string;
```

- *Type:* string

---

##### `azureDiskVolumeType`<sup>Required</sup> <a name="azureDiskVolumeType" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.azureDiskVolumeType"></a>

```typescript
public readonly azureDiskVolumeType: string;
```

- *Type:* string

---

##### `ebsVolumeType`<sup>Required</sup> <a name="ebsVolumeType" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.ebsVolumeType"></a>

```typescript
public readonly ebsVolumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: InstancePoolDiskSpecDiskType;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskType">InstancePoolDiskSpecDiskType</a>

---


### InstancePoolDiskSpecOutputReference <a name="InstancePoolDiskSpecOutputReference" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.Initializer"></a>

```typescript
import { instancePool } from '@cdktn/provider-databricks'

new instancePool.InstancePoolDiskSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.putDiskType">putDiskType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.resetDiskCount">resetDiskCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.resetDiskSize">resetDiskSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.resetDiskType">resetDiskType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDiskType` <a name="putDiskType" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.putDiskType"></a>

```typescript
public putDiskType(value: InstancePoolDiskSpecDiskType): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.putDiskType.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskType">InstancePoolDiskSpecDiskType</a>

---

##### `resetDiskCount` <a name="resetDiskCount" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.resetDiskCount"></a>

```typescript
public resetDiskCount(): void
```

##### `resetDiskSize` <a name="resetDiskSize" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.resetDiskSize"></a>

```typescript
public resetDiskSize(): void
```

##### `resetDiskType` <a name="resetDiskType" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.resetDiskType"></a>

```typescript
public resetDiskType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskType">diskType</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference">InstancePoolDiskSpecDiskTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskCountInput">diskCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskSizeInput">diskSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskTypeInput">diskTypeInput</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskType">InstancePoolDiskSpecDiskType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskCount">diskCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskSize">diskSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpec">InstancePoolDiskSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskType`<sup>Required</sup> <a name="diskType" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskType"></a>

```typescript
public readonly diskType: InstancePoolDiskSpecDiskTypeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference">InstancePoolDiskSpecDiskTypeOutputReference</a>

---

##### `diskCountInput`<sup>Optional</sup> <a name="diskCountInput" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskCountInput"></a>

```typescript
public readonly diskCountInput: number;
```

- *Type:* number

---

##### `diskSizeInput`<sup>Optional</sup> <a name="diskSizeInput" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskSizeInput"></a>

```typescript
public readonly diskSizeInput: number;
```

- *Type:* number

---

##### `diskTypeInput`<sup>Optional</sup> <a name="diskTypeInput" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskTypeInput"></a>

```typescript
public readonly diskTypeInput: InstancePoolDiskSpecDiskType;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecDiskType">InstancePoolDiskSpecDiskType</a>

---

##### `diskCount`<sup>Required</sup> <a name="diskCount" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskCount"></a>

```typescript
public readonly diskCount: number;
```

- *Type:* number

---

##### `diskSize`<sup>Required</sup> <a name="diskSize" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskSize"></a>

```typescript
public readonly diskSize: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: InstancePoolDiskSpec;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolDiskSpec">InstancePoolDiskSpec</a>

---


### InstancePoolGcpAttributesOutputReference <a name="InstancePoolGcpAttributesOutputReference" id="@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.Initializer"></a>

```typescript
import { instancePool } from '@cdktn/provider-databricks'

new instancePool.InstancePoolGcpAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.resetGcpAvailability">resetGcpAvailability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.resetLocalSsdCount">resetLocalSsdCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGcpAvailability` <a name="resetGcpAvailability" id="@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.resetGcpAvailability"></a>

```typescript
public resetGcpAvailability(): void
```

##### `resetLocalSsdCount` <a name="resetLocalSsdCount" id="@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.resetLocalSsdCount"></a>

```typescript
public resetLocalSsdCount(): void
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.resetZoneId"></a>

```typescript
public resetZoneId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.gcpAvailabilityInput">gcpAvailabilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.localSsdCountInput">localSsdCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.gcpAvailability">gcpAvailability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.localSsdCount">localSsdCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributes">InstancePoolGcpAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gcpAvailabilityInput`<sup>Optional</sup> <a name="gcpAvailabilityInput" id="@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.gcpAvailabilityInput"></a>

```typescript
public readonly gcpAvailabilityInput: string;
```

- *Type:* string

---

##### `localSsdCountInput`<sup>Optional</sup> <a name="localSsdCountInput" id="@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.localSsdCountInput"></a>

```typescript
public readonly localSsdCountInput: number;
```

- *Type:* number

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `gcpAvailability`<sup>Required</sup> <a name="gcpAvailability" id="@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.gcpAvailability"></a>

```typescript
public readonly gcpAvailability: string;
```

- *Type:* string

---

##### `localSsdCount`<sup>Required</sup> <a name="localSsdCount" id="@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.localSsdCount"></a>

```typescript
public readonly localSsdCount: number;
```

- *Type:* number

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: InstancePoolGcpAttributes;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolGcpAttributes">InstancePoolGcpAttributes</a>

---


### InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference <a name="InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.Initializer"></a>

```typescript
import { instancePool } from '@cdktn/provider-databricks'

new instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.resetInstancePoolsToUseCount">resetInstancePoolsToUseCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstancePoolsToUseCount` <a name="resetInstancePoolsToUseCount" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.resetInstancePoolsToUseCount"></a>

```typescript
public resetInstancePoolsToUseCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.allocationStrategyInput">allocationStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.instancePoolsToUseCountInput">instancePoolsToUseCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.allocationStrategy">allocationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.instancePoolsToUseCount">instancePoolsToUseCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption">InstancePoolInstancePoolFleetAttributesFleetOnDemandOption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allocationStrategyInput`<sup>Optional</sup> <a name="allocationStrategyInput" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.allocationStrategyInput"></a>

```typescript
public readonly allocationStrategyInput: string;
```

- *Type:* string

---

##### `instancePoolsToUseCountInput`<sup>Optional</sup> <a name="instancePoolsToUseCountInput" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.instancePoolsToUseCountInput"></a>

```typescript
public readonly instancePoolsToUseCountInput: number;
```

- *Type:* number

---

##### `allocationStrategy`<sup>Required</sup> <a name="allocationStrategy" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.allocationStrategy"></a>

```typescript
public readonly allocationStrategy: string;
```

- *Type:* string

---

##### `instancePoolsToUseCount`<sup>Required</sup> <a name="instancePoolsToUseCount" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.instancePoolsToUseCount"></a>

```typescript
public readonly instancePoolsToUseCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: InstancePoolInstancePoolFleetAttributesFleetOnDemandOption;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption">InstancePoolInstancePoolFleetAttributesFleetOnDemandOption</a>

---


### InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference <a name="InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.Initializer"></a>

```typescript
import { instancePool } from '@cdktn/provider-databricks'

new instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.resetInstancePoolsToUseCount">resetInstancePoolsToUseCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstancePoolsToUseCount` <a name="resetInstancePoolsToUseCount" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.resetInstancePoolsToUseCount"></a>

```typescript
public resetInstancePoolsToUseCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.allocationStrategyInput">allocationStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.instancePoolsToUseCountInput">instancePoolsToUseCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.allocationStrategy">allocationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.instancePoolsToUseCount">instancePoolsToUseCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption">InstancePoolInstancePoolFleetAttributesFleetSpotOption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allocationStrategyInput`<sup>Optional</sup> <a name="allocationStrategyInput" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.allocationStrategyInput"></a>

```typescript
public readonly allocationStrategyInput: string;
```

- *Type:* string

---

##### `instancePoolsToUseCountInput`<sup>Optional</sup> <a name="instancePoolsToUseCountInput" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.instancePoolsToUseCountInput"></a>

```typescript
public readonly instancePoolsToUseCountInput: number;
```

- *Type:* number

---

##### `allocationStrategy`<sup>Required</sup> <a name="allocationStrategy" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.allocationStrategy"></a>

```typescript
public readonly allocationStrategy: string;
```

- *Type:* string

---

##### `instancePoolsToUseCount`<sup>Required</sup> <a name="instancePoolsToUseCount" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.instancePoolsToUseCount"></a>

```typescript
public readonly instancePoolsToUseCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: InstancePoolInstancePoolFleetAttributesFleetSpotOption;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption">InstancePoolInstancePoolFleetAttributesFleetSpotOption</a>

---


### InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList <a name="InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.Initializer"></a>

```typescript
import { instancePool } from '@cdktn/provider-databricks'

new instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.get"></a>

```typescript
public get(index: number): InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride">InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride">InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride</a>[]

---


### InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference <a name="InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer"></a>

```typescript
import { instancePool } from '@cdktn/provider-databricks'

new instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride">InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride">InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride</a>

---


### InstancePoolInstancePoolFleetAttributesOutputReference <a name="InstancePoolInstancePoolFleetAttributesOutputReference" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.Initializer"></a>

```typescript
import { instancePool } from '@cdktn/provider-databricks'

new instancePool.InstancePoolInstancePoolFleetAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.putFleetOnDemandOption">putFleetOnDemandOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.putFleetSpotOption">putFleetSpotOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.putLaunchTemplateOverride">putLaunchTemplateOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.resetFleetOnDemandOption">resetFleetOnDemandOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.resetFleetSpotOption">resetFleetSpotOption</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFleetOnDemandOption` <a name="putFleetOnDemandOption" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.putFleetOnDemandOption"></a>

```typescript
public putFleetOnDemandOption(value: InstancePoolInstancePoolFleetAttributesFleetOnDemandOption): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.putFleetOnDemandOption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption">InstancePoolInstancePoolFleetAttributesFleetOnDemandOption</a>

---

##### `putFleetSpotOption` <a name="putFleetSpotOption" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.putFleetSpotOption"></a>

```typescript
public putFleetSpotOption(value: InstancePoolInstancePoolFleetAttributesFleetSpotOption): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.putFleetSpotOption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption">InstancePoolInstancePoolFleetAttributesFleetSpotOption</a>

---

##### `putLaunchTemplateOverride` <a name="putLaunchTemplateOverride" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.putLaunchTemplateOverride"></a>

```typescript
public putLaunchTemplateOverride(value: IResolvable | InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.putLaunchTemplateOverride.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride">InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride</a>[]

---

##### `resetFleetOnDemandOption` <a name="resetFleetOnDemandOption" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.resetFleetOnDemandOption"></a>

```typescript
public resetFleetOnDemandOption(): void
```

##### `resetFleetSpotOption` <a name="resetFleetSpotOption" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.resetFleetSpotOption"></a>

```typescript
public resetFleetSpotOption(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.fleetOnDemandOption">fleetOnDemandOption</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference">InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.fleetSpotOption">fleetSpotOption</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference">InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.launchTemplateOverride">launchTemplateOverride</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList">InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.fleetOnDemandOptionInput">fleetOnDemandOptionInput</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption">InstancePoolInstancePoolFleetAttributesFleetOnDemandOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.fleetSpotOptionInput">fleetSpotOptionInput</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption">InstancePoolInstancePoolFleetAttributesFleetSpotOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.launchTemplateOverrideInput">launchTemplateOverrideInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride">InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes">InstancePoolInstancePoolFleetAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fleetOnDemandOption`<sup>Required</sup> <a name="fleetOnDemandOption" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.fleetOnDemandOption"></a>

```typescript
public readonly fleetOnDemandOption: InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference">InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference</a>

---

##### `fleetSpotOption`<sup>Required</sup> <a name="fleetSpotOption" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.fleetSpotOption"></a>

```typescript
public readonly fleetSpotOption: InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference">InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference</a>

---

##### `launchTemplateOverride`<sup>Required</sup> <a name="launchTemplateOverride" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.launchTemplateOverride"></a>

```typescript
public readonly launchTemplateOverride: InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList">InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList</a>

---

##### `fleetOnDemandOptionInput`<sup>Optional</sup> <a name="fleetOnDemandOptionInput" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.fleetOnDemandOptionInput"></a>

```typescript
public readonly fleetOnDemandOptionInput: InstancePoolInstancePoolFleetAttributesFleetOnDemandOption;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption">InstancePoolInstancePoolFleetAttributesFleetOnDemandOption</a>

---

##### `fleetSpotOptionInput`<sup>Optional</sup> <a name="fleetSpotOptionInput" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.fleetSpotOptionInput"></a>

```typescript
public readonly fleetSpotOptionInput: InstancePoolInstancePoolFleetAttributesFleetSpotOption;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption">InstancePoolInstancePoolFleetAttributesFleetSpotOption</a>

---

##### `launchTemplateOverrideInput`<sup>Optional</sup> <a name="launchTemplateOverrideInput" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.launchTemplateOverrideInput"></a>

```typescript
public readonly launchTemplateOverrideInput: IResolvable | InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride">InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: InstancePoolInstancePoolFleetAttributes;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes">InstancePoolInstancePoolFleetAttributes</a>

---


### InstancePoolNodeTypeFlexibilityOutputReference <a name="InstancePoolNodeTypeFlexibilityOutputReference" id="@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.Initializer"></a>

```typescript
import { instancePool } from '@cdktn/provider-databricks'

new instancePool.InstancePoolNodeTypeFlexibilityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.property.alternateNodeTypeIdsInput">alternateNodeTypeIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.property.alternateNodeTypeIds">alternateNodeTypeIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibility">InstancePoolNodeTypeFlexibility</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alternateNodeTypeIdsInput`<sup>Optional</sup> <a name="alternateNodeTypeIdsInput" id="@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.property.alternateNodeTypeIdsInput"></a>

```typescript
public readonly alternateNodeTypeIdsInput: string[];
```

- *Type:* string[]

---

##### `alternateNodeTypeIds`<sup>Required</sup> <a name="alternateNodeTypeIds" id="@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.property.alternateNodeTypeIds"></a>

```typescript
public readonly alternateNodeTypeIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibilityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: InstancePoolNodeTypeFlexibility;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolNodeTypeFlexibility">InstancePoolNodeTypeFlexibility</a>

---


### InstancePoolPreloadedDockerImageBasicAuthOutputReference <a name="InstancePoolPreloadedDockerImageBasicAuthOutputReference" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.Initializer"></a>

```typescript
import { instancePool } from '@cdktn/provider-databricks'

new instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth">InstancePoolPreloadedDockerImageBasicAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: InstancePoolPreloadedDockerImageBasicAuth;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth">InstancePoolPreloadedDockerImageBasicAuth</a>

---


### InstancePoolPreloadedDockerImageList <a name="InstancePoolPreloadedDockerImageList" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.Initializer"></a>

```typescript
import { instancePool } from '@cdktn/provider-databricks'

new instancePool.InstancePoolPreloadedDockerImageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.get"></a>

```typescript
public get(index: number): InstancePoolPreloadedDockerImageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImage">InstancePoolPreloadedDockerImage</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InstancePoolPreloadedDockerImage[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImage">InstancePoolPreloadedDockerImage</a>[]

---


### InstancePoolPreloadedDockerImageOutputReference <a name="InstancePoolPreloadedDockerImageOutputReference" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.Initializer"></a>

```typescript
import { instancePool } from '@cdktn/provider-databricks'

new instancePool.InstancePoolPreloadedDockerImageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.putBasicAuth">putBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.resetBasicAuth">resetBasicAuth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBasicAuth` <a name="putBasicAuth" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.putBasicAuth"></a>

```typescript
public putBasicAuth(value: InstancePoolPreloadedDockerImageBasicAuth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.putBasicAuth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth">InstancePoolPreloadedDockerImageBasicAuth</a>

---

##### `resetBasicAuth` <a name="resetBasicAuth" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.resetBasicAuth"></a>

```typescript
public resetBasicAuth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.basicAuth">basicAuth</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference">InstancePoolPreloadedDockerImageBasicAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.basicAuthInput">basicAuthInput</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth">InstancePoolPreloadedDockerImageBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImage">InstancePoolPreloadedDockerImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `basicAuth`<sup>Required</sup> <a name="basicAuth" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.basicAuth"></a>

```typescript
public readonly basicAuth: InstancePoolPreloadedDockerImageBasicAuthOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference">InstancePoolPreloadedDockerImageBasicAuthOutputReference</a>

---

##### `basicAuthInput`<sup>Optional</sup> <a name="basicAuthInput" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.basicAuthInput"></a>

```typescript
public readonly basicAuthInput: InstancePoolPreloadedDockerImageBasicAuth;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth">InstancePoolPreloadedDockerImageBasicAuth</a>

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InstancePoolPreloadedDockerImage;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.instancePool.InstancePoolPreloadedDockerImage">InstancePoolPreloadedDockerImage</a>

---


### InstancePoolProviderConfigOutputReference <a name="InstancePoolProviderConfigOutputReference" id="@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.Initializer"></a>

```typescript
import { instancePool } from '@cdktn/provider-databricks'

new instancePool.InstancePoolProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.instancePool.InstancePoolProviderConfig">InstancePoolProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.instancePool.InstancePoolProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: InstancePoolProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.instancePool.InstancePoolProviderConfig">InstancePoolProviderConfig</a>

---



