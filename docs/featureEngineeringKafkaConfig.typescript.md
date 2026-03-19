# `featureEngineeringKafkaConfig` Submodule <a name="`featureEngineeringKafkaConfig` Submodule" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FeatureEngineeringKafkaConfig <a name="FeatureEngineeringKafkaConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config databricks_feature_engineering_kafka_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer"></a>

```typescript
import { featureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

new featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig(scope: Construct, id: string, config: FeatureEngineeringKafkaConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig">FeatureEngineeringKafkaConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig">FeatureEngineeringKafkaConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putAuthConfig">putAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putBackfillSource">putBackfillSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putKeySchema">putKeySchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putSubscriptionMode">putSubscriptionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putValueSchema">putValueSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetBackfillSource">resetBackfillSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetExtraOptions">resetExtraOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetKeySchema">resetKeySchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetValueSchema">resetValueSchema</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthConfig` <a name="putAuthConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putAuthConfig"></a>

```typescript
public putAuthConfig(value: FeatureEngineeringKafkaConfigAuthConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig">FeatureEngineeringKafkaConfigAuthConfig</a>

---

##### `putBackfillSource` <a name="putBackfillSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putBackfillSource"></a>

```typescript
public putBackfillSource(value: FeatureEngineeringKafkaConfigBackfillSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putBackfillSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource">FeatureEngineeringKafkaConfigBackfillSource</a>

---

##### `putKeySchema` <a name="putKeySchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putKeySchema"></a>

```typescript
public putKeySchema(value: FeatureEngineeringKafkaConfigKeySchema): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putKeySchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema">FeatureEngineeringKafkaConfigKeySchema</a>

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putProviderConfig"></a>

```typescript
public putProviderConfig(value: FeatureEngineeringKafkaConfigProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig">FeatureEngineeringKafkaConfigProviderConfig</a>

---

##### `putSubscriptionMode` <a name="putSubscriptionMode" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putSubscriptionMode"></a>

```typescript
public putSubscriptionMode(value: FeatureEngineeringKafkaConfigSubscriptionMode): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putSubscriptionMode.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode">FeatureEngineeringKafkaConfigSubscriptionMode</a>

---

##### `putValueSchema` <a name="putValueSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putValueSchema"></a>

```typescript
public putValueSchema(value: FeatureEngineeringKafkaConfigValueSchema): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putValueSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema">FeatureEngineeringKafkaConfigValueSchema</a>

---

##### `resetBackfillSource` <a name="resetBackfillSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetBackfillSource"></a>

```typescript
public resetBackfillSource(): void
```

##### `resetExtraOptions` <a name="resetExtraOptions" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetExtraOptions"></a>

```typescript
public resetExtraOptions(): void
```

##### `resetKeySchema` <a name="resetKeySchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetKeySchema"></a>

```typescript
public resetKeySchema(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

##### `resetValueSchema` <a name="resetValueSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetValueSchema"></a>

```typescript
public resetValueSchema(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a FeatureEngineeringKafkaConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isConstruct"></a>

```typescript
import { featureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isTerraformElement"></a>

```typescript
import { featureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isTerraformResource"></a>

```typescript
import { featureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.generateConfigForImport"></a>

```typescript
import { featureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a FeatureEngineeringKafkaConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FeatureEngineeringKafkaConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FeatureEngineeringKafkaConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FeatureEngineeringKafkaConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.authConfig">authConfig</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference">FeatureEngineeringKafkaConfigAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.backfillSource">backfillSource</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference">FeatureEngineeringKafkaConfigBackfillSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.keySchema">keySchema</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference">FeatureEngineeringKafkaConfigKeySchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference">FeatureEngineeringKafkaConfigProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.subscriptionMode">subscriptionMode</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference">FeatureEngineeringKafkaConfigSubscriptionModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.valueSchema">valueSchema</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference">FeatureEngineeringKafkaConfigValueSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.authConfigInput">authConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig">FeatureEngineeringKafkaConfigAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.backfillSourceInput">backfillSourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource">FeatureEngineeringKafkaConfigBackfillSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.bootstrapServersInput">bootstrapServersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.extraOptionsInput">extraOptionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.keySchemaInput">keySchemaInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema">FeatureEngineeringKafkaConfigKeySchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig">FeatureEngineeringKafkaConfigProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.subscriptionModeInput">subscriptionModeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode">FeatureEngineeringKafkaConfigSubscriptionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.valueSchemaInput">valueSchemaInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema">FeatureEngineeringKafkaConfigValueSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.bootstrapServers">bootstrapServers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.extraOptions">extraOptions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `authConfig`<sup>Required</sup> <a name="authConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.authConfig"></a>

```typescript
public readonly authConfig: FeatureEngineeringKafkaConfigAuthConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference">FeatureEngineeringKafkaConfigAuthConfigOutputReference</a>

---

##### `backfillSource`<sup>Required</sup> <a name="backfillSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.backfillSource"></a>

```typescript
public readonly backfillSource: FeatureEngineeringKafkaConfigBackfillSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference">FeatureEngineeringKafkaConfigBackfillSourceOutputReference</a>

---

##### `keySchema`<sup>Required</sup> <a name="keySchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.keySchema"></a>

```typescript
public readonly keySchema: FeatureEngineeringKafkaConfigKeySchemaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference">FeatureEngineeringKafkaConfigKeySchemaOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: FeatureEngineeringKafkaConfigProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference">FeatureEngineeringKafkaConfigProviderConfigOutputReference</a>

---

##### `subscriptionMode`<sup>Required</sup> <a name="subscriptionMode" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.subscriptionMode"></a>

```typescript
public readonly subscriptionMode: FeatureEngineeringKafkaConfigSubscriptionModeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference">FeatureEngineeringKafkaConfigSubscriptionModeOutputReference</a>

---

##### `valueSchema`<sup>Required</sup> <a name="valueSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.valueSchema"></a>

```typescript
public readonly valueSchema: FeatureEngineeringKafkaConfigValueSchemaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference">FeatureEngineeringKafkaConfigValueSchemaOutputReference</a>

---

##### `authConfigInput`<sup>Optional</sup> <a name="authConfigInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.authConfigInput"></a>

```typescript
public readonly authConfigInput: IResolvable | FeatureEngineeringKafkaConfigAuthConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig">FeatureEngineeringKafkaConfigAuthConfig</a>

---

##### `backfillSourceInput`<sup>Optional</sup> <a name="backfillSourceInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.backfillSourceInput"></a>

```typescript
public readonly backfillSourceInput: IResolvable | FeatureEngineeringKafkaConfigBackfillSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource">FeatureEngineeringKafkaConfigBackfillSource</a>

---

##### `bootstrapServersInput`<sup>Optional</sup> <a name="bootstrapServersInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.bootstrapServersInput"></a>

```typescript
public readonly bootstrapServersInput: string;
```

- *Type:* string

---

##### `extraOptionsInput`<sup>Optional</sup> <a name="extraOptionsInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.extraOptionsInput"></a>

```typescript
public readonly extraOptionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `keySchemaInput`<sup>Optional</sup> <a name="keySchemaInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.keySchemaInput"></a>

```typescript
public readonly keySchemaInput: IResolvable | FeatureEngineeringKafkaConfigKeySchema;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema">FeatureEngineeringKafkaConfigKeySchema</a>

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | FeatureEngineeringKafkaConfigProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig">FeatureEngineeringKafkaConfigProviderConfig</a>

---

##### `subscriptionModeInput`<sup>Optional</sup> <a name="subscriptionModeInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.subscriptionModeInput"></a>

```typescript
public readonly subscriptionModeInput: IResolvable | FeatureEngineeringKafkaConfigSubscriptionMode;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode">FeatureEngineeringKafkaConfigSubscriptionMode</a>

---

##### `valueSchemaInput`<sup>Optional</sup> <a name="valueSchemaInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.valueSchemaInput"></a>

```typescript
public readonly valueSchemaInput: IResolvable | FeatureEngineeringKafkaConfigValueSchema;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema">FeatureEngineeringKafkaConfigValueSchema</a>

---

##### `bootstrapServers`<sup>Required</sup> <a name="bootstrapServers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.bootstrapServers"></a>

```typescript
public readonly bootstrapServers: string;
```

- *Type:* string

---

##### `extraOptions`<sup>Required</sup> <a name="extraOptions" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.extraOptions"></a>

```typescript
public readonly extraOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FeatureEngineeringKafkaConfigAuthConfig <a name="FeatureEngineeringKafkaConfigAuthConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig.Initializer"></a>

```typescript
import { featureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

const featureEngineeringKafkaConfigAuthConfig: featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig.property.ucServiceCredentialName">ucServiceCredentialName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#uc_service_credential_name FeatureEngineeringKafkaConfig#uc_service_credential_name}. |

---

##### `ucServiceCredentialName`<sup>Optional</sup> <a name="ucServiceCredentialName" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig.property.ucServiceCredentialName"></a>

```typescript
public readonly ucServiceCredentialName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#uc_service_credential_name FeatureEngineeringKafkaConfig#uc_service_credential_name}.

---

### FeatureEngineeringKafkaConfigBackfillSource <a name="FeatureEngineeringKafkaConfigBackfillSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource.Initializer"></a>

```typescript
import { featureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

const featureEngineeringKafkaConfigBackfillSource: featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource.property.deltaTableSource">deltaTableSource</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#delta_table_source FeatureEngineeringKafkaConfig#delta_table_source}. |

---

##### `deltaTableSource`<sup>Optional</sup> <a name="deltaTableSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource.property.deltaTableSource"></a>

```typescript
public readonly deltaTableSource: FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#delta_table_source FeatureEngineeringKafkaConfig#delta_table_source}.

---

### FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource <a name="FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.Initializer"></a>

```typescript
import { featureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

const featureEngineeringKafkaConfigBackfillSourceDeltaTableSource: featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.fullName">fullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#full_name FeatureEngineeringKafkaConfig#full_name}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.dataframeSchema">dataframeSchema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#dataframe_schema FeatureEngineeringKafkaConfig#dataframe_schema}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.entityColumns">entityColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#entity_columns FeatureEngineeringKafkaConfig#entity_columns}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.filterCondition">filterCondition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#filter_condition FeatureEngineeringKafkaConfig#filter_condition}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.timeseriesColumn">timeseriesColumn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#timeseries_column FeatureEngineeringKafkaConfig#timeseries_column}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.transformationSql">transformationSql</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#transformation_sql FeatureEngineeringKafkaConfig#transformation_sql}. |

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#full_name FeatureEngineeringKafkaConfig#full_name}.

---

##### `dataframeSchema`<sup>Optional</sup> <a name="dataframeSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.dataframeSchema"></a>

```typescript
public readonly dataframeSchema: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#dataframe_schema FeatureEngineeringKafkaConfig#dataframe_schema}.

---

##### `entityColumns`<sup>Optional</sup> <a name="entityColumns" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.entityColumns"></a>

```typescript
public readonly entityColumns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#entity_columns FeatureEngineeringKafkaConfig#entity_columns}.

---

##### `filterCondition`<sup>Optional</sup> <a name="filterCondition" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.filterCondition"></a>

```typescript
public readonly filterCondition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#filter_condition FeatureEngineeringKafkaConfig#filter_condition}.

---

##### `timeseriesColumn`<sup>Optional</sup> <a name="timeseriesColumn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.timeseriesColumn"></a>

```typescript
public readonly timeseriesColumn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#timeseries_column FeatureEngineeringKafkaConfig#timeseries_column}.

---

##### `transformationSql`<sup>Optional</sup> <a name="transformationSql" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.transformationSql"></a>

```typescript
public readonly transformationSql: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#transformation_sql FeatureEngineeringKafkaConfig#transformation_sql}.

---

### FeatureEngineeringKafkaConfigConfig <a name="FeatureEngineeringKafkaConfigConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.Initializer"></a>

```typescript
import { featureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

const featureEngineeringKafkaConfigConfig: featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.authConfig">authConfig</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig">FeatureEngineeringKafkaConfigAuthConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#auth_config FeatureEngineeringKafkaConfig#auth_config}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.bootstrapServers">bootstrapServers</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#bootstrap_servers FeatureEngineeringKafkaConfig#bootstrap_servers}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.subscriptionMode">subscriptionMode</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode">FeatureEngineeringKafkaConfigSubscriptionMode</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#subscription_mode FeatureEngineeringKafkaConfig#subscription_mode}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.backfillSource">backfillSource</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource">FeatureEngineeringKafkaConfigBackfillSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#backfill_source FeatureEngineeringKafkaConfig#backfill_source}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.extraOptions">extraOptions</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#extra_options FeatureEngineeringKafkaConfig#extra_options}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.keySchema">keySchema</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema">FeatureEngineeringKafkaConfigKeySchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#key_schema FeatureEngineeringKafkaConfig#key_schema}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig">FeatureEngineeringKafkaConfigProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#provider_config FeatureEngineeringKafkaConfig#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.valueSchema">valueSchema</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema">FeatureEngineeringKafkaConfigValueSchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#value_schema FeatureEngineeringKafkaConfig#value_schema}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `authConfig`<sup>Required</sup> <a name="authConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.authConfig"></a>

```typescript
public readonly authConfig: FeatureEngineeringKafkaConfigAuthConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig">FeatureEngineeringKafkaConfigAuthConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#auth_config FeatureEngineeringKafkaConfig#auth_config}.

---

##### `bootstrapServers`<sup>Required</sup> <a name="bootstrapServers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.bootstrapServers"></a>

```typescript
public readonly bootstrapServers: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#bootstrap_servers FeatureEngineeringKafkaConfig#bootstrap_servers}.

---

##### `subscriptionMode`<sup>Required</sup> <a name="subscriptionMode" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.subscriptionMode"></a>

```typescript
public readonly subscriptionMode: FeatureEngineeringKafkaConfigSubscriptionMode;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode">FeatureEngineeringKafkaConfigSubscriptionMode</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#subscription_mode FeatureEngineeringKafkaConfig#subscription_mode}.

---

##### `backfillSource`<sup>Optional</sup> <a name="backfillSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.backfillSource"></a>

```typescript
public readonly backfillSource: FeatureEngineeringKafkaConfigBackfillSource;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource">FeatureEngineeringKafkaConfigBackfillSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#backfill_source FeatureEngineeringKafkaConfig#backfill_source}.

---

##### `extraOptions`<sup>Optional</sup> <a name="extraOptions" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.extraOptions"></a>

```typescript
public readonly extraOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#extra_options FeatureEngineeringKafkaConfig#extra_options}.

---

##### `keySchema`<sup>Optional</sup> <a name="keySchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.keySchema"></a>

```typescript
public readonly keySchema: FeatureEngineeringKafkaConfigKeySchema;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema">FeatureEngineeringKafkaConfigKeySchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#key_schema FeatureEngineeringKafkaConfig#key_schema}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: FeatureEngineeringKafkaConfigProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig">FeatureEngineeringKafkaConfigProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#provider_config FeatureEngineeringKafkaConfig#provider_config}.

---

##### `valueSchema`<sup>Optional</sup> <a name="valueSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.valueSchema"></a>

```typescript
public readonly valueSchema: FeatureEngineeringKafkaConfigValueSchema;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema">FeatureEngineeringKafkaConfigValueSchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#value_schema FeatureEngineeringKafkaConfig#value_schema}.

---

### FeatureEngineeringKafkaConfigKeySchema <a name="FeatureEngineeringKafkaConfigKeySchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema.Initializer"></a>

```typescript
import { featureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

const featureEngineeringKafkaConfigKeySchema: featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema.property.jsonSchema">jsonSchema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#json_schema FeatureEngineeringKafkaConfig#json_schema}. |

---

##### `jsonSchema`<sup>Optional</sup> <a name="jsonSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema.property.jsonSchema"></a>

```typescript
public readonly jsonSchema: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#json_schema FeatureEngineeringKafkaConfig#json_schema}.

---

### FeatureEngineeringKafkaConfigProviderConfig <a name="FeatureEngineeringKafkaConfigProviderConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig.Initializer"></a>

```typescript
import { featureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

const featureEngineeringKafkaConfigProviderConfig: featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#workspace_id FeatureEngineeringKafkaConfig#workspace_id}. |

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#workspace_id FeatureEngineeringKafkaConfig#workspace_id}.

---

### FeatureEngineeringKafkaConfigSubscriptionMode <a name="FeatureEngineeringKafkaConfigSubscriptionMode" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode.Initializer"></a>

```typescript
import { featureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

const featureEngineeringKafkaConfigSubscriptionMode: featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode.property.assign">assign</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#assign FeatureEngineeringKafkaConfig#assign}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode.property.subscribe">subscribe</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#subscribe FeatureEngineeringKafkaConfig#subscribe}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode.property.subscribePattern">subscribePattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#subscribe_pattern FeatureEngineeringKafkaConfig#subscribe_pattern}. |

---

##### `assign`<sup>Optional</sup> <a name="assign" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode.property.assign"></a>

```typescript
public readonly assign: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#assign FeatureEngineeringKafkaConfig#assign}.

---

##### `subscribe`<sup>Optional</sup> <a name="subscribe" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode.property.subscribe"></a>

```typescript
public readonly subscribe: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#subscribe FeatureEngineeringKafkaConfig#subscribe}.

---

##### `subscribePattern`<sup>Optional</sup> <a name="subscribePattern" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode.property.subscribePattern"></a>

```typescript
public readonly subscribePattern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#subscribe_pattern FeatureEngineeringKafkaConfig#subscribe_pattern}.

---

### FeatureEngineeringKafkaConfigValueSchema <a name="FeatureEngineeringKafkaConfigValueSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema.Initializer"></a>

```typescript
import { featureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

const featureEngineeringKafkaConfigValueSchema: featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema.property.jsonSchema">jsonSchema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#json_schema FeatureEngineeringKafkaConfig#json_schema}. |

---

##### `jsonSchema`<sup>Optional</sup> <a name="jsonSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema.property.jsonSchema"></a>

```typescript
public readonly jsonSchema: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#json_schema FeatureEngineeringKafkaConfig#json_schema}.

---

## Classes <a name="Classes" id="Classes"></a>

### FeatureEngineeringKafkaConfigAuthConfigOutputReference <a name="FeatureEngineeringKafkaConfigAuthConfigOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.Initializer"></a>

```typescript
import { featureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

new featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.resetUcServiceCredentialName">resetUcServiceCredentialName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUcServiceCredentialName` <a name="resetUcServiceCredentialName" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.resetUcServiceCredentialName"></a>

```typescript
public resetUcServiceCredentialName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.ucServiceCredentialNameInput">ucServiceCredentialNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.ucServiceCredentialName">ucServiceCredentialName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig">FeatureEngineeringKafkaConfigAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ucServiceCredentialNameInput`<sup>Optional</sup> <a name="ucServiceCredentialNameInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.ucServiceCredentialNameInput"></a>

```typescript
public readonly ucServiceCredentialNameInput: string;
```

- *Type:* string

---

##### `ucServiceCredentialName`<sup>Required</sup> <a name="ucServiceCredentialName" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.ucServiceCredentialName"></a>

```typescript
public readonly ucServiceCredentialName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringKafkaConfigAuthConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig">FeatureEngineeringKafkaConfigAuthConfig</a>

---


### FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference <a name="FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.Initializer"></a>

```typescript
import { featureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

new featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetDataframeSchema">resetDataframeSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetEntityColumns">resetEntityColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetFilterCondition">resetFilterCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetTimeseriesColumn">resetTimeseriesColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetTransformationSql">resetTransformationSql</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataframeSchema` <a name="resetDataframeSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetDataframeSchema"></a>

```typescript
public resetDataframeSchema(): void
```

##### `resetEntityColumns` <a name="resetEntityColumns" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetEntityColumns"></a>

```typescript
public resetEntityColumns(): void
```

##### `resetFilterCondition` <a name="resetFilterCondition" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetFilterCondition"></a>

```typescript
public resetFilterCondition(): void
```

##### `resetTimeseriesColumn` <a name="resetTimeseriesColumn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetTimeseriesColumn"></a>

```typescript
public resetTimeseriesColumn(): void
```

##### `resetTransformationSql` <a name="resetTransformationSql" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetTransformationSql"></a>

```typescript
public resetTransformationSql(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.dataframeSchemaInput">dataframeSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.entityColumnsInput">entityColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.filterConditionInput">filterConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.fullNameInput">fullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.timeseriesColumnInput">timeseriesColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.transformationSqlInput">transformationSqlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.dataframeSchema">dataframeSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.entityColumns">entityColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.filterCondition">filterCondition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.fullName">fullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.timeseriesColumn">timeseriesColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.transformationSql">transformationSql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataframeSchemaInput`<sup>Optional</sup> <a name="dataframeSchemaInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.dataframeSchemaInput"></a>

```typescript
public readonly dataframeSchemaInput: string;
```

- *Type:* string

---

##### `entityColumnsInput`<sup>Optional</sup> <a name="entityColumnsInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.entityColumnsInput"></a>

```typescript
public readonly entityColumnsInput: string[];
```

- *Type:* string[]

---

##### `filterConditionInput`<sup>Optional</sup> <a name="filterConditionInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.filterConditionInput"></a>

```typescript
public readonly filterConditionInput: string;
```

- *Type:* string

---

##### `fullNameInput`<sup>Optional</sup> <a name="fullNameInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.fullNameInput"></a>

```typescript
public readonly fullNameInput: string;
```

- *Type:* string

---

##### `timeseriesColumnInput`<sup>Optional</sup> <a name="timeseriesColumnInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.timeseriesColumnInput"></a>

```typescript
public readonly timeseriesColumnInput: string;
```

- *Type:* string

---

##### `transformationSqlInput`<sup>Optional</sup> <a name="transformationSqlInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.transformationSqlInput"></a>

```typescript
public readonly transformationSqlInput: string;
```

- *Type:* string

---

##### `dataframeSchema`<sup>Required</sup> <a name="dataframeSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.dataframeSchema"></a>

```typescript
public readonly dataframeSchema: string;
```

- *Type:* string

---

##### `entityColumns`<sup>Required</sup> <a name="entityColumns" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.entityColumns"></a>

```typescript
public readonly entityColumns: string[];
```

- *Type:* string[]

---

##### `filterCondition`<sup>Required</sup> <a name="filterCondition" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.filterCondition"></a>

```typescript
public readonly filterCondition: string;
```

- *Type:* string

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

---

##### `timeseriesColumn`<sup>Required</sup> <a name="timeseriesColumn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.timeseriesColumn"></a>

```typescript
public readonly timeseriesColumn: string;
```

- *Type:* string

---

##### `transformationSql`<sup>Required</sup> <a name="transformationSql" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.transformationSql"></a>

```typescript
public readonly transformationSql: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource</a>

---


### FeatureEngineeringKafkaConfigBackfillSourceOutputReference <a name="FeatureEngineeringKafkaConfigBackfillSourceOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.Initializer"></a>

```typescript
import { featureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

new featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.putDeltaTableSource">putDeltaTableSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.resetDeltaTableSource">resetDeltaTableSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeltaTableSource` <a name="putDeltaTableSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.putDeltaTableSource"></a>

```typescript
public putDeltaTableSource(value: FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.putDeltaTableSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource</a>

---

##### `resetDeltaTableSource` <a name="resetDeltaTableSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.resetDeltaTableSource"></a>

```typescript
public resetDeltaTableSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.deltaTableSource">deltaTableSource</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference">FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.deltaTableSourceInput">deltaTableSourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource">FeatureEngineeringKafkaConfigBackfillSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deltaTableSource`<sup>Required</sup> <a name="deltaTableSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.deltaTableSource"></a>

```typescript
public readonly deltaTableSource: FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference">FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference</a>

---

##### `deltaTableSourceInput`<sup>Optional</sup> <a name="deltaTableSourceInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.deltaTableSourceInput"></a>

```typescript
public readonly deltaTableSourceInput: IResolvable | FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringKafkaConfigBackfillSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource">FeatureEngineeringKafkaConfigBackfillSource</a>

---


### FeatureEngineeringKafkaConfigKeySchemaOutputReference <a name="FeatureEngineeringKafkaConfigKeySchemaOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.Initializer"></a>

```typescript
import { featureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

new featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.resetJsonSchema">resetJsonSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetJsonSchema` <a name="resetJsonSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.resetJsonSchema"></a>

```typescript
public resetJsonSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.jsonSchemaInput">jsonSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.jsonSchema">jsonSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema">FeatureEngineeringKafkaConfigKeySchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jsonSchemaInput`<sup>Optional</sup> <a name="jsonSchemaInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.jsonSchemaInput"></a>

```typescript
public readonly jsonSchemaInput: string;
```

- *Type:* string

---

##### `jsonSchema`<sup>Required</sup> <a name="jsonSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.jsonSchema"></a>

```typescript
public readonly jsonSchema: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringKafkaConfigKeySchema;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema">FeatureEngineeringKafkaConfigKeySchema</a>

---


### FeatureEngineeringKafkaConfigProviderConfigOutputReference <a name="FeatureEngineeringKafkaConfigProviderConfigOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.Initializer"></a>

```typescript
import { featureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

new featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig">FeatureEngineeringKafkaConfigProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringKafkaConfigProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig">FeatureEngineeringKafkaConfigProviderConfig</a>

---


### FeatureEngineeringKafkaConfigSubscriptionModeOutputReference <a name="FeatureEngineeringKafkaConfigSubscriptionModeOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.Initializer"></a>

```typescript
import { featureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

new featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resetAssign">resetAssign</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resetSubscribe">resetSubscribe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resetSubscribePattern">resetSubscribePattern</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAssign` <a name="resetAssign" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resetAssign"></a>

```typescript
public resetAssign(): void
```

##### `resetSubscribe` <a name="resetSubscribe" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resetSubscribe"></a>

```typescript
public resetSubscribe(): void
```

##### `resetSubscribePattern` <a name="resetSubscribePattern" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resetSubscribePattern"></a>

```typescript
public resetSubscribePattern(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.assignInput">assignInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribeInput">subscribeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribePatternInput">subscribePatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.assign">assign</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribe">subscribe</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribePattern">subscribePattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode">FeatureEngineeringKafkaConfigSubscriptionMode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `assignInput`<sup>Optional</sup> <a name="assignInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.assignInput"></a>

```typescript
public readonly assignInput: string;
```

- *Type:* string

---

##### `subscribeInput`<sup>Optional</sup> <a name="subscribeInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribeInput"></a>

```typescript
public readonly subscribeInput: string;
```

- *Type:* string

---

##### `subscribePatternInput`<sup>Optional</sup> <a name="subscribePatternInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribePatternInput"></a>

```typescript
public readonly subscribePatternInput: string;
```

- *Type:* string

---

##### `assign`<sup>Required</sup> <a name="assign" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.assign"></a>

```typescript
public readonly assign: string;
```

- *Type:* string

---

##### `subscribe`<sup>Required</sup> <a name="subscribe" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribe"></a>

```typescript
public readonly subscribe: string;
```

- *Type:* string

---

##### `subscribePattern`<sup>Required</sup> <a name="subscribePattern" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribePattern"></a>

```typescript
public readonly subscribePattern: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringKafkaConfigSubscriptionMode;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode">FeatureEngineeringKafkaConfigSubscriptionMode</a>

---


### FeatureEngineeringKafkaConfigValueSchemaOutputReference <a name="FeatureEngineeringKafkaConfigValueSchemaOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.Initializer"></a>

```typescript
import { featureEngineeringKafkaConfig } from '@cdktn/provider-databricks'

new featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.resetJsonSchema">resetJsonSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetJsonSchema` <a name="resetJsonSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.resetJsonSchema"></a>

```typescript
public resetJsonSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.jsonSchemaInput">jsonSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.jsonSchema">jsonSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema">FeatureEngineeringKafkaConfigValueSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jsonSchemaInput`<sup>Optional</sup> <a name="jsonSchemaInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.jsonSchemaInput"></a>

```typescript
public readonly jsonSchemaInput: string;
```

- *Type:* string

---

##### `jsonSchema`<sup>Required</sup> <a name="jsonSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.jsonSchema"></a>

```typescript
public readonly jsonSchema: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringKafkaConfigValueSchema;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema">FeatureEngineeringKafkaConfigValueSchema</a>

---



