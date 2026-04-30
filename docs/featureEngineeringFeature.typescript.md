# `featureEngineeringFeature` Submodule <a name="`featureEngineeringFeature` Submodule" id="@cdktn/provider-databricks.featureEngineeringFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FeatureEngineeringFeature <a name="FeatureEngineeringFeature" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature databricks_feature_engineering_feature}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeature(scope: Construct, id: string, config: FeatureEngineeringFeatureConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig">FeatureEngineeringFeatureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig">FeatureEngineeringFeatureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putEntities">putEntities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putFunction">putFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putLineageContext">putLineageContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putTimeseriesColumn">putTimeseriesColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putTimeWindow">putTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.resetEntities">resetEntities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.resetFilterCondition">resetFilterCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.resetInputs">resetInputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.resetLineageContext">resetLineageContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.resetTimeseriesColumn">resetTimeseriesColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.resetTimeWindow">resetTimeWindow</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEntities` <a name="putEntities" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putEntities"></a>

```typescript
public putEntities(value: IResolvable | FeatureEngineeringFeatureEntities[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putEntities.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntities">FeatureEngineeringFeatureEntities</a>[]

---

##### `putFunction` <a name="putFunction" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putFunction"></a>

```typescript
public putFunction(value: FeatureEngineeringFeatureFunction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putFunction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction">FeatureEngineeringFeatureFunction</a>

---

##### `putLineageContext` <a name="putLineageContext" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putLineageContext"></a>

```typescript
public putLineageContext(value: FeatureEngineeringFeatureLineageContext): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putLineageContext.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContext">FeatureEngineeringFeatureLineageContext</a>

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putProviderConfig"></a>

```typescript
public putProviderConfig(value: FeatureEngineeringFeatureProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfig">FeatureEngineeringFeatureProviderConfig</a>

---

##### `putSource` <a name="putSource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putSource"></a>

```typescript
public putSource(value: FeatureEngineeringFeatureSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource">FeatureEngineeringFeatureSource</a>

---

##### `putTimeseriesColumn` <a name="putTimeseriesColumn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putTimeseriesColumn"></a>

```typescript
public putTimeseriesColumn(value: FeatureEngineeringFeatureTimeseriesColumn): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putTimeseriesColumn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumn">FeatureEngineeringFeatureTimeseriesColumn</a>

---

##### `putTimeWindow` <a name="putTimeWindow" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putTimeWindow"></a>

```typescript
public putTimeWindow(value: FeatureEngineeringFeatureTimeWindow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putTimeWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow">FeatureEngineeringFeatureTimeWindow</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEntities` <a name="resetEntities" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.resetEntities"></a>

```typescript
public resetEntities(): void
```

##### `resetFilterCondition` <a name="resetFilterCondition" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.resetFilterCondition"></a>

```typescript
public resetFilterCondition(): void
```

##### `resetInputs` <a name="resetInputs" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.resetInputs"></a>

```typescript
public resetInputs(): void
```

##### `resetLineageContext` <a name="resetLineageContext" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.resetLineageContext"></a>

```typescript
public resetLineageContext(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

##### `resetTimeseriesColumn` <a name="resetTimeseriesColumn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.resetTimeseriesColumn"></a>

```typescript
public resetTimeseriesColumn(): void
```

##### `resetTimeWindow` <a name="resetTimeWindow" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.resetTimeWindow"></a>

```typescript
public resetTimeWindow(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a FeatureEngineeringFeature resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.isConstruct"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

featureEngineeringFeature.FeatureEngineeringFeature.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.isTerraformElement"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

featureEngineeringFeature.FeatureEngineeringFeature.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.isTerraformResource"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

featureEngineeringFeature.FeatureEngineeringFeature.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.generateConfigForImport"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

featureEngineeringFeature.FeatureEngineeringFeature.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a FeatureEngineeringFeature resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FeatureEngineeringFeature to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FeatureEngineeringFeature that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FeatureEngineeringFeature to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.entities">entities</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesList">FeatureEngineeringFeatureEntitiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.function">function</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference">FeatureEngineeringFeatureFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.lineageContext">lineageContext</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference">FeatureEngineeringFeatureLineageContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference">FeatureEngineeringFeatureProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.source">source</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference">FeatureEngineeringFeatureSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.timeseriesColumn">timeseriesColumn</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference">FeatureEngineeringFeatureTimeseriesColumnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.timeWindow">timeWindow</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference">FeatureEngineeringFeatureTimeWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.entitiesInput">entitiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntities">FeatureEngineeringFeatureEntities</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.filterConditionInput">filterConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.fullNameInput">fullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.functionInput">functionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction">FeatureEngineeringFeatureFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.inputsInput">inputsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.lineageContextInput">lineageContextInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContext">FeatureEngineeringFeatureLineageContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfig">FeatureEngineeringFeatureProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.sourceInput">sourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource">FeatureEngineeringFeatureSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.timeseriesColumnInput">timeseriesColumnInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumn">FeatureEngineeringFeatureTimeseriesColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.timeWindowInput">timeWindowInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow">FeatureEngineeringFeatureTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.filterCondition">filterCondition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.fullName">fullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.inputs">inputs</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `entities`<sup>Required</sup> <a name="entities" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.entities"></a>

```typescript
public readonly entities: FeatureEngineeringFeatureEntitiesList;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesList">FeatureEngineeringFeatureEntitiesList</a>

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.function"></a>

```typescript
public readonly function: FeatureEngineeringFeatureFunctionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference">FeatureEngineeringFeatureFunctionOutputReference</a>

---

##### `lineageContext`<sup>Required</sup> <a name="lineageContext" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.lineageContext"></a>

```typescript
public readonly lineageContext: FeatureEngineeringFeatureLineageContextOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference">FeatureEngineeringFeatureLineageContextOutputReference</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.providerConfig"></a>

```typescript
public readonly providerConfig: FeatureEngineeringFeatureProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference">FeatureEngineeringFeatureProviderConfigOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.source"></a>

```typescript
public readonly source: FeatureEngineeringFeatureSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference">FeatureEngineeringFeatureSourceOutputReference</a>

---

##### `timeseriesColumn`<sup>Required</sup> <a name="timeseriesColumn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.timeseriesColumn"></a>

```typescript
public readonly timeseriesColumn: FeatureEngineeringFeatureTimeseriesColumnOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference">FeatureEngineeringFeatureTimeseriesColumnOutputReference</a>

---

##### `timeWindow`<sup>Required</sup> <a name="timeWindow" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.timeWindow"></a>

```typescript
public readonly timeWindow: FeatureEngineeringFeatureTimeWindowOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference">FeatureEngineeringFeatureTimeWindowOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `entitiesInput`<sup>Optional</sup> <a name="entitiesInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.entitiesInput"></a>

```typescript
public readonly entitiesInput: IResolvable | FeatureEngineeringFeatureEntities[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntities">FeatureEngineeringFeatureEntities</a>[]

---

##### `filterConditionInput`<sup>Optional</sup> <a name="filterConditionInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.filterConditionInput"></a>

```typescript
public readonly filterConditionInput: string;
```

- *Type:* string

---

##### `fullNameInput`<sup>Optional</sup> <a name="fullNameInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.fullNameInput"></a>

```typescript
public readonly fullNameInput: string;
```

- *Type:* string

---

##### `functionInput`<sup>Optional</sup> <a name="functionInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.functionInput"></a>

```typescript
public readonly functionInput: IResolvable | FeatureEngineeringFeatureFunction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction">FeatureEngineeringFeatureFunction</a>

---

##### `inputsInput`<sup>Optional</sup> <a name="inputsInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.inputsInput"></a>

```typescript
public readonly inputsInput: string[];
```

- *Type:* string[]

---

##### `lineageContextInput`<sup>Optional</sup> <a name="lineageContextInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.lineageContextInput"></a>

```typescript
public readonly lineageContextInput: IResolvable | FeatureEngineeringFeatureLineageContext;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContext">FeatureEngineeringFeatureLineageContext</a>

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | FeatureEngineeringFeatureProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfig">FeatureEngineeringFeatureProviderConfig</a>

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.sourceInput"></a>

```typescript
public readonly sourceInput: IResolvable | FeatureEngineeringFeatureSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource">FeatureEngineeringFeatureSource</a>

---

##### `timeseriesColumnInput`<sup>Optional</sup> <a name="timeseriesColumnInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.timeseriesColumnInput"></a>

```typescript
public readonly timeseriesColumnInput: IResolvable | FeatureEngineeringFeatureTimeseriesColumn;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumn">FeatureEngineeringFeatureTimeseriesColumn</a>

---

##### `timeWindowInput`<sup>Optional</sup> <a name="timeWindowInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.timeWindowInput"></a>

```typescript
public readonly timeWindowInput: IResolvable | FeatureEngineeringFeatureTimeWindow;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow">FeatureEngineeringFeatureTimeWindow</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `filterCondition`<sup>Required</sup> <a name="filterCondition" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.filterCondition"></a>

```typescript
public readonly filterCondition: string;
```

- *Type:* string

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.inputs"></a>

```typescript
public readonly inputs: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FeatureEngineeringFeatureConfig <a name="FeatureEngineeringFeatureConfig" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureConfig: featureEngineeringFeature.FeatureEngineeringFeatureConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.fullName">fullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#full_name FeatureEngineeringFeature#full_name}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.function">function</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction">FeatureEngineeringFeatureFunction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#function FeatureEngineeringFeature#function}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.source">source</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource">FeatureEngineeringFeatureSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#source FeatureEngineeringFeature#source}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#description FeatureEngineeringFeature#description}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.entities">entities</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntities">FeatureEngineeringFeatureEntities</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#entities FeatureEngineeringFeature#entities}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.filterCondition">filterCondition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#filter_condition FeatureEngineeringFeature#filter_condition}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.inputs">inputs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#inputs FeatureEngineeringFeature#inputs}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.lineageContext">lineageContext</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContext">FeatureEngineeringFeatureLineageContext</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#lineage_context FeatureEngineeringFeature#lineage_context}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfig">FeatureEngineeringFeatureProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#provider_config FeatureEngineeringFeature#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.timeseriesColumn">timeseriesColumn</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumn">FeatureEngineeringFeatureTimeseriesColumn</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#timeseries_column FeatureEngineeringFeature#timeseries_column}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.timeWindow">timeWindow</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow">FeatureEngineeringFeatureTimeWindow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#time_window FeatureEngineeringFeature#time_window}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#full_name FeatureEngineeringFeature#full_name}.

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.function"></a>

```typescript
public readonly function: FeatureEngineeringFeatureFunction;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction">FeatureEngineeringFeatureFunction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#function FeatureEngineeringFeature#function}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.source"></a>

```typescript
public readonly source: FeatureEngineeringFeatureSource;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource">FeatureEngineeringFeatureSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#source FeatureEngineeringFeature#source}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#description FeatureEngineeringFeature#description}.

---

##### `entities`<sup>Optional</sup> <a name="entities" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.entities"></a>

```typescript
public readonly entities: IResolvable | FeatureEngineeringFeatureEntities[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntities">FeatureEngineeringFeatureEntities</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#entities FeatureEngineeringFeature#entities}.

---

##### `filterCondition`<sup>Optional</sup> <a name="filterCondition" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.filterCondition"></a>

```typescript
public readonly filterCondition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#filter_condition FeatureEngineeringFeature#filter_condition}.

---

##### `inputs`<sup>Optional</sup> <a name="inputs" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.inputs"></a>

```typescript
public readonly inputs: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#inputs FeatureEngineeringFeature#inputs}.

---

##### `lineageContext`<sup>Optional</sup> <a name="lineageContext" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.lineageContext"></a>

```typescript
public readonly lineageContext: FeatureEngineeringFeatureLineageContext;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContext">FeatureEngineeringFeatureLineageContext</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#lineage_context FeatureEngineeringFeature#lineage_context}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: FeatureEngineeringFeatureProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfig">FeatureEngineeringFeatureProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#provider_config FeatureEngineeringFeature#provider_config}.

---

##### `timeseriesColumn`<sup>Optional</sup> <a name="timeseriesColumn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.timeseriesColumn"></a>

```typescript
public readonly timeseriesColumn: FeatureEngineeringFeatureTimeseriesColumn;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumn">FeatureEngineeringFeatureTimeseriesColumn</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#timeseries_column FeatureEngineeringFeature#timeseries_column}.

---

##### `timeWindow`<sup>Optional</sup> <a name="timeWindow" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.timeWindow"></a>

```typescript
public readonly timeWindow: FeatureEngineeringFeatureTimeWindow;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow">FeatureEngineeringFeatureTimeWindow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#time_window FeatureEngineeringFeature#time_window}.

---

### FeatureEngineeringFeatureEntities <a name="FeatureEngineeringFeatureEntities" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntities.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureEntities: featureEngineeringFeature.FeatureEngineeringFeatureEntities = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntities.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#name FeatureEngineeringFeature#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntities.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#name FeatureEngineeringFeature#name}.

---

### FeatureEngineeringFeatureFunction <a name="FeatureEngineeringFeatureFunction" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureFunction: featureEngineeringFeature.FeatureEngineeringFeatureFunction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction.property.aggregationFunction">aggregationFunction</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunction">FeatureEngineeringFeatureFunctionAggregationFunction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#aggregation_function FeatureEngineeringFeature#aggregation_function}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction.property.columnSelection">columnSelection</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelection">FeatureEngineeringFeatureFunctionColumnSelection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#column_selection FeatureEngineeringFeature#column_selection}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction.property.extraParameters">extraParameters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters">FeatureEngineeringFeatureFunctionExtraParameters</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#extra_parameters FeatureEngineeringFeature#extra_parameters}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction.property.functionType">functionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#function_type FeatureEngineeringFeature#function_type}. |

---

##### `aggregationFunction`<sup>Optional</sup> <a name="aggregationFunction" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction.property.aggregationFunction"></a>

```typescript
public readonly aggregationFunction: FeatureEngineeringFeatureFunctionAggregationFunction;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunction">FeatureEngineeringFeatureFunctionAggregationFunction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#aggregation_function FeatureEngineeringFeature#aggregation_function}.

---

##### `columnSelection`<sup>Optional</sup> <a name="columnSelection" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction.property.columnSelection"></a>

```typescript
public readonly columnSelection: FeatureEngineeringFeatureFunctionColumnSelection;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelection">FeatureEngineeringFeatureFunctionColumnSelection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#column_selection FeatureEngineeringFeature#column_selection}.

---

##### `extraParameters`<sup>Optional</sup> <a name="extraParameters" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction.property.extraParameters"></a>

```typescript
public readonly extraParameters: IResolvable | FeatureEngineeringFeatureFunctionExtraParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters">FeatureEngineeringFeatureFunctionExtraParameters</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#extra_parameters FeatureEngineeringFeature#extra_parameters}.

---

##### `functionType`<sup>Optional</sup> <a name="functionType" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction.property.functionType"></a>

```typescript
public readonly functionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#function_type FeatureEngineeringFeature#function_type}.

---

### FeatureEngineeringFeatureFunctionAggregationFunction <a name="FeatureEngineeringFeatureFunctionAggregationFunction" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunction.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureFunctionAggregationFunction: featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunction.property.approxCountDistinct">approxCountDistinct</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct">FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#approx_count_distinct FeatureEngineeringFeature#approx_count_distinct}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunction.property.approxPercentile">approxPercentile</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile">FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#approx_percentile FeatureEngineeringFeature#approx_percentile}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunction.property.avg">avg</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvg">FeatureEngineeringFeatureFunctionAggregationFunctionAvg</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#avg FeatureEngineeringFeature#avg}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunction.property.countFunction">countFunction</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunction">FeatureEngineeringFeatureFunctionAggregationFunctionCountFunction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#count_function FeatureEngineeringFeature#count_function}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunction.property.first">first</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirst">FeatureEngineeringFeatureFunctionAggregationFunctionFirst</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#first FeatureEngineeringFeature#first}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunction.property.last">last</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLast">FeatureEngineeringFeatureFunctionAggregationFunctionLast</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#last FeatureEngineeringFeature#last}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunction.property.max">max</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMax">FeatureEngineeringFeatureFunctionAggregationFunctionMax</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#max FeatureEngineeringFeature#max}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunction.property.min">min</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMin">FeatureEngineeringFeatureFunctionAggregationFunctionMin</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#min FeatureEngineeringFeature#min}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunction.property.stddevPop">stddevPop</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPop">FeatureEngineeringFeatureFunctionAggregationFunctionStddevPop</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#stddev_pop FeatureEngineeringFeature#stddev_pop}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunction.property.stddevSamp">stddevSamp</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp">FeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#stddev_samp FeatureEngineeringFeature#stddev_samp}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunction.property.sum">sum</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSum">FeatureEngineeringFeatureFunctionAggregationFunctionSum</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#sum FeatureEngineeringFeature#sum}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunction.property.timeWindow">timeWindow</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow">FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#time_window FeatureEngineeringFeature#time_window}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunction.property.varPop">varPop</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPop">FeatureEngineeringFeatureFunctionAggregationFunctionVarPop</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#var_pop FeatureEngineeringFeature#var_pop}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunction.property.varSamp">varSamp</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSamp">FeatureEngineeringFeatureFunctionAggregationFunctionVarSamp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#var_samp FeatureEngineeringFeature#var_samp}. |

---

##### `approxCountDistinct`<sup>Optional</sup> <a name="approxCountDistinct" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunction.property.approxCountDistinct"></a>

```typescript
public readonly approxCountDistinct: FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct">FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#approx_count_distinct FeatureEngineeringFeature#approx_count_distinct}.

---

##### `approxPercentile`<sup>Optional</sup> <a name="approxPercentile" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunction.property.approxPercentile"></a>

```typescript
public readonly approxPercentile: FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile">FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#approx_percentile FeatureEngineeringFeature#approx_percentile}.

---

##### `avg`<sup>Optional</sup> <a name="avg" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunction.property.avg"></a>

```typescript
public readonly avg: FeatureEngineeringFeatureFunctionAggregationFunctionAvg;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvg">FeatureEngineeringFeatureFunctionAggregationFunctionAvg</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#avg FeatureEngineeringFeature#avg}.

---

##### `countFunction`<sup>Optional</sup> <a name="countFunction" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunction.property.countFunction"></a>

```typescript
public readonly countFunction: FeatureEngineeringFeatureFunctionAggregationFunctionCountFunction;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunction">FeatureEngineeringFeatureFunctionAggregationFunctionCountFunction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#count_function FeatureEngineeringFeature#count_function}.

---

##### `first`<sup>Optional</sup> <a name="first" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunction.property.first"></a>

```typescript
public readonly first: FeatureEngineeringFeatureFunctionAggregationFunctionFirst;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirst">FeatureEngineeringFeatureFunctionAggregationFunctionFirst</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#first FeatureEngineeringFeature#first}.

---

##### `last`<sup>Optional</sup> <a name="last" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunction.property.last"></a>

```typescript
public readonly last: FeatureEngineeringFeatureFunctionAggregationFunctionLast;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLast">FeatureEngineeringFeatureFunctionAggregationFunctionLast</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#last FeatureEngineeringFeature#last}.

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunction.property.max"></a>

```typescript
public readonly max: FeatureEngineeringFeatureFunctionAggregationFunctionMax;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMax">FeatureEngineeringFeatureFunctionAggregationFunctionMax</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#max FeatureEngineeringFeature#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunction.property.min"></a>

```typescript
public readonly min: FeatureEngineeringFeatureFunctionAggregationFunctionMin;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMin">FeatureEngineeringFeatureFunctionAggregationFunctionMin</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#min FeatureEngineeringFeature#min}.

---

##### `stddevPop`<sup>Optional</sup> <a name="stddevPop" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunction.property.stddevPop"></a>

```typescript
public readonly stddevPop: FeatureEngineeringFeatureFunctionAggregationFunctionStddevPop;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPop">FeatureEngineeringFeatureFunctionAggregationFunctionStddevPop</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#stddev_pop FeatureEngineeringFeature#stddev_pop}.

---

##### `stddevSamp`<sup>Optional</sup> <a name="stddevSamp" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunction.property.stddevSamp"></a>

```typescript
public readonly stddevSamp: FeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp">FeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#stddev_samp FeatureEngineeringFeature#stddev_samp}.

---

##### `sum`<sup>Optional</sup> <a name="sum" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunction.property.sum"></a>

```typescript
public readonly sum: FeatureEngineeringFeatureFunctionAggregationFunctionSum;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSum">FeatureEngineeringFeatureFunctionAggregationFunctionSum</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#sum FeatureEngineeringFeature#sum}.

---

##### `timeWindow`<sup>Optional</sup> <a name="timeWindow" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunction.property.timeWindow"></a>

```typescript
public readonly timeWindow: FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow">FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#time_window FeatureEngineeringFeature#time_window}.

---

##### `varPop`<sup>Optional</sup> <a name="varPop" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunction.property.varPop"></a>

```typescript
public readonly varPop: FeatureEngineeringFeatureFunctionAggregationFunctionVarPop;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPop">FeatureEngineeringFeatureFunctionAggregationFunctionVarPop</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#var_pop FeatureEngineeringFeature#var_pop}.

---

##### `varSamp`<sup>Optional</sup> <a name="varSamp" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunction.property.varSamp"></a>

```typescript
public readonly varSamp: FeatureEngineeringFeatureFunctionAggregationFunctionVarSamp;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSamp">FeatureEngineeringFeatureFunctionAggregationFunctionVarSamp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#var_samp FeatureEngineeringFeature#var_samp}.

---

### FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct <a name="FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct: featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct.property.input">input</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#input FeatureEngineeringFeature#input}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct.property.relativeSd">relativeSd</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#relative_sd FeatureEngineeringFeature#relative_sd}. |

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#input FeatureEngineeringFeature#input}.

---

##### `relativeSd`<sup>Optional</sup> <a name="relativeSd" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct.property.relativeSd"></a>

```typescript
public readonly relativeSd: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#relative_sd FeatureEngineeringFeature#relative_sd}.

---

### FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile <a name="FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureFunctionAggregationFunctionApproxPercentile: featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile.property.input">input</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#input FeatureEngineeringFeature#input}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile.property.percentile">percentile</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#percentile FeatureEngineeringFeature#percentile}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile.property.accuracy">accuracy</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#accuracy FeatureEngineeringFeature#accuracy}. |

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#input FeatureEngineeringFeature#input}.

---

##### `percentile`<sup>Required</sup> <a name="percentile" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile.property.percentile"></a>

```typescript
public readonly percentile: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#percentile FeatureEngineeringFeature#percentile}.

---

##### `accuracy`<sup>Optional</sup> <a name="accuracy" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile.property.accuracy"></a>

```typescript
public readonly accuracy: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#accuracy FeatureEngineeringFeature#accuracy}.

---

### FeatureEngineeringFeatureFunctionAggregationFunctionAvg <a name="FeatureEngineeringFeatureFunctionAggregationFunctionAvg" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvg"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvg.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureFunctionAggregationFunctionAvg: featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvg = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvg.property.input">input</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#input FeatureEngineeringFeature#input}. |

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvg.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#input FeatureEngineeringFeature#input}.

---

### FeatureEngineeringFeatureFunctionAggregationFunctionCountFunction <a name="FeatureEngineeringFeatureFunctionAggregationFunctionCountFunction" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunction.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureFunctionAggregationFunctionCountFunction: featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunction.property.input">input</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#input FeatureEngineeringFeature#input}. |

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunction.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#input FeatureEngineeringFeature#input}.

---

### FeatureEngineeringFeatureFunctionAggregationFunctionFirst <a name="FeatureEngineeringFeatureFunctionAggregationFunctionFirst" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirst"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirst.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureFunctionAggregationFunctionFirst: featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirst = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirst.property.input">input</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#input FeatureEngineeringFeature#input}. |

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirst.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#input FeatureEngineeringFeature#input}.

---

### FeatureEngineeringFeatureFunctionAggregationFunctionLast <a name="FeatureEngineeringFeatureFunctionAggregationFunctionLast" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLast"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLast.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureFunctionAggregationFunctionLast: featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLast = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLast.property.input">input</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#input FeatureEngineeringFeature#input}. |

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLast.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#input FeatureEngineeringFeature#input}.

---

### FeatureEngineeringFeatureFunctionAggregationFunctionMax <a name="FeatureEngineeringFeatureFunctionAggregationFunctionMax" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMax"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMax.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureFunctionAggregationFunctionMax: featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMax = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMax.property.input">input</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#input FeatureEngineeringFeature#input}. |

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMax.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#input FeatureEngineeringFeature#input}.

---

### FeatureEngineeringFeatureFunctionAggregationFunctionMin <a name="FeatureEngineeringFeatureFunctionAggregationFunctionMin" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMin"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMin.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureFunctionAggregationFunctionMin: featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMin = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMin.property.input">input</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#input FeatureEngineeringFeature#input}. |

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMin.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#input FeatureEngineeringFeature#input}.

---

### FeatureEngineeringFeatureFunctionAggregationFunctionStddevPop <a name="FeatureEngineeringFeatureFunctionAggregationFunctionStddevPop" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPop"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPop.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureFunctionAggregationFunctionStddevPop: featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPop = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPop.property.input">input</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#input FeatureEngineeringFeature#input}. |

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPop.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#input FeatureEngineeringFeature#input}.

---

### FeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp <a name="FeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureFunctionAggregationFunctionStddevSamp: featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp.property.input">input</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#input FeatureEngineeringFeature#input}. |

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#input FeatureEngineeringFeature#input}.

---

### FeatureEngineeringFeatureFunctionAggregationFunctionSum <a name="FeatureEngineeringFeatureFunctionAggregationFunctionSum" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSum"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSum.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureFunctionAggregationFunctionSum: featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSum = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSum.property.input">input</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#input FeatureEngineeringFeature#input}. |

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSum.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#input FeatureEngineeringFeature#input}.

---

### FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow <a name="FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureFunctionAggregationFunctionTimeWindow: featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow.property.continuous">continuous</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous">FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#continuous FeatureEngineeringFeature#continuous}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow.property.sliding">sliding</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding">FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#sliding FeatureEngineeringFeature#sliding}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow.property.tumbling">tumbling</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling">FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#tumbling FeatureEngineeringFeature#tumbling}. |

---

##### `continuous`<sup>Optional</sup> <a name="continuous" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow.property.continuous"></a>

```typescript
public readonly continuous: FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous">FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#continuous FeatureEngineeringFeature#continuous}.

---

##### `sliding`<sup>Optional</sup> <a name="sliding" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow.property.sliding"></a>

```typescript
public readonly sliding: FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding">FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#sliding FeatureEngineeringFeature#sliding}.

---

##### `tumbling`<sup>Optional</sup> <a name="tumbling" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow.property.tumbling"></a>

```typescript
public readonly tumbling: FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling">FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#tumbling FeatureEngineeringFeature#tumbling}.

---

### FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous <a name="FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous: featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous.property.windowDuration">windowDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#window_duration FeatureEngineeringFeature#window_duration}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous.property.offset">offset</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#offset FeatureEngineeringFeature#offset}. |

---

##### `windowDuration`<sup>Required</sup> <a name="windowDuration" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous.property.windowDuration"></a>

```typescript
public readonly windowDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#window_duration FeatureEngineeringFeature#window_duration}.

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous.property.offset"></a>

```typescript
public readonly offset: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#offset FeatureEngineeringFeature#offset}.

---

### FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding <a name="FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding: featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding.property.slideDuration">slideDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#slide_duration FeatureEngineeringFeature#slide_duration}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding.property.windowDuration">windowDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#window_duration FeatureEngineeringFeature#window_duration}. |

---

##### `slideDuration`<sup>Required</sup> <a name="slideDuration" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding.property.slideDuration"></a>

```typescript
public readonly slideDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#slide_duration FeatureEngineeringFeature#slide_duration}.

---

##### `windowDuration`<sup>Required</sup> <a name="windowDuration" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding.property.windowDuration"></a>

```typescript
public readonly windowDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#window_duration FeatureEngineeringFeature#window_duration}.

---

### FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling <a name="FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling: featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling.property.windowDuration">windowDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#window_duration FeatureEngineeringFeature#window_duration}. |

---

##### `windowDuration`<sup>Required</sup> <a name="windowDuration" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling.property.windowDuration"></a>

```typescript
public readonly windowDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#window_duration FeatureEngineeringFeature#window_duration}.

---

### FeatureEngineeringFeatureFunctionAggregationFunctionVarPop <a name="FeatureEngineeringFeatureFunctionAggregationFunctionVarPop" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPop"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPop.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureFunctionAggregationFunctionVarPop: featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPop = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPop.property.input">input</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#input FeatureEngineeringFeature#input}. |

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPop.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#input FeatureEngineeringFeature#input}.

---

### FeatureEngineeringFeatureFunctionAggregationFunctionVarSamp <a name="FeatureEngineeringFeatureFunctionAggregationFunctionVarSamp" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSamp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSamp.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureFunctionAggregationFunctionVarSamp: featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSamp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSamp.property.input">input</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#input FeatureEngineeringFeature#input}. |

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSamp.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#input FeatureEngineeringFeature#input}.

---

### FeatureEngineeringFeatureFunctionColumnSelection <a name="FeatureEngineeringFeatureFunctionColumnSelection" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelection.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureFunctionColumnSelection: featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelection.property.column">column</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#column FeatureEngineeringFeature#column}. |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelection.property.column"></a>

```typescript
public readonly column: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#column FeatureEngineeringFeature#column}.

---

### FeatureEngineeringFeatureFunctionExtraParameters <a name="FeatureEngineeringFeatureFunctionExtraParameters" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureFunctionExtraParameters: featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#key FeatureEngineeringFeature#key}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#value FeatureEngineeringFeature#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#key FeatureEngineeringFeature#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#value FeatureEngineeringFeature#value}.

---

### FeatureEngineeringFeatureLineageContext <a name="FeatureEngineeringFeatureLineageContext" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContext.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureLineageContext: featureEngineeringFeature.FeatureEngineeringFeatureLineageContext = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContext.property.jobContext">jobContext</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContext">FeatureEngineeringFeatureLineageContextJobContext</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#job_context FeatureEngineeringFeature#job_context}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContext.property.notebookId">notebookId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#notebook_id FeatureEngineeringFeature#notebook_id}. |

---

##### `jobContext`<sup>Optional</sup> <a name="jobContext" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContext.property.jobContext"></a>

```typescript
public readonly jobContext: FeatureEngineeringFeatureLineageContextJobContext;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContext">FeatureEngineeringFeatureLineageContextJobContext</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#job_context FeatureEngineeringFeature#job_context}.

---

##### `notebookId`<sup>Optional</sup> <a name="notebookId" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContext.property.notebookId"></a>

```typescript
public readonly notebookId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#notebook_id FeatureEngineeringFeature#notebook_id}.

---

### FeatureEngineeringFeatureLineageContextJobContext <a name="FeatureEngineeringFeatureLineageContextJobContext" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContext.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureLineageContextJobContext: featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContext = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContext.property.jobId">jobId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#job_id FeatureEngineeringFeature#job_id}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContext.property.jobRunId">jobRunId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#job_run_id FeatureEngineeringFeature#job_run_id}. |

---

##### `jobId`<sup>Optional</sup> <a name="jobId" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContext.property.jobId"></a>

```typescript
public readonly jobId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#job_id FeatureEngineeringFeature#job_id}.

---

##### `jobRunId`<sup>Optional</sup> <a name="jobRunId" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContext.property.jobRunId"></a>

```typescript
public readonly jobRunId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#job_run_id FeatureEngineeringFeature#job_run_id}.

---

### FeatureEngineeringFeatureProviderConfig <a name="FeatureEngineeringFeatureProviderConfig" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfig.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureProviderConfig: featureEngineeringFeature.FeatureEngineeringFeatureProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#workspace_id FeatureEngineeringFeature#workspace_id}. |

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#workspace_id FeatureEngineeringFeature#workspace_id}.

---

### FeatureEngineeringFeatureSource <a name="FeatureEngineeringFeatureSource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureSource: featureEngineeringFeature.FeatureEngineeringFeatureSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource.property.deltaTableSource">deltaTableSource</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource">FeatureEngineeringFeatureSourceDeltaTableSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#delta_table_source FeatureEngineeringFeature#delta_table_source}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource.property.kafkaSource">kafkaSource</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSource">FeatureEngineeringFeatureSourceKafkaSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#kafka_source FeatureEngineeringFeature#kafka_source}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource.property.requestSource">requestSource</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSource">FeatureEngineeringFeatureSourceRequestSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#request_source FeatureEngineeringFeature#request_source}. |

---

##### `deltaTableSource`<sup>Optional</sup> <a name="deltaTableSource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource.property.deltaTableSource"></a>

```typescript
public readonly deltaTableSource: FeatureEngineeringFeatureSourceDeltaTableSource;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource">FeatureEngineeringFeatureSourceDeltaTableSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#delta_table_source FeatureEngineeringFeature#delta_table_source}.

---

##### `kafkaSource`<sup>Optional</sup> <a name="kafkaSource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource.property.kafkaSource"></a>

```typescript
public readonly kafkaSource: FeatureEngineeringFeatureSourceKafkaSource;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSource">FeatureEngineeringFeatureSourceKafkaSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#kafka_source FeatureEngineeringFeature#kafka_source}.

---

##### `requestSource`<sup>Optional</sup> <a name="requestSource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource.property.requestSource"></a>

```typescript
public readonly requestSource: FeatureEngineeringFeatureSourceRequestSource;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSource">FeatureEngineeringFeatureSourceRequestSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#request_source FeatureEngineeringFeature#request_source}.

---

### FeatureEngineeringFeatureSourceDeltaTableSource <a name="FeatureEngineeringFeatureSourceDeltaTableSource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureSourceDeltaTableSource: featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource.property.fullName">fullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#full_name FeatureEngineeringFeature#full_name}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource.property.dataframeSchema">dataframeSchema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#dataframe_schema FeatureEngineeringFeature#dataframe_schema}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource.property.entityColumns">entityColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#entity_columns FeatureEngineeringFeature#entity_columns}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource.property.filterCondition">filterCondition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#filter_condition FeatureEngineeringFeature#filter_condition}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource.property.timeseriesColumn">timeseriesColumn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#timeseries_column FeatureEngineeringFeature#timeseries_column}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource.property.transformationSql">transformationSql</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#transformation_sql FeatureEngineeringFeature#transformation_sql}. |

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#full_name FeatureEngineeringFeature#full_name}.

---

##### `dataframeSchema`<sup>Optional</sup> <a name="dataframeSchema" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource.property.dataframeSchema"></a>

```typescript
public readonly dataframeSchema: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#dataframe_schema FeatureEngineeringFeature#dataframe_schema}.

---

##### `entityColumns`<sup>Optional</sup> <a name="entityColumns" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource.property.entityColumns"></a>

```typescript
public readonly entityColumns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#entity_columns FeatureEngineeringFeature#entity_columns}.

---

##### `filterCondition`<sup>Optional</sup> <a name="filterCondition" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource.property.filterCondition"></a>

```typescript
public readonly filterCondition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#filter_condition FeatureEngineeringFeature#filter_condition}.

---

##### `timeseriesColumn`<sup>Optional</sup> <a name="timeseriesColumn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource.property.timeseriesColumn"></a>

```typescript
public readonly timeseriesColumn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#timeseries_column FeatureEngineeringFeature#timeseries_column}.

---

##### `transformationSql`<sup>Optional</sup> <a name="transformationSql" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource.property.transformationSql"></a>

```typescript
public readonly transformationSql: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#transformation_sql FeatureEngineeringFeature#transformation_sql}.

---

### FeatureEngineeringFeatureSourceKafkaSource <a name="FeatureEngineeringFeatureSourceKafkaSource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSource.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureSourceKafkaSource: featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSource.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#name FeatureEngineeringFeature#name}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSource.property.entityColumnIdentifiers">entityColumnIdentifiers</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers">FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#entity_column_identifiers FeatureEngineeringFeature#entity_column_identifiers}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSource.property.filterCondition">filterCondition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#filter_condition FeatureEngineeringFeature#filter_condition}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSource.property.timeseriesColumnIdentifier">timeseriesColumnIdentifier</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier">FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#timeseries_column_identifier FeatureEngineeringFeature#timeseries_column_identifier}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#name FeatureEngineeringFeature#name}.

---

##### `entityColumnIdentifiers`<sup>Optional</sup> <a name="entityColumnIdentifiers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSource.property.entityColumnIdentifiers"></a>

```typescript
public readonly entityColumnIdentifiers: IResolvable | FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers">FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#entity_column_identifiers FeatureEngineeringFeature#entity_column_identifiers}.

---

##### `filterCondition`<sup>Optional</sup> <a name="filterCondition" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSource.property.filterCondition"></a>

```typescript
public readonly filterCondition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#filter_condition FeatureEngineeringFeature#filter_condition}.

---

##### `timeseriesColumnIdentifier`<sup>Optional</sup> <a name="timeseriesColumnIdentifier" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSource.property.timeseriesColumnIdentifier"></a>

```typescript
public readonly timeseriesColumnIdentifier: FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier">FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#timeseries_column_identifier FeatureEngineeringFeature#timeseries_column_identifier}.

---

### FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers <a name="FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers: featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers.property.variantExprPath">variantExprPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#variant_expr_path FeatureEngineeringFeature#variant_expr_path}. |

---

##### `variantExprPath`<sup>Required</sup> <a name="variantExprPath" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers.property.variantExprPath"></a>

```typescript
public readonly variantExprPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#variant_expr_path FeatureEngineeringFeature#variant_expr_path}.

---

### FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier <a name="FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier: featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier.property.variantExprPath">variantExprPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#variant_expr_path FeatureEngineeringFeature#variant_expr_path}. |

---

##### `variantExprPath`<sup>Required</sup> <a name="variantExprPath" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier.property.variantExprPath"></a>

```typescript
public readonly variantExprPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#variant_expr_path FeatureEngineeringFeature#variant_expr_path}.

---

### FeatureEngineeringFeatureSourceRequestSource <a name="FeatureEngineeringFeatureSourceRequestSource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSource.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureSourceRequestSource: featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSource.property.flatSchema">flatSchema</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchema">FeatureEngineeringFeatureSourceRequestSourceFlatSchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#flat_schema FeatureEngineeringFeature#flat_schema}. |

---

##### `flatSchema`<sup>Optional</sup> <a name="flatSchema" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSource.property.flatSchema"></a>

```typescript
public readonly flatSchema: FeatureEngineeringFeatureSourceRequestSourceFlatSchema;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchema">FeatureEngineeringFeatureSourceRequestSourceFlatSchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#flat_schema FeatureEngineeringFeature#flat_schema}.

---

### FeatureEngineeringFeatureSourceRequestSourceFlatSchema <a name="FeatureEngineeringFeatureSourceRequestSourceFlatSchema" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchema.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureSourceRequestSourceFlatSchema: featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchema = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchema.property.fields">fields</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields">FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#fields FeatureEngineeringFeature#fields}. |

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchema.property.fields"></a>

```typescript
public readonly fields: IResolvable | FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields">FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#fields FeatureEngineeringFeature#fields}.

---

### FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields <a name="FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureSourceRequestSourceFlatSchemaFields: featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields.property.dataType">dataType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#data_type FeatureEngineeringFeature#data_type}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#name FeatureEngineeringFeature#name}. |

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#data_type FeatureEngineeringFeature#data_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#name FeatureEngineeringFeature#name}.

---

### FeatureEngineeringFeatureTimeseriesColumn <a name="FeatureEngineeringFeatureTimeseriesColumn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumn.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureTimeseriesColumn: featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumn.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#name FeatureEngineeringFeature#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumn.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#name FeatureEngineeringFeature#name}.

---

### FeatureEngineeringFeatureTimeWindow <a name="FeatureEngineeringFeatureTimeWindow" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureTimeWindow: featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow.property.continuous">continuous</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuous">FeatureEngineeringFeatureTimeWindowContinuous</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#continuous FeatureEngineeringFeature#continuous}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow.property.sliding">sliding</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSliding">FeatureEngineeringFeatureTimeWindowSliding</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#sliding FeatureEngineeringFeature#sliding}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow.property.tumbling">tumbling</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumbling">FeatureEngineeringFeatureTimeWindowTumbling</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#tumbling FeatureEngineeringFeature#tumbling}. |

---

##### `continuous`<sup>Optional</sup> <a name="continuous" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow.property.continuous"></a>

```typescript
public readonly continuous: FeatureEngineeringFeatureTimeWindowContinuous;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuous">FeatureEngineeringFeatureTimeWindowContinuous</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#continuous FeatureEngineeringFeature#continuous}.

---

##### `sliding`<sup>Optional</sup> <a name="sliding" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow.property.sliding"></a>

```typescript
public readonly sliding: FeatureEngineeringFeatureTimeWindowSliding;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSliding">FeatureEngineeringFeatureTimeWindowSliding</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#sliding FeatureEngineeringFeature#sliding}.

---

##### `tumbling`<sup>Optional</sup> <a name="tumbling" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow.property.tumbling"></a>

```typescript
public readonly tumbling: FeatureEngineeringFeatureTimeWindowTumbling;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumbling">FeatureEngineeringFeatureTimeWindowTumbling</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#tumbling FeatureEngineeringFeature#tumbling}.

---

### FeatureEngineeringFeatureTimeWindowContinuous <a name="FeatureEngineeringFeatureTimeWindowContinuous" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuous"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuous.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureTimeWindowContinuous: featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuous = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuous.property.windowDuration">windowDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#window_duration FeatureEngineeringFeature#window_duration}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuous.property.offset">offset</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#offset FeatureEngineeringFeature#offset}. |

---

##### `windowDuration`<sup>Required</sup> <a name="windowDuration" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuous.property.windowDuration"></a>

```typescript
public readonly windowDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#window_duration FeatureEngineeringFeature#window_duration}.

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuous.property.offset"></a>

```typescript
public readonly offset: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#offset FeatureEngineeringFeature#offset}.

---

### FeatureEngineeringFeatureTimeWindowSliding <a name="FeatureEngineeringFeatureTimeWindowSliding" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSliding"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSliding.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureTimeWindowSliding: featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSliding = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSliding.property.slideDuration">slideDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#slide_duration FeatureEngineeringFeature#slide_duration}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSliding.property.windowDuration">windowDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#window_duration FeatureEngineeringFeature#window_duration}. |

---

##### `slideDuration`<sup>Required</sup> <a name="slideDuration" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSliding.property.slideDuration"></a>

```typescript
public readonly slideDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#slide_duration FeatureEngineeringFeature#slide_duration}.

---

##### `windowDuration`<sup>Required</sup> <a name="windowDuration" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSliding.property.windowDuration"></a>

```typescript
public readonly windowDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#window_duration FeatureEngineeringFeature#window_duration}.

---

### FeatureEngineeringFeatureTimeWindowTumbling <a name="FeatureEngineeringFeatureTimeWindowTumbling" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumbling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumbling.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureTimeWindowTumbling: featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumbling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumbling.property.windowDuration">windowDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#window_duration FeatureEngineeringFeature#window_duration}. |

---

##### `windowDuration`<sup>Required</sup> <a name="windowDuration" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumbling.property.windowDuration"></a>

```typescript
public readonly windowDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/feature_engineering_feature#window_duration FeatureEngineeringFeature#window_duration}.

---

## Classes <a name="Classes" id="Classes"></a>

### FeatureEngineeringFeatureEntitiesList <a name="FeatureEngineeringFeatureEntitiesList" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesList.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureEntitiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesList.get"></a>

```typescript
public get(index: number): FeatureEngineeringFeatureEntitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntities">FeatureEngineeringFeatureEntities</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureEntities[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntities">FeatureEngineeringFeatureEntities</a>[]

---


### FeatureEngineeringFeatureEntitiesOutputReference <a name="FeatureEngineeringFeatureEntitiesOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntities">FeatureEngineeringFeatureEntities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureEntities;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureEntities">FeatureEngineeringFeatureEntities</a>

---


### FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference <a name="FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.resetRelativeSd">resetRelativeSd</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRelativeSd` <a name="resetRelativeSd" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.resetRelativeSd"></a>

```typescript
public resetRelativeSd(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.property.inputInput">inputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.property.relativeSdInput">relativeSdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.property.input">input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.property.relativeSd">relativeSd</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct">FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.property.inputInput"></a>

```typescript
public readonly inputInput: string;
```

- *Type:* string

---

##### `relativeSdInput`<sup>Optional</sup> <a name="relativeSdInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.property.relativeSdInput"></a>

```typescript
public readonly relativeSdInput: number;
```

- *Type:* number

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

---

##### `relativeSd`<sup>Required</sup> <a name="relativeSd" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.property.relativeSd"></a>

```typescript
public readonly relativeSd: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct">FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct</a>

---


### FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference <a name="FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.resetAccuracy">resetAccuracy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccuracy` <a name="resetAccuracy" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.resetAccuracy"></a>

```typescript
public resetAccuracy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.property.accuracyInput">accuracyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.property.inputInput">inputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.property.percentileInput">percentileInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.property.accuracy">accuracy</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.property.input">input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.property.percentile">percentile</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile">FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accuracyInput`<sup>Optional</sup> <a name="accuracyInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.property.accuracyInput"></a>

```typescript
public readonly accuracyInput: number;
```

- *Type:* number

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.property.inputInput"></a>

```typescript
public readonly inputInput: string;
```

- *Type:* string

---

##### `percentileInput`<sup>Optional</sup> <a name="percentileInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.property.percentileInput"></a>

```typescript
public readonly percentileInput: number;
```

- *Type:* number

---

##### `accuracy`<sup>Required</sup> <a name="accuracy" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.property.accuracy"></a>

```typescript
public readonly accuracy: number;
```

- *Type:* number

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

---

##### `percentile`<sup>Required</sup> <a name="percentile" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.property.percentile"></a>

```typescript
public readonly percentile: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile">FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile</a>

---


### FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference <a name="FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.property.inputInput">inputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.property.input">input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvg">FeatureEngineeringFeatureFunctionAggregationFunctionAvg</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.property.inputInput"></a>

```typescript
public readonly inputInput: string;
```

- *Type:* string

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureFunctionAggregationFunctionAvg;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvg">FeatureEngineeringFeatureFunctionAggregationFunctionAvg</a>

---


### FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference <a name="FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.property.inputInput">inputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.property.input">input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunction">FeatureEngineeringFeatureFunctionAggregationFunctionCountFunction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.property.inputInput"></a>

```typescript
public readonly inputInput: string;
```

- *Type:* string

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureFunctionAggregationFunctionCountFunction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunction">FeatureEngineeringFeatureFunctionAggregationFunctionCountFunction</a>

---


### FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference <a name="FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.property.inputInput">inputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.property.input">input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirst">FeatureEngineeringFeatureFunctionAggregationFunctionFirst</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.property.inputInput"></a>

```typescript
public readonly inputInput: string;
```

- *Type:* string

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureFunctionAggregationFunctionFirst;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirst">FeatureEngineeringFeatureFunctionAggregationFunctionFirst</a>

---


### FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference <a name="FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.property.inputInput">inputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.property.input">input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLast">FeatureEngineeringFeatureFunctionAggregationFunctionLast</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.property.inputInput"></a>

```typescript
public readonly inputInput: string;
```

- *Type:* string

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureFunctionAggregationFunctionLast;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLast">FeatureEngineeringFeatureFunctionAggregationFunctionLast</a>

---


### FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference <a name="FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.property.inputInput">inputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.property.input">input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMax">FeatureEngineeringFeatureFunctionAggregationFunctionMax</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.property.inputInput"></a>

```typescript
public readonly inputInput: string;
```

- *Type:* string

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureFunctionAggregationFunctionMax;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMax">FeatureEngineeringFeatureFunctionAggregationFunctionMax</a>

---


### FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference <a name="FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.property.inputInput">inputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.property.input">input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMin">FeatureEngineeringFeatureFunctionAggregationFunctionMin</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.property.inputInput"></a>

```typescript
public readonly inputInput: string;
```

- *Type:* string

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureFunctionAggregationFunctionMin;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMin">FeatureEngineeringFeatureFunctionAggregationFunctionMin</a>

---


### FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference <a name="FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putApproxCountDistinct">putApproxCountDistinct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putApproxPercentile">putApproxPercentile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putAvg">putAvg</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putCountFunction">putCountFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putFirst">putFirst</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putLast">putLast</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putMax">putMax</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putMin">putMin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putStddevPop">putStddevPop</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putStddevSamp">putStddevSamp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putSum">putSum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putTimeWindow">putTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putVarPop">putVarPop</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putVarSamp">putVarSamp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetApproxCountDistinct">resetApproxCountDistinct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetApproxPercentile">resetApproxPercentile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetAvg">resetAvg</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetCountFunction">resetCountFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetFirst">resetFirst</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetLast">resetLast</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetMin">resetMin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetStddevPop">resetStddevPop</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetStddevSamp">resetStddevSamp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetSum">resetSum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetTimeWindow">resetTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetVarPop">resetVarPop</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetVarSamp">resetVarSamp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApproxCountDistinct` <a name="putApproxCountDistinct" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putApproxCountDistinct"></a>

```typescript
public putApproxCountDistinct(value: FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putApproxCountDistinct.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct">FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct</a>

---

##### `putApproxPercentile` <a name="putApproxPercentile" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putApproxPercentile"></a>

```typescript
public putApproxPercentile(value: FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putApproxPercentile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile">FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile</a>

---

##### `putAvg` <a name="putAvg" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putAvg"></a>

```typescript
public putAvg(value: FeatureEngineeringFeatureFunctionAggregationFunctionAvg): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putAvg.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvg">FeatureEngineeringFeatureFunctionAggregationFunctionAvg</a>

---

##### `putCountFunction` <a name="putCountFunction" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putCountFunction"></a>

```typescript
public putCountFunction(value: FeatureEngineeringFeatureFunctionAggregationFunctionCountFunction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putCountFunction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunction">FeatureEngineeringFeatureFunctionAggregationFunctionCountFunction</a>

---

##### `putFirst` <a name="putFirst" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putFirst"></a>

```typescript
public putFirst(value: FeatureEngineeringFeatureFunctionAggregationFunctionFirst): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putFirst.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirst">FeatureEngineeringFeatureFunctionAggregationFunctionFirst</a>

---

##### `putLast` <a name="putLast" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putLast"></a>

```typescript
public putLast(value: FeatureEngineeringFeatureFunctionAggregationFunctionLast): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putLast.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLast">FeatureEngineeringFeatureFunctionAggregationFunctionLast</a>

---

##### `putMax` <a name="putMax" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putMax"></a>

```typescript
public putMax(value: FeatureEngineeringFeatureFunctionAggregationFunctionMax): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putMax.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMax">FeatureEngineeringFeatureFunctionAggregationFunctionMax</a>

---

##### `putMin` <a name="putMin" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putMin"></a>

```typescript
public putMin(value: FeatureEngineeringFeatureFunctionAggregationFunctionMin): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putMin.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMin">FeatureEngineeringFeatureFunctionAggregationFunctionMin</a>

---

##### `putStddevPop` <a name="putStddevPop" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putStddevPop"></a>

```typescript
public putStddevPop(value: FeatureEngineeringFeatureFunctionAggregationFunctionStddevPop): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putStddevPop.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPop">FeatureEngineeringFeatureFunctionAggregationFunctionStddevPop</a>

---

##### `putStddevSamp` <a name="putStddevSamp" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putStddevSamp"></a>

```typescript
public putStddevSamp(value: FeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putStddevSamp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp">FeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp</a>

---

##### `putSum` <a name="putSum" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putSum"></a>

```typescript
public putSum(value: FeatureEngineeringFeatureFunctionAggregationFunctionSum): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putSum.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSum">FeatureEngineeringFeatureFunctionAggregationFunctionSum</a>

---

##### `putTimeWindow` <a name="putTimeWindow" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putTimeWindow"></a>

```typescript
public putTimeWindow(value: FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putTimeWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow">FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow</a>

---

##### `putVarPop` <a name="putVarPop" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putVarPop"></a>

```typescript
public putVarPop(value: FeatureEngineeringFeatureFunctionAggregationFunctionVarPop): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putVarPop.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPop">FeatureEngineeringFeatureFunctionAggregationFunctionVarPop</a>

---

##### `putVarSamp` <a name="putVarSamp" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putVarSamp"></a>

```typescript
public putVarSamp(value: FeatureEngineeringFeatureFunctionAggregationFunctionVarSamp): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.putVarSamp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSamp">FeatureEngineeringFeatureFunctionAggregationFunctionVarSamp</a>

---

##### `resetApproxCountDistinct` <a name="resetApproxCountDistinct" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetApproxCountDistinct"></a>

```typescript
public resetApproxCountDistinct(): void
```

##### `resetApproxPercentile` <a name="resetApproxPercentile" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetApproxPercentile"></a>

```typescript
public resetApproxPercentile(): void
```

##### `resetAvg` <a name="resetAvg" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetAvg"></a>

```typescript
public resetAvg(): void
```

##### `resetCountFunction` <a name="resetCountFunction" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetCountFunction"></a>

```typescript
public resetCountFunction(): void
```

##### `resetFirst` <a name="resetFirst" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetFirst"></a>

```typescript
public resetFirst(): void
```

##### `resetLast` <a name="resetLast" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetLast"></a>

```typescript
public resetLast(): void
```

##### `resetMax` <a name="resetMax" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetMax"></a>

```typescript
public resetMax(): void
```

##### `resetMin` <a name="resetMin" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetMin"></a>

```typescript
public resetMin(): void
```

##### `resetStddevPop` <a name="resetStddevPop" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetStddevPop"></a>

```typescript
public resetStddevPop(): void
```

##### `resetStddevSamp` <a name="resetStddevSamp" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetStddevSamp"></a>

```typescript
public resetStddevSamp(): void
```

##### `resetSum` <a name="resetSum" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetSum"></a>

```typescript
public resetSum(): void
```

##### `resetTimeWindow` <a name="resetTimeWindow" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetTimeWindow"></a>

```typescript
public resetTimeWindow(): void
```

##### `resetVarPop` <a name="resetVarPop" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetVarPop"></a>

```typescript
public resetVarPop(): void
```

##### `resetVarSamp` <a name="resetVarSamp" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.resetVarSamp"></a>

```typescript
public resetVarSamp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.approxCountDistinct">approxCountDistinct</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference">FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.approxPercentile">approxPercentile</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference">FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.avg">avg</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference">FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.countFunction">countFunction</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference">FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.first">first</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference">FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.last">last</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference">FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.max">max</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference">FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.min">min</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference">FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.stddevPop">stddevPop</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference">FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.stddevSamp">stddevSamp</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference">FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.sum">sum</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference">FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.timeWindow">timeWindow</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference">FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.varPop">varPop</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference">FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.varSamp">varSamp</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference">FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.approxCountDistinctInput">approxCountDistinctInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct">FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.approxPercentileInput">approxPercentileInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile">FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.avgInput">avgInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvg">FeatureEngineeringFeatureFunctionAggregationFunctionAvg</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.countFunctionInput">countFunctionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunction">FeatureEngineeringFeatureFunctionAggregationFunctionCountFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.firstInput">firstInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirst">FeatureEngineeringFeatureFunctionAggregationFunctionFirst</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.lastInput">lastInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLast">FeatureEngineeringFeatureFunctionAggregationFunctionLast</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.maxInput">maxInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMax">FeatureEngineeringFeatureFunctionAggregationFunctionMax</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.minInput">minInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMin">FeatureEngineeringFeatureFunctionAggregationFunctionMin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.stddevPopInput">stddevPopInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPop">FeatureEngineeringFeatureFunctionAggregationFunctionStddevPop</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.stddevSampInput">stddevSampInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp">FeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.sumInput">sumInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSum">FeatureEngineeringFeatureFunctionAggregationFunctionSum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.timeWindowInput">timeWindowInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow">FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.varPopInput">varPopInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPop">FeatureEngineeringFeatureFunctionAggregationFunctionVarPop</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.varSampInput">varSampInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSamp">FeatureEngineeringFeatureFunctionAggregationFunctionVarSamp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunction">FeatureEngineeringFeatureFunctionAggregationFunction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `approxCountDistinct`<sup>Required</sup> <a name="approxCountDistinct" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.approxCountDistinct"></a>

```typescript
public readonly approxCountDistinct: FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference">FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference</a>

---

##### `approxPercentile`<sup>Required</sup> <a name="approxPercentile" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.approxPercentile"></a>

```typescript
public readonly approxPercentile: FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference">FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference</a>

---

##### `avg`<sup>Required</sup> <a name="avg" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.avg"></a>

```typescript
public readonly avg: FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference">FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference</a>

---

##### `countFunction`<sup>Required</sup> <a name="countFunction" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.countFunction"></a>

```typescript
public readonly countFunction: FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference">FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference</a>

---

##### `first`<sup>Required</sup> <a name="first" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.first"></a>

```typescript
public readonly first: FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference">FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference</a>

---

##### `last`<sup>Required</sup> <a name="last" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.last"></a>

```typescript
public readonly last: FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference">FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference</a>

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.max"></a>

```typescript
public readonly max: FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference">FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference</a>

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.min"></a>

```typescript
public readonly min: FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference">FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference</a>

---

##### `stddevPop`<sup>Required</sup> <a name="stddevPop" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.stddevPop"></a>

```typescript
public readonly stddevPop: FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference">FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference</a>

---

##### `stddevSamp`<sup>Required</sup> <a name="stddevSamp" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.stddevSamp"></a>

```typescript
public readonly stddevSamp: FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference">FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference</a>

---

##### `sum`<sup>Required</sup> <a name="sum" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.sum"></a>

```typescript
public readonly sum: FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference">FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference</a>

---

##### `timeWindow`<sup>Required</sup> <a name="timeWindow" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.timeWindow"></a>

```typescript
public readonly timeWindow: FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference">FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference</a>

---

##### `varPop`<sup>Required</sup> <a name="varPop" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.varPop"></a>

```typescript
public readonly varPop: FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference">FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference</a>

---

##### `varSamp`<sup>Required</sup> <a name="varSamp" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.varSamp"></a>

```typescript
public readonly varSamp: FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference">FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference</a>

---

##### `approxCountDistinctInput`<sup>Optional</sup> <a name="approxCountDistinctInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.approxCountDistinctInput"></a>

```typescript
public readonly approxCountDistinctInput: IResolvable | FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct">FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct</a>

---

##### `approxPercentileInput`<sup>Optional</sup> <a name="approxPercentileInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.approxPercentileInput"></a>

```typescript
public readonly approxPercentileInput: IResolvable | FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile">FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile</a>

---

##### `avgInput`<sup>Optional</sup> <a name="avgInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.avgInput"></a>

```typescript
public readonly avgInput: IResolvable | FeatureEngineeringFeatureFunctionAggregationFunctionAvg;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionAvg">FeatureEngineeringFeatureFunctionAggregationFunctionAvg</a>

---

##### `countFunctionInput`<sup>Optional</sup> <a name="countFunctionInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.countFunctionInput"></a>

```typescript
public readonly countFunctionInput: IResolvable | FeatureEngineeringFeatureFunctionAggregationFunctionCountFunction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionCountFunction">FeatureEngineeringFeatureFunctionAggregationFunctionCountFunction</a>

---

##### `firstInput`<sup>Optional</sup> <a name="firstInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.firstInput"></a>

```typescript
public readonly firstInput: IResolvable | FeatureEngineeringFeatureFunctionAggregationFunctionFirst;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionFirst">FeatureEngineeringFeatureFunctionAggregationFunctionFirst</a>

---

##### `lastInput`<sup>Optional</sup> <a name="lastInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.lastInput"></a>

```typescript
public readonly lastInput: IResolvable | FeatureEngineeringFeatureFunctionAggregationFunctionLast;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionLast">FeatureEngineeringFeatureFunctionAggregationFunctionLast</a>

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.maxInput"></a>

```typescript
public readonly maxInput: IResolvable | FeatureEngineeringFeatureFunctionAggregationFunctionMax;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMax">FeatureEngineeringFeatureFunctionAggregationFunctionMax</a>

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.minInput"></a>

```typescript
public readonly minInput: IResolvable | FeatureEngineeringFeatureFunctionAggregationFunctionMin;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionMin">FeatureEngineeringFeatureFunctionAggregationFunctionMin</a>

---

##### `stddevPopInput`<sup>Optional</sup> <a name="stddevPopInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.stddevPopInput"></a>

```typescript
public readonly stddevPopInput: IResolvable | FeatureEngineeringFeatureFunctionAggregationFunctionStddevPop;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPop">FeatureEngineeringFeatureFunctionAggregationFunctionStddevPop</a>

---

##### `stddevSampInput`<sup>Optional</sup> <a name="stddevSampInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.stddevSampInput"></a>

```typescript
public readonly stddevSampInput: IResolvable | FeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp">FeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp</a>

---

##### `sumInput`<sup>Optional</sup> <a name="sumInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.sumInput"></a>

```typescript
public readonly sumInput: IResolvable | FeatureEngineeringFeatureFunctionAggregationFunctionSum;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSum">FeatureEngineeringFeatureFunctionAggregationFunctionSum</a>

---

##### `timeWindowInput`<sup>Optional</sup> <a name="timeWindowInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.timeWindowInput"></a>

```typescript
public readonly timeWindowInput: IResolvable | FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow">FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow</a>

---

##### `varPopInput`<sup>Optional</sup> <a name="varPopInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.varPopInput"></a>

```typescript
public readonly varPopInput: IResolvable | FeatureEngineeringFeatureFunctionAggregationFunctionVarPop;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPop">FeatureEngineeringFeatureFunctionAggregationFunctionVarPop</a>

---

##### `varSampInput`<sup>Optional</sup> <a name="varSampInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.varSampInput"></a>

```typescript
public readonly varSampInput: IResolvable | FeatureEngineeringFeatureFunctionAggregationFunctionVarSamp;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSamp">FeatureEngineeringFeatureFunctionAggregationFunctionVarSamp</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureFunctionAggregationFunction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunction">FeatureEngineeringFeatureFunctionAggregationFunction</a>

---


### FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference <a name="FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.property.inputInput">inputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.property.input">input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPop">FeatureEngineeringFeatureFunctionAggregationFunctionStddevPop</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.property.inputInput"></a>

```typescript
public readonly inputInput: string;
```

- *Type:* string

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureFunctionAggregationFunctionStddevPop;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevPop">FeatureEngineeringFeatureFunctionAggregationFunctionStddevPop</a>

---


### FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference <a name="FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.property.inputInput">inputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.property.input">input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp">FeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.property.inputInput"></a>

```typescript
public readonly inputInput: string;
```

- *Type:* string

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp">FeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp</a>

---


### FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference <a name="FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.property.inputInput">inputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.property.input">input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSum">FeatureEngineeringFeatureFunctionAggregationFunctionSum</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.property.inputInput"></a>

```typescript
public readonly inputInput: string;
```

- *Type:* string

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureFunctionAggregationFunctionSum;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionSum">FeatureEngineeringFeatureFunctionAggregationFunctionSum</a>

---


### FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference <a name="FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.resetOffset">resetOffset</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOffset` <a name="resetOffset" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.resetOffset"></a>

```typescript
public resetOffset(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.property.offsetInput">offsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.property.windowDurationInput">windowDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.property.offset">offset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.property.windowDuration">windowDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous">FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `offsetInput`<sup>Optional</sup> <a name="offsetInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.property.offsetInput"></a>

```typescript
public readonly offsetInput: string;
```

- *Type:* string

---

##### `windowDurationInput`<sup>Optional</sup> <a name="windowDurationInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.property.windowDurationInput"></a>

```typescript
public readonly windowDurationInput: string;
```

- *Type:* string

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.property.offset"></a>

```typescript
public readonly offset: string;
```

- *Type:* string

---

##### `windowDuration`<sup>Required</sup> <a name="windowDuration" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.property.windowDuration"></a>

```typescript
public readonly windowDuration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous">FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous</a>

---


### FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference <a name="FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.putContinuous">putContinuous</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.putSliding">putSliding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.putTumbling">putTumbling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.resetContinuous">resetContinuous</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.resetSliding">resetSliding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.resetTumbling">resetTumbling</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContinuous` <a name="putContinuous" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.putContinuous"></a>

```typescript
public putContinuous(value: FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.putContinuous.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous">FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous</a>

---

##### `putSliding` <a name="putSliding" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.putSliding"></a>

```typescript
public putSliding(value: FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.putSliding.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding">FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding</a>

---

##### `putTumbling` <a name="putTumbling" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.putTumbling"></a>

```typescript
public putTumbling(value: FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.putTumbling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling">FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling</a>

---

##### `resetContinuous` <a name="resetContinuous" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.resetContinuous"></a>

```typescript
public resetContinuous(): void
```

##### `resetSliding` <a name="resetSliding" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.resetSliding"></a>

```typescript
public resetSliding(): void
```

##### `resetTumbling` <a name="resetTumbling" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.resetTumbling"></a>

```typescript
public resetTumbling(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.property.continuous">continuous</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference">FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.property.sliding">sliding</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference">FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.property.tumbling">tumbling</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference">FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.property.continuousInput">continuousInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous">FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.property.slidingInput">slidingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding">FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.property.tumblingInput">tumblingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling">FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow">FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `continuous`<sup>Required</sup> <a name="continuous" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.property.continuous"></a>

```typescript
public readonly continuous: FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference">FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference</a>

---

##### `sliding`<sup>Required</sup> <a name="sliding" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.property.sliding"></a>

```typescript
public readonly sliding: FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference">FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference</a>

---

##### `tumbling`<sup>Required</sup> <a name="tumbling" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.property.tumbling"></a>

```typescript
public readonly tumbling: FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference">FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference</a>

---

##### `continuousInput`<sup>Optional</sup> <a name="continuousInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.property.continuousInput"></a>

```typescript
public readonly continuousInput: IResolvable | FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous">FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous</a>

---

##### `slidingInput`<sup>Optional</sup> <a name="slidingInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.property.slidingInput"></a>

```typescript
public readonly slidingInput: IResolvable | FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding">FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding</a>

---

##### `tumblingInput`<sup>Optional</sup> <a name="tumblingInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.property.tumblingInput"></a>

```typescript
public readonly tumblingInput: IResolvable | FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling">FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow">FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow</a>

---


### FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference <a name="FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.property.slideDurationInput">slideDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.property.windowDurationInput">windowDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.property.slideDuration">slideDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.property.windowDuration">windowDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding">FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `slideDurationInput`<sup>Optional</sup> <a name="slideDurationInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.property.slideDurationInput"></a>

```typescript
public readonly slideDurationInput: string;
```

- *Type:* string

---

##### `windowDurationInput`<sup>Optional</sup> <a name="windowDurationInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.property.windowDurationInput"></a>

```typescript
public readonly windowDurationInput: string;
```

- *Type:* string

---

##### `slideDuration`<sup>Required</sup> <a name="slideDuration" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.property.slideDuration"></a>

```typescript
public readonly slideDuration: string;
```

- *Type:* string

---

##### `windowDuration`<sup>Required</sup> <a name="windowDuration" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.property.windowDuration"></a>

```typescript
public readonly windowDuration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding">FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding</a>

---


### FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference <a name="FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.property.windowDurationInput">windowDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.property.windowDuration">windowDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling">FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `windowDurationInput`<sup>Optional</sup> <a name="windowDurationInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.property.windowDurationInput"></a>

```typescript
public readonly windowDurationInput: string;
```

- *Type:* string

---

##### `windowDuration`<sup>Required</sup> <a name="windowDuration" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.property.windowDuration"></a>

```typescript
public readonly windowDuration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling">FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling</a>

---


### FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference <a name="FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.property.inputInput">inputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.property.input">input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPop">FeatureEngineeringFeatureFunctionAggregationFunctionVarPop</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.property.inputInput"></a>

```typescript
public readonly inputInput: string;
```

- *Type:* string

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureFunctionAggregationFunctionVarPop;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarPop">FeatureEngineeringFeatureFunctionAggregationFunctionVarPop</a>

---


### FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference <a name="FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.property.inputInput">inputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.property.input">input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSamp">FeatureEngineeringFeatureFunctionAggregationFunctionVarSamp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.property.inputInput"></a>

```typescript
public readonly inputInput: string;
```

- *Type:* string

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureFunctionAggregationFunctionVarSamp;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionVarSamp">FeatureEngineeringFeatureFunctionAggregationFunctionVarSamp</a>

---


### FeatureEngineeringFeatureFunctionColumnSelectionOutputReference <a name="FeatureEngineeringFeatureFunctionColumnSelectionOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.property.columnInput">columnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.property.column">column</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelection">FeatureEngineeringFeatureFunctionColumnSelection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.property.columnInput"></a>

```typescript
public readonly columnInput: string;
```

- *Type:* string

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.property.column"></a>

```typescript
public readonly column: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureFunctionColumnSelection;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelection">FeatureEngineeringFeatureFunctionColumnSelection</a>

---


### FeatureEngineeringFeatureFunctionExtraParametersList <a name="FeatureEngineeringFeatureFunctionExtraParametersList" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.get"></a>

```typescript
public get(index: number): FeatureEngineeringFeatureFunctionExtraParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters">FeatureEngineeringFeatureFunctionExtraParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureFunctionExtraParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters">FeatureEngineeringFeatureFunctionExtraParameters</a>[]

---


### FeatureEngineeringFeatureFunctionExtraParametersOutputReference <a name="FeatureEngineeringFeatureFunctionExtraParametersOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters">FeatureEngineeringFeatureFunctionExtraParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureFunctionExtraParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters">FeatureEngineeringFeatureFunctionExtraParameters</a>

---


### FeatureEngineeringFeatureFunctionOutputReference <a name="FeatureEngineeringFeatureFunctionOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.putAggregationFunction">putAggregationFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.putColumnSelection">putColumnSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.putExtraParameters">putExtraParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.resetAggregationFunction">resetAggregationFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.resetColumnSelection">resetColumnSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.resetExtraParameters">resetExtraParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.resetFunctionType">resetFunctionType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAggregationFunction` <a name="putAggregationFunction" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.putAggregationFunction"></a>

```typescript
public putAggregationFunction(value: FeatureEngineeringFeatureFunctionAggregationFunction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.putAggregationFunction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunction">FeatureEngineeringFeatureFunctionAggregationFunction</a>

---

##### `putColumnSelection` <a name="putColumnSelection" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.putColumnSelection"></a>

```typescript
public putColumnSelection(value: FeatureEngineeringFeatureFunctionColumnSelection): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.putColumnSelection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelection">FeatureEngineeringFeatureFunctionColumnSelection</a>

---

##### `putExtraParameters` <a name="putExtraParameters" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.putExtraParameters"></a>

```typescript
public putExtraParameters(value: IResolvable | FeatureEngineeringFeatureFunctionExtraParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.putExtraParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters">FeatureEngineeringFeatureFunctionExtraParameters</a>[]

---

##### `resetAggregationFunction` <a name="resetAggregationFunction" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.resetAggregationFunction"></a>

```typescript
public resetAggregationFunction(): void
```

##### `resetColumnSelection` <a name="resetColumnSelection" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.resetColumnSelection"></a>

```typescript
public resetColumnSelection(): void
```

##### `resetExtraParameters` <a name="resetExtraParameters" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.resetExtraParameters"></a>

```typescript
public resetExtraParameters(): void
```

##### `resetFunctionType` <a name="resetFunctionType" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.resetFunctionType"></a>

```typescript
public resetFunctionType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.aggregationFunction">aggregationFunction</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference">FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.columnSelection">columnSelection</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference">FeatureEngineeringFeatureFunctionColumnSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.extraParameters">extraParameters</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList">FeatureEngineeringFeatureFunctionExtraParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.aggregationFunctionInput">aggregationFunctionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunction">FeatureEngineeringFeatureFunctionAggregationFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.columnSelectionInput">columnSelectionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelection">FeatureEngineeringFeatureFunctionColumnSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.extraParametersInput">extraParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters">FeatureEngineeringFeatureFunctionExtraParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.functionTypeInput">functionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.functionType">functionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction">FeatureEngineeringFeatureFunction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregationFunction`<sup>Required</sup> <a name="aggregationFunction" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.aggregationFunction"></a>

```typescript
public readonly aggregationFunction: FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference">FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference</a>

---

##### `columnSelection`<sup>Required</sup> <a name="columnSelection" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.columnSelection"></a>

```typescript
public readonly columnSelection: FeatureEngineeringFeatureFunctionColumnSelectionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelectionOutputReference">FeatureEngineeringFeatureFunctionColumnSelectionOutputReference</a>

---

##### `extraParameters`<sup>Required</sup> <a name="extraParameters" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.extraParameters"></a>

```typescript
public readonly extraParameters: FeatureEngineeringFeatureFunctionExtraParametersList;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList">FeatureEngineeringFeatureFunctionExtraParametersList</a>

---

##### `aggregationFunctionInput`<sup>Optional</sup> <a name="aggregationFunctionInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.aggregationFunctionInput"></a>

```typescript
public readonly aggregationFunctionInput: IResolvable | FeatureEngineeringFeatureFunctionAggregationFunction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionAggregationFunction">FeatureEngineeringFeatureFunctionAggregationFunction</a>

---

##### `columnSelectionInput`<sup>Optional</sup> <a name="columnSelectionInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.columnSelectionInput"></a>

```typescript
public readonly columnSelectionInput: IResolvable | FeatureEngineeringFeatureFunctionColumnSelection;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionColumnSelection">FeatureEngineeringFeatureFunctionColumnSelection</a>

---

##### `extraParametersInput`<sup>Optional</sup> <a name="extraParametersInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.extraParametersInput"></a>

```typescript
public readonly extraParametersInput: IResolvable | FeatureEngineeringFeatureFunctionExtraParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters">FeatureEngineeringFeatureFunctionExtraParameters</a>[]

---

##### `functionTypeInput`<sup>Optional</sup> <a name="functionTypeInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.functionTypeInput"></a>

```typescript
public readonly functionTypeInput: string;
```

- *Type:* string

---

##### `functionType`<sup>Required</sup> <a name="functionType" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.functionType"></a>

```typescript
public readonly functionType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureFunction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction">FeatureEngineeringFeatureFunction</a>

---


### FeatureEngineeringFeatureLineageContextJobContextOutputReference <a name="FeatureEngineeringFeatureLineageContextJobContextOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.resetJobId">resetJobId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.resetJobRunId">resetJobRunId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetJobId` <a name="resetJobId" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.resetJobId"></a>

```typescript
public resetJobId(): void
```

##### `resetJobRunId` <a name="resetJobRunId" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.resetJobRunId"></a>

```typescript
public resetJobRunId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.property.jobIdInput">jobIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.property.jobRunIdInput">jobRunIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.property.jobId">jobId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.property.jobRunId">jobRunId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContext">FeatureEngineeringFeatureLineageContextJobContext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jobIdInput`<sup>Optional</sup> <a name="jobIdInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.property.jobIdInput"></a>

```typescript
public readonly jobIdInput: number;
```

- *Type:* number

---

##### `jobRunIdInput`<sup>Optional</sup> <a name="jobRunIdInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.property.jobRunIdInput"></a>

```typescript
public readonly jobRunIdInput: number;
```

- *Type:* number

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.property.jobId"></a>

```typescript
public readonly jobId: number;
```

- *Type:* number

---

##### `jobRunId`<sup>Required</sup> <a name="jobRunId" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.property.jobRunId"></a>

```typescript
public readonly jobRunId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureLineageContextJobContext;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContext">FeatureEngineeringFeatureLineageContextJobContext</a>

---


### FeatureEngineeringFeatureLineageContextOutputReference <a name="FeatureEngineeringFeatureLineageContextOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.putJobContext">putJobContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.resetJobContext">resetJobContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.resetNotebookId">resetNotebookId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putJobContext` <a name="putJobContext" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.putJobContext"></a>

```typescript
public putJobContext(value: FeatureEngineeringFeatureLineageContextJobContext): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.putJobContext.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContext">FeatureEngineeringFeatureLineageContextJobContext</a>

---

##### `resetJobContext` <a name="resetJobContext" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.resetJobContext"></a>

```typescript
public resetJobContext(): void
```

##### `resetNotebookId` <a name="resetNotebookId" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.resetNotebookId"></a>

```typescript
public resetNotebookId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.property.jobContext">jobContext</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference">FeatureEngineeringFeatureLineageContextJobContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.property.jobContextInput">jobContextInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContext">FeatureEngineeringFeatureLineageContextJobContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.property.notebookIdInput">notebookIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.property.notebookId">notebookId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContext">FeatureEngineeringFeatureLineageContext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jobContext`<sup>Required</sup> <a name="jobContext" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.property.jobContext"></a>

```typescript
public readonly jobContext: FeatureEngineeringFeatureLineageContextJobContextOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference">FeatureEngineeringFeatureLineageContextJobContextOutputReference</a>

---

##### `jobContextInput`<sup>Optional</sup> <a name="jobContextInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.property.jobContextInput"></a>

```typescript
public readonly jobContextInput: IResolvable | FeatureEngineeringFeatureLineageContextJobContext;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContext">FeatureEngineeringFeatureLineageContextJobContext</a>

---

##### `notebookIdInput`<sup>Optional</sup> <a name="notebookIdInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.property.notebookIdInput"></a>

```typescript
public readonly notebookIdInput: number;
```

- *Type:* number

---

##### `notebookId`<sup>Required</sup> <a name="notebookId" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.property.notebookId"></a>

```typescript
public readonly notebookId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureLineageContext;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContext">FeatureEngineeringFeatureLineageContext</a>

---


### FeatureEngineeringFeatureProviderConfigOutputReference <a name="FeatureEngineeringFeatureProviderConfigOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfig">FeatureEngineeringFeatureProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfig">FeatureEngineeringFeatureProviderConfig</a>

---


### FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference <a name="FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.resetDataframeSchema">resetDataframeSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.resetEntityColumns">resetEntityColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.resetFilterCondition">resetFilterCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.resetTimeseriesColumn">resetTimeseriesColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.resetTransformationSql">resetTransformationSql</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataframeSchema` <a name="resetDataframeSchema" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.resetDataframeSchema"></a>

```typescript
public resetDataframeSchema(): void
```

##### `resetEntityColumns` <a name="resetEntityColumns" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.resetEntityColumns"></a>

```typescript
public resetEntityColumns(): void
```

##### `resetFilterCondition` <a name="resetFilterCondition" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.resetFilterCondition"></a>

```typescript
public resetFilterCondition(): void
```

##### `resetTimeseriesColumn` <a name="resetTimeseriesColumn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.resetTimeseriesColumn"></a>

```typescript
public resetTimeseriesColumn(): void
```

##### `resetTransformationSql` <a name="resetTransformationSql" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.resetTransformationSql"></a>

```typescript
public resetTransformationSql(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.dataframeSchemaInput">dataframeSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.entityColumnsInput">entityColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.filterConditionInput">filterConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.fullNameInput">fullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.timeseriesColumnInput">timeseriesColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.transformationSqlInput">transformationSqlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.dataframeSchema">dataframeSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.entityColumns">entityColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.filterCondition">filterCondition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.fullName">fullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.timeseriesColumn">timeseriesColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.transformationSql">transformationSql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource">FeatureEngineeringFeatureSourceDeltaTableSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataframeSchemaInput`<sup>Optional</sup> <a name="dataframeSchemaInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.dataframeSchemaInput"></a>

```typescript
public readonly dataframeSchemaInput: string;
```

- *Type:* string

---

##### `entityColumnsInput`<sup>Optional</sup> <a name="entityColumnsInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.entityColumnsInput"></a>

```typescript
public readonly entityColumnsInput: string[];
```

- *Type:* string[]

---

##### `filterConditionInput`<sup>Optional</sup> <a name="filterConditionInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.filterConditionInput"></a>

```typescript
public readonly filterConditionInput: string;
```

- *Type:* string

---

##### `fullNameInput`<sup>Optional</sup> <a name="fullNameInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.fullNameInput"></a>

```typescript
public readonly fullNameInput: string;
```

- *Type:* string

---

##### `timeseriesColumnInput`<sup>Optional</sup> <a name="timeseriesColumnInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.timeseriesColumnInput"></a>

```typescript
public readonly timeseriesColumnInput: string;
```

- *Type:* string

---

##### `transformationSqlInput`<sup>Optional</sup> <a name="transformationSqlInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.transformationSqlInput"></a>

```typescript
public readonly transformationSqlInput: string;
```

- *Type:* string

---

##### `dataframeSchema`<sup>Required</sup> <a name="dataframeSchema" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.dataframeSchema"></a>

```typescript
public readonly dataframeSchema: string;
```

- *Type:* string

---

##### `entityColumns`<sup>Required</sup> <a name="entityColumns" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.entityColumns"></a>

```typescript
public readonly entityColumns: string[];
```

- *Type:* string[]

---

##### `filterCondition`<sup>Required</sup> <a name="filterCondition" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.filterCondition"></a>

```typescript
public readonly filterCondition: string;
```

- *Type:* string

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

---

##### `timeseriesColumn`<sup>Required</sup> <a name="timeseriesColumn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.timeseriesColumn"></a>

```typescript
public readonly timeseriesColumn: string;
```

- *Type:* string

---

##### `transformationSql`<sup>Required</sup> <a name="transformationSql" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.transformationSql"></a>

```typescript
public readonly transformationSql: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureSourceDeltaTableSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource">FeatureEngineeringFeatureSourceDeltaTableSource</a>

---


### FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList <a name="FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.get"></a>

```typescript
public get(index: number): FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers">FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers">FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers</a>[]

---


### FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference <a name="FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.property.variantExprPathInput">variantExprPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.property.variantExprPath">variantExprPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers">FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `variantExprPathInput`<sup>Optional</sup> <a name="variantExprPathInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.property.variantExprPathInput"></a>

```typescript
public readonly variantExprPathInput: string;
```

- *Type:* string

---

##### `variantExprPath`<sup>Required</sup> <a name="variantExprPath" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.property.variantExprPath"></a>

```typescript
public readonly variantExprPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers">FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers</a>

---


### FeatureEngineeringFeatureSourceKafkaSourceOutputReference <a name="FeatureEngineeringFeatureSourceKafkaSourceOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.putEntityColumnIdentifiers">putEntityColumnIdentifiers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.putTimeseriesColumnIdentifier">putTimeseriesColumnIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.resetEntityColumnIdentifiers">resetEntityColumnIdentifiers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.resetFilterCondition">resetFilterCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.resetTimeseriesColumnIdentifier">resetTimeseriesColumnIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEntityColumnIdentifiers` <a name="putEntityColumnIdentifiers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.putEntityColumnIdentifiers"></a>

```typescript
public putEntityColumnIdentifiers(value: IResolvable | FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.putEntityColumnIdentifiers.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers">FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers</a>[]

---

##### `putTimeseriesColumnIdentifier` <a name="putTimeseriesColumnIdentifier" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.putTimeseriesColumnIdentifier"></a>

```typescript
public putTimeseriesColumnIdentifier(value: FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.putTimeseriesColumnIdentifier.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier">FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier</a>

---

##### `resetEntityColumnIdentifiers` <a name="resetEntityColumnIdentifiers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.resetEntityColumnIdentifiers"></a>

```typescript
public resetEntityColumnIdentifiers(): void
```

##### `resetFilterCondition` <a name="resetFilterCondition" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.resetFilterCondition"></a>

```typescript
public resetFilterCondition(): void
```

##### `resetTimeseriesColumnIdentifier` <a name="resetTimeseriesColumnIdentifier" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.resetTimeseriesColumnIdentifier"></a>

```typescript
public resetTimeseriesColumnIdentifier(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.entityColumnIdentifiers">entityColumnIdentifiers</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList">FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.timeseriesColumnIdentifier">timeseriesColumnIdentifier</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference">FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.entityColumnIdentifiersInput">entityColumnIdentifiersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers">FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.filterConditionInput">filterConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.timeseriesColumnIdentifierInput">timeseriesColumnIdentifierInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier">FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.filterCondition">filterCondition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSource">FeatureEngineeringFeatureSourceKafkaSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entityColumnIdentifiers`<sup>Required</sup> <a name="entityColumnIdentifiers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.entityColumnIdentifiers"></a>

```typescript
public readonly entityColumnIdentifiers: FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList">FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList</a>

---

##### `timeseriesColumnIdentifier`<sup>Required</sup> <a name="timeseriesColumnIdentifier" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.timeseriesColumnIdentifier"></a>

```typescript
public readonly timeseriesColumnIdentifier: FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference">FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference</a>

---

##### `entityColumnIdentifiersInput`<sup>Optional</sup> <a name="entityColumnIdentifiersInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.entityColumnIdentifiersInput"></a>

```typescript
public readonly entityColumnIdentifiersInput: IResolvable | FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers">FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers</a>[]

---

##### `filterConditionInput`<sup>Optional</sup> <a name="filterConditionInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.filterConditionInput"></a>

```typescript
public readonly filterConditionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeseriesColumnIdentifierInput`<sup>Optional</sup> <a name="timeseriesColumnIdentifierInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.timeseriesColumnIdentifierInput"></a>

```typescript
public readonly timeseriesColumnIdentifierInput: IResolvable | FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier">FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier</a>

---

##### `filterCondition`<sup>Required</sup> <a name="filterCondition" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.filterCondition"></a>

```typescript
public readonly filterCondition: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureSourceKafkaSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSource">FeatureEngineeringFeatureSourceKafkaSource</a>

---


### FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference <a name="FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.property.variantExprPathInput">variantExprPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.property.variantExprPath">variantExprPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier">FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `variantExprPathInput`<sup>Optional</sup> <a name="variantExprPathInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.property.variantExprPathInput"></a>

```typescript
public readonly variantExprPathInput: string;
```

- *Type:* string

---

##### `variantExprPath`<sup>Required</sup> <a name="variantExprPath" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.property.variantExprPath"></a>

```typescript
public readonly variantExprPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier">FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier</a>

---


### FeatureEngineeringFeatureSourceOutputReference <a name="FeatureEngineeringFeatureSourceOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.putDeltaTableSource">putDeltaTableSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.putKafkaSource">putKafkaSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.putRequestSource">putRequestSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.resetDeltaTableSource">resetDeltaTableSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.resetKafkaSource">resetKafkaSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.resetRequestSource">resetRequestSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeltaTableSource` <a name="putDeltaTableSource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.putDeltaTableSource"></a>

```typescript
public putDeltaTableSource(value: FeatureEngineeringFeatureSourceDeltaTableSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.putDeltaTableSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource">FeatureEngineeringFeatureSourceDeltaTableSource</a>

---

##### `putKafkaSource` <a name="putKafkaSource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.putKafkaSource"></a>

```typescript
public putKafkaSource(value: FeatureEngineeringFeatureSourceKafkaSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.putKafkaSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSource">FeatureEngineeringFeatureSourceKafkaSource</a>

---

##### `putRequestSource` <a name="putRequestSource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.putRequestSource"></a>

```typescript
public putRequestSource(value: FeatureEngineeringFeatureSourceRequestSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.putRequestSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSource">FeatureEngineeringFeatureSourceRequestSource</a>

---

##### `resetDeltaTableSource` <a name="resetDeltaTableSource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.resetDeltaTableSource"></a>

```typescript
public resetDeltaTableSource(): void
```

##### `resetKafkaSource` <a name="resetKafkaSource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.resetKafkaSource"></a>

```typescript
public resetKafkaSource(): void
```

##### `resetRequestSource` <a name="resetRequestSource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.resetRequestSource"></a>

```typescript
public resetRequestSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.deltaTableSource">deltaTableSource</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference">FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.kafkaSource">kafkaSource</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference">FeatureEngineeringFeatureSourceKafkaSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.requestSource">requestSource</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference">FeatureEngineeringFeatureSourceRequestSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.deltaTableSourceInput">deltaTableSourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource">FeatureEngineeringFeatureSourceDeltaTableSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.kafkaSourceInput">kafkaSourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSource">FeatureEngineeringFeatureSourceKafkaSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.requestSourceInput">requestSourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSource">FeatureEngineeringFeatureSourceRequestSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource">FeatureEngineeringFeatureSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deltaTableSource`<sup>Required</sup> <a name="deltaTableSource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.deltaTableSource"></a>

```typescript
public readonly deltaTableSource: FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference">FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference</a>

---

##### `kafkaSource`<sup>Required</sup> <a name="kafkaSource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.kafkaSource"></a>

```typescript
public readonly kafkaSource: FeatureEngineeringFeatureSourceKafkaSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference">FeatureEngineeringFeatureSourceKafkaSourceOutputReference</a>

---

##### `requestSource`<sup>Required</sup> <a name="requestSource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.requestSource"></a>

```typescript
public readonly requestSource: FeatureEngineeringFeatureSourceRequestSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference">FeatureEngineeringFeatureSourceRequestSourceOutputReference</a>

---

##### `deltaTableSourceInput`<sup>Optional</sup> <a name="deltaTableSourceInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.deltaTableSourceInput"></a>

```typescript
public readonly deltaTableSourceInput: IResolvable | FeatureEngineeringFeatureSourceDeltaTableSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource">FeatureEngineeringFeatureSourceDeltaTableSource</a>

---

##### `kafkaSourceInput`<sup>Optional</sup> <a name="kafkaSourceInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.kafkaSourceInput"></a>

```typescript
public readonly kafkaSourceInput: IResolvable | FeatureEngineeringFeatureSourceKafkaSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSource">FeatureEngineeringFeatureSourceKafkaSource</a>

---

##### `requestSourceInput`<sup>Optional</sup> <a name="requestSourceInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.requestSourceInput"></a>

```typescript
public readonly requestSourceInput: IResolvable | FeatureEngineeringFeatureSourceRequestSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSource">FeatureEngineeringFeatureSourceRequestSource</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource">FeatureEngineeringFeatureSource</a>

---


### FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList <a name="FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.get"></a>

```typescript
public get(index: number): FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields">FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields">FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields</a>[]

---


### FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference <a name="FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.property.dataTypeInput">dataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields">FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataTypeInput`<sup>Optional</sup> <a name="dataTypeInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.property.dataTypeInput"></a>

```typescript
public readonly dataTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields">FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields</a>

---


### FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference <a name="FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.putFields">putFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFields` <a name="putFields" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.putFields"></a>

```typescript
public putFields(value: IResolvable | FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.putFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields">FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList">FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.property.fieldsInput">fieldsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields">FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchema">FeatureEngineeringFeatureSourceRequestSourceFlatSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.property.fields"></a>

```typescript
public readonly fields: FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList">FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList</a>

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.property.fieldsInput"></a>

```typescript
public readonly fieldsInput: IResolvable | FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields">FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureSourceRequestSourceFlatSchema;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchema">FeatureEngineeringFeatureSourceRequestSourceFlatSchema</a>

---


### FeatureEngineeringFeatureSourceRequestSourceOutputReference <a name="FeatureEngineeringFeatureSourceRequestSourceOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.putFlatSchema">putFlatSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.resetFlatSchema">resetFlatSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFlatSchema` <a name="putFlatSchema" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.putFlatSchema"></a>

```typescript
public putFlatSchema(value: FeatureEngineeringFeatureSourceRequestSourceFlatSchema): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.putFlatSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchema">FeatureEngineeringFeatureSourceRequestSourceFlatSchema</a>

---

##### `resetFlatSchema` <a name="resetFlatSchema" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.resetFlatSchema"></a>

```typescript
public resetFlatSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.property.flatSchema">flatSchema</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference">FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.property.flatSchemaInput">flatSchemaInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchema">FeatureEngineeringFeatureSourceRequestSourceFlatSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSource">FeatureEngineeringFeatureSourceRequestSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `flatSchema`<sup>Required</sup> <a name="flatSchema" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.property.flatSchema"></a>

```typescript
public readonly flatSchema: FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference">FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference</a>

---

##### `flatSchemaInput`<sup>Optional</sup> <a name="flatSchemaInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.property.flatSchemaInput"></a>

```typescript
public readonly flatSchemaInput: IResolvable | FeatureEngineeringFeatureSourceRequestSourceFlatSchema;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceFlatSchema">FeatureEngineeringFeatureSourceRequestSourceFlatSchema</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureSourceRequestSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceRequestSource">FeatureEngineeringFeatureSourceRequestSource</a>

---


### FeatureEngineeringFeatureTimeseriesColumnOutputReference <a name="FeatureEngineeringFeatureTimeseriesColumnOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumn">FeatureEngineeringFeatureTimeseriesColumn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureTimeseriesColumn;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeseriesColumn">FeatureEngineeringFeatureTimeseriesColumn</a>

---


### FeatureEngineeringFeatureTimeWindowContinuousOutputReference <a name="FeatureEngineeringFeatureTimeWindowContinuousOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.resetOffset">resetOffset</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOffset` <a name="resetOffset" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.resetOffset"></a>

```typescript
public resetOffset(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.offsetInput">offsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.windowDurationInput">windowDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.offset">offset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.windowDuration">windowDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuous">FeatureEngineeringFeatureTimeWindowContinuous</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `offsetInput`<sup>Optional</sup> <a name="offsetInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.offsetInput"></a>

```typescript
public readonly offsetInput: string;
```

- *Type:* string

---

##### `windowDurationInput`<sup>Optional</sup> <a name="windowDurationInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.windowDurationInput"></a>

```typescript
public readonly windowDurationInput: string;
```

- *Type:* string

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.offset"></a>

```typescript
public readonly offset: string;
```

- *Type:* string

---

##### `windowDuration`<sup>Required</sup> <a name="windowDuration" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.windowDuration"></a>

```typescript
public readonly windowDuration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureTimeWindowContinuous;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuous">FeatureEngineeringFeatureTimeWindowContinuous</a>

---


### FeatureEngineeringFeatureTimeWindowOutputReference <a name="FeatureEngineeringFeatureTimeWindowOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.putContinuous">putContinuous</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.putSliding">putSliding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.putTumbling">putTumbling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.resetContinuous">resetContinuous</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.resetSliding">resetSliding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.resetTumbling">resetTumbling</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContinuous` <a name="putContinuous" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.putContinuous"></a>

```typescript
public putContinuous(value: FeatureEngineeringFeatureTimeWindowContinuous): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.putContinuous.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuous">FeatureEngineeringFeatureTimeWindowContinuous</a>

---

##### `putSliding` <a name="putSliding" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.putSliding"></a>

```typescript
public putSliding(value: FeatureEngineeringFeatureTimeWindowSliding): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.putSliding.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSliding">FeatureEngineeringFeatureTimeWindowSliding</a>

---

##### `putTumbling` <a name="putTumbling" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.putTumbling"></a>

```typescript
public putTumbling(value: FeatureEngineeringFeatureTimeWindowTumbling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.putTumbling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumbling">FeatureEngineeringFeatureTimeWindowTumbling</a>

---

##### `resetContinuous` <a name="resetContinuous" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.resetContinuous"></a>

```typescript
public resetContinuous(): void
```

##### `resetSliding` <a name="resetSliding" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.resetSliding"></a>

```typescript
public resetSliding(): void
```

##### `resetTumbling` <a name="resetTumbling" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.resetTumbling"></a>

```typescript
public resetTumbling(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.continuous">continuous</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference">FeatureEngineeringFeatureTimeWindowContinuousOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.sliding">sliding</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference">FeatureEngineeringFeatureTimeWindowSlidingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.tumbling">tumbling</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference">FeatureEngineeringFeatureTimeWindowTumblingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.continuousInput">continuousInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuous">FeatureEngineeringFeatureTimeWindowContinuous</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.slidingInput">slidingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSliding">FeatureEngineeringFeatureTimeWindowSliding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.tumblingInput">tumblingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumbling">FeatureEngineeringFeatureTimeWindowTumbling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow">FeatureEngineeringFeatureTimeWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `continuous`<sup>Required</sup> <a name="continuous" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.continuous"></a>

```typescript
public readonly continuous: FeatureEngineeringFeatureTimeWindowContinuousOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference">FeatureEngineeringFeatureTimeWindowContinuousOutputReference</a>

---

##### `sliding`<sup>Required</sup> <a name="sliding" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.sliding"></a>

```typescript
public readonly sliding: FeatureEngineeringFeatureTimeWindowSlidingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference">FeatureEngineeringFeatureTimeWindowSlidingOutputReference</a>

---

##### `tumbling`<sup>Required</sup> <a name="tumbling" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.tumbling"></a>

```typescript
public readonly tumbling: FeatureEngineeringFeatureTimeWindowTumblingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference">FeatureEngineeringFeatureTimeWindowTumblingOutputReference</a>

---

##### `continuousInput`<sup>Optional</sup> <a name="continuousInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.continuousInput"></a>

```typescript
public readonly continuousInput: IResolvable | FeatureEngineeringFeatureTimeWindowContinuous;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuous">FeatureEngineeringFeatureTimeWindowContinuous</a>

---

##### `slidingInput`<sup>Optional</sup> <a name="slidingInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.slidingInput"></a>

```typescript
public readonly slidingInput: IResolvable | FeatureEngineeringFeatureTimeWindowSliding;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSliding">FeatureEngineeringFeatureTimeWindowSliding</a>

---

##### `tumblingInput`<sup>Optional</sup> <a name="tumblingInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.tumblingInput"></a>

```typescript
public readonly tumblingInput: IResolvable | FeatureEngineeringFeatureTimeWindowTumbling;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumbling">FeatureEngineeringFeatureTimeWindowTumbling</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureTimeWindow;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow">FeatureEngineeringFeatureTimeWindow</a>

---


### FeatureEngineeringFeatureTimeWindowSlidingOutputReference <a name="FeatureEngineeringFeatureTimeWindowSlidingOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.slideDurationInput">slideDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.windowDurationInput">windowDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.slideDuration">slideDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.windowDuration">windowDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSliding">FeatureEngineeringFeatureTimeWindowSliding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `slideDurationInput`<sup>Optional</sup> <a name="slideDurationInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.slideDurationInput"></a>

```typescript
public readonly slideDurationInput: string;
```

- *Type:* string

---

##### `windowDurationInput`<sup>Optional</sup> <a name="windowDurationInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.windowDurationInput"></a>

```typescript
public readonly windowDurationInput: string;
```

- *Type:* string

---

##### `slideDuration`<sup>Required</sup> <a name="slideDuration" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.slideDuration"></a>

```typescript
public readonly slideDuration: string;
```

- *Type:* string

---

##### `windowDuration`<sup>Required</sup> <a name="windowDuration" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.windowDuration"></a>

```typescript
public readonly windowDuration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureTimeWindowSliding;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSliding">FeatureEngineeringFeatureTimeWindowSliding</a>

---


### FeatureEngineeringFeatureTimeWindowTumblingOutputReference <a name="FeatureEngineeringFeatureTimeWindowTumblingOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.property.windowDurationInput">windowDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.property.windowDuration">windowDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumbling">FeatureEngineeringFeatureTimeWindowTumbling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `windowDurationInput`<sup>Optional</sup> <a name="windowDurationInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.property.windowDurationInput"></a>

```typescript
public readonly windowDurationInput: string;
```

- *Type:* string

---

##### `windowDuration`<sup>Required</sup> <a name="windowDuration" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.property.windowDuration"></a>

```typescript
public readonly windowDuration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureTimeWindowTumbling;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumbling">FeatureEngineeringFeatureTimeWindowTumbling</a>

---



