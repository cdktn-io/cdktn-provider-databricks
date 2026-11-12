# `lakewatchDatasource` Submodule <a name="`lakewatchDatasource` Submodule" id="@cdktn/provider-databricks.lakewatchDatasource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakewatchDatasource <a name="LakewatchDatasource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource databricks_lakewatch_datasource}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer"></a>

```typescript
import { lakewatchDatasource } from '@cdktn/provider-databricks'

new lakewatchDatasource.LakewatchDatasource(scope: Construct, id: string, config: LakewatchDatasourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig">LakewatchDatasourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig">LakewatchDatasourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putAutoloader">putAutoloader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putExistingTable">putExistingTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putParsers">putParsers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putUnityCatalogConnection">putUnityCatalogConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetAutoloader">resetAutoloader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetComputeMode">resetComputeMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetExistingTable">resetExistingTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetParsers">resetParsers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetRunAsPrincipal">resetRunAsPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetUnityCatalogConnection">resetUnityCatalogConnection</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoloader` <a name="putAutoloader" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putAutoloader"></a>

```typescript
public putAutoloader(value: LakewatchDatasourceAutoloader): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putAutoloader.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader">LakewatchDatasourceAutoloader</a>

---

##### `putExistingTable` <a name="putExistingTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putExistingTable"></a>

```typescript
public putExistingTable(value: LakewatchDatasourceExistingTable): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putExistingTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable">LakewatchDatasourceExistingTable</a>

---

##### `putParsers` <a name="putParsers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putParsers"></a>

```typescript
public putParsers(value: IResolvable | LakewatchDatasourceParsers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putParsers.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers">LakewatchDatasourceParsers</a>[]

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putProviderConfig"></a>

```typescript
public putProviderConfig(value: LakewatchDatasourceProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig">LakewatchDatasourceProviderConfig</a>

---

##### `putSchedule` <a name="putSchedule" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putSchedule"></a>

```typescript
public putSchedule(value: LakewatchDatasourceSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule">LakewatchDatasourceSchedule</a>

---

##### `putUnityCatalogConnection` <a name="putUnityCatalogConnection" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putUnityCatalogConnection"></a>

```typescript
public putUnityCatalogConnection(value: LakewatchDatasourceUnityCatalogConnection): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putUnityCatalogConnection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection">LakewatchDatasourceUnityCatalogConnection</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetAutoloader` <a name="resetAutoloader" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetAutoloader"></a>

```typescript
public resetAutoloader(): void
```

##### `resetComputeMode` <a name="resetComputeMode" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetComputeMode"></a>

```typescript
public resetComputeMode(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExistingTable` <a name="resetExistingTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetExistingTable"></a>

```typescript
public resetExistingTable(): void
```

##### `resetParsers` <a name="resetParsers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetParsers"></a>

```typescript
public resetParsers(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

##### `resetRunAsPrincipal` <a name="resetRunAsPrincipal" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetRunAsPrincipal"></a>

```typescript
public resetRunAsPrincipal(): void
```

##### `resetUnityCatalogConnection` <a name="resetUnityCatalogConnection" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetUnityCatalogConnection"></a>

```typescript
public resetUnityCatalogConnection(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LakewatchDatasource resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.isConstruct"></a>

```typescript
import { lakewatchDatasource } from '@cdktn/provider-databricks'

lakewatchDatasource.LakewatchDatasource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.isTerraformElement"></a>

```typescript
import { lakewatchDatasource } from '@cdktn/provider-databricks'

lakewatchDatasource.LakewatchDatasource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.isTerraformResource"></a>

```typescript
import { lakewatchDatasource } from '@cdktn/provider-databricks'

lakewatchDatasource.LakewatchDatasource.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.generateConfigForImport"></a>

```typescript
import { lakewatchDatasource } from '@cdktn/provider-databricks'

lakewatchDatasource.LakewatchDatasource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LakewatchDatasource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LakewatchDatasource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LakewatchDatasource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LakewatchDatasource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.autoloader">autoloader</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference">LakewatchDatasourceAutoloaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.computeWorkspaceId">computeWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.createdBy">createdBy</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference">LakewatchDatasourceCreatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.datasourceId">datasourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.effectiveCatalogName">effectiveCatalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.effectiveDatasourceName">effectiveDatasourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.effectiveRunAsPrincipal">effectiveRunAsPrincipal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.effectiveSchemaName">effectiveSchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.existingTable">existingTable</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference">LakewatchDatasourceExistingTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.owner">owner</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference">LakewatchDatasourceOwnerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.parsers">parsers</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList">LakewatchDatasourceParsersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference">LakewatchDatasourceProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference">LakewatchDatasourceScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference">LakewatchDatasourceStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.unityCatalogConnection">unityCatalogConnection</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference">LakewatchDatasourceUnityCatalogConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.updatedBy">updatedBy</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference">LakewatchDatasourceUpdatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.autoloaderInput">autoloaderInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader">LakewatchDatasourceAutoloader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.catalogNameInput">catalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.computeModeInput">computeModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.datasourceNameInput">datasourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.existingTableInput">existingTableInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable">LakewatchDatasourceExistingTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.parsersInput">parsersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers">LakewatchDatasourceParsers</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig">LakewatchDatasourceProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.runAsPrincipalInput">runAsPrincipalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.scheduleInput">scheduleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule">LakewatchDatasourceSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.schemaNameInput">schemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.unityCatalogConnectionInput">unityCatalogConnectionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection">LakewatchDatasourceUnityCatalogConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.warehouseIdInput">warehouseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.catalogName">catalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.computeMode">computeMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.datasourceName">datasourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.runAsPrincipal">runAsPrincipal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.warehouseId">warehouseId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `autoloader`<sup>Required</sup> <a name="autoloader" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.autoloader"></a>

```typescript
public readonly autoloader: LakewatchDatasourceAutoloaderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference">LakewatchDatasourceAutoloaderOutputReference</a>

---

##### `computeWorkspaceId`<sup>Required</sup> <a name="computeWorkspaceId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.computeWorkspaceId"></a>

```typescript
public readonly computeWorkspaceId: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.createdBy"></a>

```typescript
public readonly createdBy: LakewatchDatasourceCreatedByOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference">LakewatchDatasourceCreatedByOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `datasourceId`<sup>Required</sup> <a name="datasourceId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.datasourceId"></a>

```typescript
public readonly datasourceId: string;
```

- *Type:* string

---

##### `effectiveCatalogName`<sup>Required</sup> <a name="effectiveCatalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.effectiveCatalogName"></a>

```typescript
public readonly effectiveCatalogName: string;
```

- *Type:* string

---

##### `effectiveDatasourceName`<sup>Required</sup> <a name="effectiveDatasourceName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.effectiveDatasourceName"></a>

```typescript
public readonly effectiveDatasourceName: string;
```

- *Type:* string

---

##### `effectiveRunAsPrincipal`<sup>Required</sup> <a name="effectiveRunAsPrincipal" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.effectiveRunAsPrincipal"></a>

```typescript
public readonly effectiveRunAsPrincipal: string;
```

- *Type:* string

---

##### `effectiveSchemaName`<sup>Required</sup> <a name="effectiveSchemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.effectiveSchemaName"></a>

```typescript
public readonly effectiveSchemaName: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `existingTable`<sup>Required</sup> <a name="existingTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.existingTable"></a>

```typescript
public readonly existingTable: LakewatchDatasourceExistingTableOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference">LakewatchDatasourceExistingTableOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.owner"></a>

```typescript
public readonly owner: LakewatchDatasourceOwnerOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference">LakewatchDatasourceOwnerOutputReference</a>

---

##### `parsers`<sup>Required</sup> <a name="parsers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.parsers"></a>

```typescript
public readonly parsers: LakewatchDatasourceParsersList;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList">LakewatchDatasourceParsersList</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.providerConfig"></a>

```typescript
public readonly providerConfig: LakewatchDatasourceProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference">LakewatchDatasourceProviderConfigOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.schedule"></a>

```typescript
public readonly schedule: LakewatchDatasourceScheduleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference">LakewatchDatasourceScheduleOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.status"></a>

```typescript
public readonly status: LakewatchDatasourceStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference">LakewatchDatasourceStatusOutputReference</a>

---

##### `unityCatalogConnection`<sup>Required</sup> <a name="unityCatalogConnection" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.unityCatalogConnection"></a>

```typescript
public readonly unityCatalogConnection: LakewatchDatasourceUnityCatalogConnectionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference">LakewatchDatasourceUnityCatalogConnectionOutputReference</a>

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.updatedBy"></a>

```typescript
public readonly updatedBy: LakewatchDatasourceUpdatedByOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference">LakewatchDatasourceUpdatedByOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `autoloaderInput`<sup>Optional</sup> <a name="autoloaderInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.autoloaderInput"></a>

```typescript
public readonly autoloaderInput: IResolvable | LakewatchDatasourceAutoloader;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader">LakewatchDatasourceAutoloader</a>

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.catalogNameInput"></a>

```typescript
public readonly catalogNameInput: string;
```

- *Type:* string

---

##### `computeModeInput`<sup>Optional</sup> <a name="computeModeInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.computeModeInput"></a>

```typescript
public readonly computeModeInput: string;
```

- *Type:* string

---

##### `datasourceNameInput`<sup>Optional</sup> <a name="datasourceNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.datasourceNameInput"></a>

```typescript
public readonly datasourceNameInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `existingTableInput`<sup>Optional</sup> <a name="existingTableInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.existingTableInput"></a>

```typescript
public readonly existingTableInput: IResolvable | LakewatchDatasourceExistingTable;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable">LakewatchDatasourceExistingTable</a>

---

##### `parsersInput`<sup>Optional</sup> <a name="parsersInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.parsersInput"></a>

```typescript
public readonly parsersInput: IResolvable | LakewatchDatasourceParsers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers">LakewatchDatasourceParsers</a>[]

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | LakewatchDatasourceProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig">LakewatchDatasourceProviderConfig</a>

---

##### `runAsPrincipalInput`<sup>Optional</sup> <a name="runAsPrincipalInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.runAsPrincipalInput"></a>

```typescript
public readonly runAsPrincipalInput: string;
```

- *Type:* string

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: IResolvable | LakewatchDatasourceSchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule">LakewatchDatasourceSchedule</a>

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string;
```

- *Type:* string

---

##### `unityCatalogConnectionInput`<sup>Optional</sup> <a name="unityCatalogConnectionInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.unityCatalogConnectionInput"></a>

```typescript
public readonly unityCatalogConnectionInput: IResolvable | LakewatchDatasourceUnityCatalogConnection;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection">LakewatchDatasourceUnityCatalogConnection</a>

---

##### `warehouseIdInput`<sup>Optional</sup> <a name="warehouseIdInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.warehouseIdInput"></a>

```typescript
public readonly warehouseIdInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

---

##### `computeMode`<sup>Required</sup> <a name="computeMode" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.computeMode"></a>

```typescript
public readonly computeMode: string;
```

- *Type:* string

---

##### `datasourceName`<sup>Required</sup> <a name="datasourceName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.datasourceName"></a>

```typescript
public readonly datasourceName: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `runAsPrincipal`<sup>Required</sup> <a name="runAsPrincipal" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.runAsPrincipal"></a>

```typescript
public readonly runAsPrincipal: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `warehouseId`<sup>Required</sup> <a name="warehouseId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.warehouseId"></a>

```typescript
public readonly warehouseId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LakewatchDatasourceAutoloader <a name="LakewatchDatasourceAutoloader" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.Initializer"></a>

```typescript
import { lakewatchDatasource } from '@cdktn/provider-databricks'

const lakewatchDatasourceAutoloader: lakewatchDatasource.LakewatchDatasourceAutoloader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.format">format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#format LakewatchDatasource#format}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#location LakewatchDatasource#location}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.rawTable">rawTable</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable">LakewatchDatasourceAutoloaderRawTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#raw_table LakewatchDatasource#raw_table}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.awsSecretScope">awsSecretScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#aws_secret_scope LakewatchDatasource#aws_secret_scope}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.envelope">envelope</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope">LakewatchDatasourceAutoloaderEnvelope</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#envelope LakewatchDatasource#envelope}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.formatOptions">formatOptions</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#format_options LakewatchDatasource#format_options}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.includeExistingFiles">includeExistingFiles</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#include_existing_files LakewatchDatasource#include_existing_files}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.overridePartitionColumns">overridePartitionColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#override_partition_columns LakewatchDatasource#override_partition_columns}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.queueUrl">queueUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#queue_url LakewatchDatasource#queue_url}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.serviceCredentials">serviceCredentials</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#service_credentials LakewatchDatasource#service_credentials}. |

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#format LakewatchDatasource#format}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#location LakewatchDatasource#location}.

---

##### `rawTable`<sup>Required</sup> <a name="rawTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.rawTable"></a>

```typescript
public readonly rawTable: LakewatchDatasourceAutoloaderRawTable;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable">LakewatchDatasourceAutoloaderRawTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#raw_table LakewatchDatasource#raw_table}.

---

##### `awsSecretScope`<sup>Optional</sup> <a name="awsSecretScope" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.awsSecretScope"></a>

```typescript
public readonly awsSecretScope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#aws_secret_scope LakewatchDatasource#aws_secret_scope}.

---

##### `envelope`<sup>Optional</sup> <a name="envelope" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.envelope"></a>

```typescript
public readonly envelope: LakewatchDatasourceAutoloaderEnvelope;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope">LakewatchDatasourceAutoloaderEnvelope</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#envelope LakewatchDatasource#envelope}.

---

##### `formatOptions`<sup>Optional</sup> <a name="formatOptions" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.formatOptions"></a>

```typescript
public readonly formatOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#format_options LakewatchDatasource#format_options}.

---

##### `includeExistingFiles`<sup>Optional</sup> <a name="includeExistingFiles" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.includeExistingFiles"></a>

```typescript
public readonly includeExistingFiles: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#include_existing_files LakewatchDatasource#include_existing_files}.

---

##### `overridePartitionColumns`<sup>Optional</sup> <a name="overridePartitionColumns" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.overridePartitionColumns"></a>

```typescript
public readonly overridePartitionColumns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#override_partition_columns LakewatchDatasource#override_partition_columns}.

---

##### `queueUrl`<sup>Optional</sup> <a name="queueUrl" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.queueUrl"></a>

```typescript
public readonly queueUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#queue_url LakewatchDatasource#queue_url}.

---

##### `serviceCredentials`<sup>Optional</sup> <a name="serviceCredentials" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.serviceCredentials"></a>

```typescript
public readonly serviceCredentials: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#service_credentials LakewatchDatasource#service_credentials}.

---

### LakewatchDatasourceAutoloaderEffectiveRawTable <a name="LakewatchDatasourceAutoloaderEffectiveRawTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTable.Initializer"></a>

```typescript
import { lakewatchDatasource } from '@cdktn/provider-databricks'

const lakewatchDatasourceAutoloaderEffectiveRawTable: lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTable.property.tableName">tableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#table_name LakewatchDatasource#table_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTable.property.catalogName">catalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTable.property.schemaName">schemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}. |

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTable.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#table_name LakewatchDatasource#table_name}.

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTable.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTable.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}.

---

### LakewatchDatasourceAutoloaderEnvelope <a name="LakewatchDatasourceAutoloaderEnvelope" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope.Initializer"></a>

```typescript
import { lakewatchDatasource } from '@cdktn/provider-databricks'

const lakewatchDatasourceAutoloaderEnvelope: lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope.property.cloudWatchLogs">cloudWatchLogs</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#cloud_watch_logs LakewatchDatasource#cloud_watch_logs}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope.property.jsonArray">jsonArray</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray">LakewatchDatasourceAutoloaderEnvelopeJsonArray</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#json_array LakewatchDatasource#json_array}. |

---

##### `cloudWatchLogs`<sup>Optional</sup> <a name="cloudWatchLogs" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope.property.cloudWatchLogs"></a>

```typescript
public readonly cloudWatchLogs: LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#cloud_watch_logs LakewatchDatasource#cloud_watch_logs}.

---

##### `jsonArray`<sup>Optional</sup> <a name="jsonArray" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope.property.jsonArray"></a>

```typescript
public readonly jsonArray: LakewatchDatasourceAutoloaderEnvelopeJsonArray;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray">LakewatchDatasourceAutoloaderEnvelopeJsonArray</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#json_array LakewatchDatasource#json_array}.

---

### LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs <a name="LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs.Initializer"></a>

```typescript
import { lakewatchDatasource } from '@cdktn/provider-databricks'

const lakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs: lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs.property.headerRetention">headerRetention</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#header_retention LakewatchDatasource#header_retention}. |

---

##### `headerRetention`<sup>Optional</sup> <a name="headerRetention" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs.property.headerRetention"></a>

```typescript
public readonly headerRetention: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#header_retention LakewatchDatasource#header_retention}.

---

### LakewatchDatasourceAutoloaderEnvelopeJsonArray <a name="LakewatchDatasourceAutoloaderEnvelopeJsonArray" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray.Initializer"></a>

```typescript
import { lakewatchDatasource } from '@cdktn/provider-databricks'

const lakewatchDatasourceAutoloaderEnvelopeJsonArray: lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#path LakewatchDatasource#path}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#path LakewatchDatasource#path}.

---

### LakewatchDatasourceAutoloaderRawTable <a name="LakewatchDatasourceAutoloaderRawTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable.Initializer"></a>

```typescript
import { lakewatchDatasource } from '@cdktn/provider-databricks'

const lakewatchDatasourceAutoloaderRawTable: lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable.property.tableName">tableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#table_name LakewatchDatasource#table_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable.property.catalogName">catalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable.property.schemaName">schemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}. |

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#table_name LakewatchDatasource#table_name}.

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}.

---

### LakewatchDatasourceConfig <a name="LakewatchDatasourceConfig" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.Initializer"></a>

```typescript
import { lakewatchDatasource } from '@cdktn/provider-databricks'

const lakewatchDatasourceConfig: lakewatchDatasource.LakewatchDatasourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.catalogName">catalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.datasourceName">datasourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#datasource_name LakewatchDatasource#datasource_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule">LakewatchDatasourceSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schedule LakewatchDatasource#schedule}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.schemaName">schemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.warehouseId">warehouseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#warehouse_id LakewatchDatasource#warehouse_id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#annotations LakewatchDatasource#annotations}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.autoloader">autoloader</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader">LakewatchDatasourceAutoloader</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#autoloader LakewatchDatasource#autoloader}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.computeMode">computeMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#compute_mode LakewatchDatasource#compute_mode}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#description LakewatchDatasource#description}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.existingTable">existingTable</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable">LakewatchDatasourceExistingTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#existing_table LakewatchDatasource#existing_table}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.parsers">parsers</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers">LakewatchDatasourceParsers</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#parsers LakewatchDatasource#parsers}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig">LakewatchDatasourceProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#provider_config LakewatchDatasource#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.runAsPrincipal">runAsPrincipal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#run_as_principal LakewatchDatasource#run_as_principal}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.unityCatalogConnection">unityCatalogConnection</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection">LakewatchDatasourceUnityCatalogConnection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#unity_catalog_connection LakewatchDatasource#unity_catalog_connection}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}.

---

##### `datasourceName`<sup>Required</sup> <a name="datasourceName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.datasourceName"></a>

```typescript
public readonly datasourceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#datasource_name LakewatchDatasource#datasource_name}.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.schedule"></a>

```typescript
public readonly schedule: LakewatchDatasourceSchedule;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule">LakewatchDatasourceSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schedule LakewatchDatasource#schedule}.

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}.

---

##### `warehouseId`<sup>Required</sup> <a name="warehouseId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.warehouseId"></a>

```typescript
public readonly warehouseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#warehouse_id LakewatchDatasource#warehouse_id}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#annotations LakewatchDatasource#annotations}.

---

##### `autoloader`<sup>Optional</sup> <a name="autoloader" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.autoloader"></a>

```typescript
public readonly autoloader: LakewatchDatasourceAutoloader;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader">LakewatchDatasourceAutoloader</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#autoloader LakewatchDatasource#autoloader}.

---

##### `computeMode`<sup>Optional</sup> <a name="computeMode" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.computeMode"></a>

```typescript
public readonly computeMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#compute_mode LakewatchDatasource#compute_mode}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#description LakewatchDatasource#description}.

---

##### `existingTable`<sup>Optional</sup> <a name="existingTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.existingTable"></a>

```typescript
public readonly existingTable: LakewatchDatasourceExistingTable;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable">LakewatchDatasourceExistingTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#existing_table LakewatchDatasource#existing_table}.

---

##### `parsers`<sup>Optional</sup> <a name="parsers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.parsers"></a>

```typescript
public readonly parsers: IResolvable | LakewatchDatasourceParsers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers">LakewatchDatasourceParsers</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#parsers LakewatchDatasource#parsers}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: LakewatchDatasourceProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig">LakewatchDatasourceProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#provider_config LakewatchDatasource#provider_config}.

---

##### `runAsPrincipal`<sup>Optional</sup> <a name="runAsPrincipal" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.runAsPrincipal"></a>

```typescript
public readonly runAsPrincipal: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#run_as_principal LakewatchDatasource#run_as_principal}.

---

##### `unityCatalogConnection`<sup>Optional</sup> <a name="unityCatalogConnection" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.unityCatalogConnection"></a>

```typescript
public readonly unityCatalogConnection: LakewatchDatasourceUnityCatalogConnection;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection">LakewatchDatasourceUnityCatalogConnection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#unity_catalog_connection LakewatchDatasource#unity_catalog_connection}.

---

### LakewatchDatasourceCreatedBy <a name="LakewatchDatasourceCreatedBy" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy.Initializer"></a>

```typescript
import { lakewatchDatasource } from '@cdktn/provider-databricks'

const lakewatchDatasourceCreatedBy: lakewatchDatasource.LakewatchDatasourceCreatedBy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#display_name LakewatchDatasource#display_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#email LakewatchDatasource#email}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#id LakewatchDatasource#id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy.property.principalType">principalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#principal_type LakewatchDatasource#principal_type}. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#display_name LakewatchDatasource#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#email LakewatchDatasource#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#id LakewatchDatasource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principalType`<sup>Optional</sup> <a name="principalType" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#principal_type LakewatchDatasource#principal_type}.

---

### LakewatchDatasourceExistingTable <a name="LakewatchDatasourceExistingTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable.Initializer"></a>

```typescript
import { lakewatchDatasource } from '@cdktn/provider-databricks'

const lakewatchDatasourceExistingTable: lakewatchDatasource.LakewatchDatasourceExistingTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#name LakewatchDatasource#name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable.property.catalog">catalog</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog LakewatchDatasource#catalog}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable.property.includeExistingRows">includeExistingRows</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#include_existing_rows LakewatchDatasource#include_existing_rows}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable.property.schema">schema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema LakewatchDatasource#schema}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#name LakewatchDatasource#name}.

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog LakewatchDatasource#catalog}.

---

##### `includeExistingRows`<sup>Optional</sup> <a name="includeExistingRows" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable.property.includeExistingRows"></a>

```typescript
public readonly includeExistingRows: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#include_existing_rows LakewatchDatasource#include_existing_rows}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema LakewatchDatasource#schema}.

---

### LakewatchDatasourceOwner <a name="LakewatchDatasourceOwner" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner.Initializer"></a>

```typescript
import { lakewatchDatasource } from '@cdktn/provider-databricks'

const lakewatchDatasourceOwner: lakewatchDatasource.LakewatchDatasourceOwner = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#display_name LakewatchDatasource#display_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#email LakewatchDatasource#email}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#id LakewatchDatasource#id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner.property.principalType">principalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#principal_type LakewatchDatasource#principal_type}. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#display_name LakewatchDatasource#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#email LakewatchDatasource#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#id LakewatchDatasource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principalType`<sup>Optional</sup> <a name="principalType" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#principal_type LakewatchDatasource#principal_type}.

---

### LakewatchDatasourceParsers <a name="LakewatchDatasourceParsers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers.Initializer"></a>

```typescript
import { lakewatchDatasource } from '@cdktn/provider-databricks'

const lakewatchDatasourceParsers: lakewatchDatasource.LakewatchDatasourceParsers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#id LakewatchDatasource#id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#version LakewatchDatasource#version}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers.property.targetTable">targetTable</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable">LakewatchDatasourceParsersTargetTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#target_table LakewatchDatasource#target_table}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#id LakewatchDatasource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#version LakewatchDatasource#version}.

---

##### `targetTable`<sup>Optional</sup> <a name="targetTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers.property.targetTable"></a>

```typescript
public readonly targetTable: LakewatchDatasourceParsersTargetTable;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable">LakewatchDatasourceParsersTargetTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#target_table LakewatchDatasource#target_table}.

---

### LakewatchDatasourceParsersEffectiveTargetTable <a name="LakewatchDatasourceParsersEffectiveTargetTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTable.Initializer"></a>

```typescript
import { lakewatchDatasource } from '@cdktn/provider-databricks'

const lakewatchDatasourceParsersEffectiveTargetTable: lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTable.property.tableName">tableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#table_name LakewatchDatasource#table_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTable.property.catalogName">catalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTable.property.schemaName">schemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}. |

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTable.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#table_name LakewatchDatasource#table_name}.

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTable.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTable.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}.

---

### LakewatchDatasourceParsersTargetTable <a name="LakewatchDatasourceParsersTargetTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable.Initializer"></a>

```typescript
import { lakewatchDatasource } from '@cdktn/provider-databricks'

const lakewatchDatasourceParsersTargetTable: lakewatchDatasource.LakewatchDatasourceParsersTargetTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable.property.tableName">tableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#table_name LakewatchDatasource#table_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable.property.catalogName">catalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable.property.schemaName">schemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}. |

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#table_name LakewatchDatasource#table_name}.

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}.

---

### LakewatchDatasourceProviderConfig <a name="LakewatchDatasourceProviderConfig" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig.Initializer"></a>

```typescript
import { lakewatchDatasource } from '@cdktn/provider-databricks'

const lakewatchDatasourceProviderConfig: lakewatchDatasource.LakewatchDatasourceProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#workspace_id LakewatchDatasource#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#workspace_id LakewatchDatasource#workspace_id}.

---

### LakewatchDatasourceSchedule <a name="LakewatchDatasourceSchedule" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule.Initializer"></a>

```typescript
import { lakewatchDatasource } from '@cdktn/provider-databricks'

const lakewatchDatasourceSchedule: lakewatchDatasource.LakewatchDatasourceSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule.property.atLeastEvery">atLeastEvery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#at_least_every LakewatchDatasource#at_least_every}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule.property.computeGroup">computeGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#compute_group LakewatchDatasource#compute_group}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule.property.continuous">continuous</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#continuous LakewatchDatasource#continuous}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule.property.cronExpression">cronExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#cron_expression LakewatchDatasource#cron_expression}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#enabled LakewatchDatasource#enabled}. |

---

##### `atLeastEvery`<sup>Optional</sup> <a name="atLeastEvery" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule.property.atLeastEvery"></a>

```typescript
public readonly atLeastEvery: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#at_least_every LakewatchDatasource#at_least_every}.

---

##### `computeGroup`<sup>Optional</sup> <a name="computeGroup" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule.property.computeGroup"></a>

```typescript
public readonly computeGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#compute_group LakewatchDatasource#compute_group}.

---

##### `continuous`<sup>Optional</sup> <a name="continuous" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule.property.continuous"></a>

```typescript
public readonly continuous: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#continuous LakewatchDatasource#continuous}.

---

##### `cronExpression`<sup>Optional</sup> <a name="cronExpression" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule.property.cronExpression"></a>

```typescript
public readonly cronExpression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#cron_expression LakewatchDatasource#cron_expression}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#enabled LakewatchDatasource#enabled}.

---

### LakewatchDatasourceStatus <a name="LakewatchDatasourceStatus" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatus.Initializer"></a>

```typescript
import { lakewatchDatasource } from '@cdktn/provider-databricks'

const lakewatchDatasourceStatus: lakewatchDatasource.LakewatchDatasourceStatus = { ... }
```


### LakewatchDatasourceStatusIngestionJob <a name="LakewatchDatasourceStatusIngestionJob" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJob"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJob.Initializer"></a>

```typescript
import { lakewatchDatasource } from '@cdktn/provider-databricks'

const lakewatchDatasourceStatusIngestionJob: lakewatchDatasource.LakewatchDatasourceStatusIngestionJob = { ... }
```


### LakewatchDatasourceStatusIngestionPipeline <a name="LakewatchDatasourceStatusIngestionPipeline" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipeline"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipeline.Initializer"></a>

```typescript
import { lakewatchDatasource } from '@cdktn/provider-databricks'

const lakewatchDatasourceStatusIngestionPipeline: lakewatchDatasource.LakewatchDatasourceStatusIngestionPipeline = { ... }
```


### LakewatchDatasourceUnityCatalogConnection <a name="LakewatchDatasourceUnityCatalogConnection" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection.Initializer"></a>

```typescript
import { lakewatchDatasource } from '@cdktn/provider-databricks'

const lakewatchDatasourceUnityCatalogConnection: lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection.property.connectionName">connectionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#connection_name LakewatchDatasource#connection_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection.property.configuration">configuration</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#configuration LakewatchDatasource#configuration}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection.property.startTime">startTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#start_time LakewatchDatasource#start_time}. |

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#connection_name LakewatchDatasource#connection_name}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection.property.configuration"></a>

```typescript
public readonly configuration: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#configuration LakewatchDatasource#configuration}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#start_time LakewatchDatasource#start_time}.

---

### LakewatchDatasourceUpdatedBy <a name="LakewatchDatasourceUpdatedBy" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy.Initializer"></a>

```typescript
import { lakewatchDatasource } from '@cdktn/provider-databricks'

const lakewatchDatasourceUpdatedBy: lakewatchDatasource.LakewatchDatasourceUpdatedBy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#display_name LakewatchDatasource#display_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#email LakewatchDatasource#email}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#id LakewatchDatasource#id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy.property.principalType">principalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#principal_type LakewatchDatasource#principal_type}. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#display_name LakewatchDatasource#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#email LakewatchDatasource#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#id LakewatchDatasource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principalType`<sup>Optional</sup> <a name="principalType" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#principal_type LakewatchDatasource#principal_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference <a name="LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.Initializer"></a>

```typescript
import { lakewatchDatasource } from '@cdktn/provider-databricks'

new lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resetCatalogName">resetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resetCatalogName"></a>

```typescript
public resetCatalogName(): void
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resetSchemaName"></a>

```typescript
public resetSchemaName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.catalogName">catalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTable">LakewatchDatasourceAutoloaderEffectiveRawTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.catalogNameInput"></a>

```typescript
public readonly catalogNameInput: string;
```

- *Type:* string

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LakewatchDatasourceAutoloaderEffectiveRawTable;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTable">LakewatchDatasourceAutoloaderEffectiveRawTable</a>

---


### LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference <a name="LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer"></a>

```typescript
import { lakewatchDatasource } from '@cdktn/provider-databricks'

new lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.resetHeaderRetention">resetHeaderRetention</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeaderRetention` <a name="resetHeaderRetention" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.resetHeaderRetention"></a>

```typescript
public resetHeaderRetention(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetentionInput">headerRetentionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetention">headerRetention</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerRetentionInput`<sup>Optional</sup> <a name="headerRetentionInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetentionInput"></a>

```typescript
public readonly headerRetentionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `headerRetention`<sup>Required</sup> <a name="headerRetention" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetention"></a>

```typescript
public readonly headerRetention: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a>

---


### LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference <a name="LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.Initializer"></a>

```typescript
import { lakewatchDatasource } from '@cdktn/provider-databricks'

new lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray">LakewatchDatasourceAutoloaderEnvelopeJsonArray</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakewatchDatasourceAutoloaderEnvelopeJsonArray;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray">LakewatchDatasourceAutoloaderEnvelopeJsonArray</a>

---


### LakewatchDatasourceAutoloaderEnvelopeOutputReference <a name="LakewatchDatasourceAutoloaderEnvelopeOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.Initializer"></a>

```typescript
import { lakewatchDatasource } from '@cdktn/provider-databricks'

new lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.putCloudWatchLogs">putCloudWatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.putJsonArray">putJsonArray</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.resetCloudWatchLogs">resetCloudWatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.resetJsonArray">resetJsonArray</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudWatchLogs` <a name="putCloudWatchLogs" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.putCloudWatchLogs"></a>

```typescript
public putCloudWatchLogs(value: LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.putCloudWatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a>

---

##### `putJsonArray` <a name="putJsonArray" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.putJsonArray"></a>

```typescript
public putJsonArray(value: LakewatchDatasourceAutoloaderEnvelopeJsonArray): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.putJsonArray.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray">LakewatchDatasourceAutoloaderEnvelopeJsonArray</a>

---

##### `resetCloudWatchLogs` <a name="resetCloudWatchLogs" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.resetCloudWatchLogs"></a>

```typescript
public resetCloudWatchLogs(): void
```

##### `resetJsonArray` <a name="resetJsonArray" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.resetJsonArray"></a>

```typescript
public resetJsonArray(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.cloudWatchLogs">cloudWatchLogs</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference">LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.jsonArray">jsonArray</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference">LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.cloudWatchLogsInput">cloudWatchLogsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.jsonArrayInput">jsonArrayInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray">LakewatchDatasourceAutoloaderEnvelopeJsonArray</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope">LakewatchDatasourceAutoloaderEnvelope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudWatchLogs`<sup>Required</sup> <a name="cloudWatchLogs" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.cloudWatchLogs"></a>

```typescript
public readonly cloudWatchLogs: LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference">LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference</a>

---

##### `jsonArray`<sup>Required</sup> <a name="jsonArray" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.jsonArray"></a>

```typescript
public readonly jsonArray: LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference">LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference</a>

---

##### `cloudWatchLogsInput`<sup>Optional</sup> <a name="cloudWatchLogsInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.cloudWatchLogsInput"></a>

```typescript
public readonly cloudWatchLogsInput: IResolvable | LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a>

---

##### `jsonArrayInput`<sup>Optional</sup> <a name="jsonArrayInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.jsonArrayInput"></a>

```typescript
public readonly jsonArrayInput: IResolvable | LakewatchDatasourceAutoloaderEnvelopeJsonArray;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray">LakewatchDatasourceAutoloaderEnvelopeJsonArray</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakewatchDatasourceAutoloaderEnvelope;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope">LakewatchDatasourceAutoloaderEnvelope</a>

---


### LakewatchDatasourceAutoloaderOutputReference <a name="LakewatchDatasourceAutoloaderOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.Initializer"></a>

```typescript
import { lakewatchDatasource } from '@cdktn/provider-databricks'

new lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.putEnvelope">putEnvelope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.putRawTable">putRawTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetAwsSecretScope">resetAwsSecretScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetEnvelope">resetEnvelope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetFormatOptions">resetFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetIncludeExistingFiles">resetIncludeExistingFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetOverridePartitionColumns">resetOverridePartitionColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetQueueUrl">resetQueueUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetServiceCredentials">resetServiceCredentials</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnvelope` <a name="putEnvelope" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.putEnvelope"></a>

```typescript
public putEnvelope(value: LakewatchDatasourceAutoloaderEnvelope): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.putEnvelope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope">LakewatchDatasourceAutoloaderEnvelope</a>

---

##### `putRawTable` <a name="putRawTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.putRawTable"></a>

```typescript
public putRawTable(value: LakewatchDatasourceAutoloaderRawTable): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.putRawTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable">LakewatchDatasourceAutoloaderRawTable</a>

---

##### `resetAwsSecretScope` <a name="resetAwsSecretScope" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetAwsSecretScope"></a>

```typescript
public resetAwsSecretScope(): void
```

##### `resetEnvelope` <a name="resetEnvelope" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetEnvelope"></a>

```typescript
public resetEnvelope(): void
```

##### `resetFormatOptions` <a name="resetFormatOptions" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetFormatOptions"></a>

```typescript
public resetFormatOptions(): void
```

##### `resetIncludeExistingFiles` <a name="resetIncludeExistingFiles" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetIncludeExistingFiles"></a>

```typescript
public resetIncludeExistingFiles(): void
```

##### `resetOverridePartitionColumns` <a name="resetOverridePartitionColumns" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetOverridePartitionColumns"></a>

```typescript
public resetOverridePartitionColumns(): void
```

##### `resetQueueUrl` <a name="resetQueueUrl" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetQueueUrl"></a>

```typescript
public resetQueueUrl(): void
```

##### `resetServiceCredentials` <a name="resetServiceCredentials" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetServiceCredentials"></a>

```typescript
public resetServiceCredentials(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.effectiveIncludeExistingFiles">effectiveIncludeExistingFiles</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.effectiveRawTable">effectiveRawTable</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference">LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.envelope">envelope</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference">LakewatchDatasourceAutoloaderEnvelopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.rawTable">rawTable</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference">LakewatchDatasourceAutoloaderRawTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.awsSecretScopeInput">awsSecretScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.envelopeInput">envelopeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope">LakewatchDatasourceAutoloaderEnvelope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.formatOptionsInput">formatOptionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.includeExistingFilesInput">includeExistingFilesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.overridePartitionColumnsInput">overridePartitionColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.queueUrlInput">queueUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.rawTableInput">rawTableInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable">LakewatchDatasourceAutoloaderRawTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.serviceCredentialsInput">serviceCredentialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.awsSecretScope">awsSecretScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.formatOptions">formatOptions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.includeExistingFiles">includeExistingFiles</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.overridePartitionColumns">overridePartitionColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.queueUrl">queueUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.serviceCredentials">serviceCredentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader">LakewatchDatasourceAutoloader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectiveIncludeExistingFiles`<sup>Required</sup> <a name="effectiveIncludeExistingFiles" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.effectiveIncludeExistingFiles"></a>

```typescript
public readonly effectiveIncludeExistingFiles: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `effectiveRawTable`<sup>Required</sup> <a name="effectiveRawTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.effectiveRawTable"></a>

```typescript
public readonly effectiveRawTable: LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference">LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference</a>

---

##### `envelope`<sup>Required</sup> <a name="envelope" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.envelope"></a>

```typescript
public readonly envelope: LakewatchDatasourceAutoloaderEnvelopeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference">LakewatchDatasourceAutoloaderEnvelopeOutputReference</a>

---

##### `rawTable`<sup>Required</sup> <a name="rawTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.rawTable"></a>

```typescript
public readonly rawTable: LakewatchDatasourceAutoloaderRawTableOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference">LakewatchDatasourceAutoloaderRawTableOutputReference</a>

---

##### `awsSecretScopeInput`<sup>Optional</sup> <a name="awsSecretScopeInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.awsSecretScopeInput"></a>

```typescript
public readonly awsSecretScopeInput: string;
```

- *Type:* string

---

##### `envelopeInput`<sup>Optional</sup> <a name="envelopeInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.envelopeInput"></a>

```typescript
public readonly envelopeInput: IResolvable | LakewatchDatasourceAutoloaderEnvelope;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope">LakewatchDatasourceAutoloaderEnvelope</a>

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `formatOptionsInput`<sup>Optional</sup> <a name="formatOptionsInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.formatOptionsInput"></a>

```typescript
public readonly formatOptionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `includeExistingFilesInput`<sup>Optional</sup> <a name="includeExistingFilesInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.includeExistingFilesInput"></a>

```typescript
public readonly includeExistingFilesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `overridePartitionColumnsInput`<sup>Optional</sup> <a name="overridePartitionColumnsInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.overridePartitionColumnsInput"></a>

```typescript
public readonly overridePartitionColumnsInput: string[];
```

- *Type:* string[]

---

##### `queueUrlInput`<sup>Optional</sup> <a name="queueUrlInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.queueUrlInput"></a>

```typescript
public readonly queueUrlInput: string;
```

- *Type:* string

---

##### `rawTableInput`<sup>Optional</sup> <a name="rawTableInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.rawTableInput"></a>

```typescript
public readonly rawTableInput: IResolvable | LakewatchDatasourceAutoloaderRawTable;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable">LakewatchDatasourceAutoloaderRawTable</a>

---

##### `serviceCredentialsInput`<sup>Optional</sup> <a name="serviceCredentialsInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.serviceCredentialsInput"></a>

```typescript
public readonly serviceCredentialsInput: string;
```

- *Type:* string

---

##### `awsSecretScope`<sup>Required</sup> <a name="awsSecretScope" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.awsSecretScope"></a>

```typescript
public readonly awsSecretScope: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `formatOptions`<sup>Required</sup> <a name="formatOptions" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.formatOptions"></a>

```typescript
public readonly formatOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `includeExistingFiles`<sup>Required</sup> <a name="includeExistingFiles" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.includeExistingFiles"></a>

```typescript
public readonly includeExistingFiles: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `overridePartitionColumns`<sup>Required</sup> <a name="overridePartitionColumns" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.overridePartitionColumns"></a>

```typescript
public readonly overridePartitionColumns: string[];
```

- *Type:* string[]

---

##### `queueUrl`<sup>Required</sup> <a name="queueUrl" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.queueUrl"></a>

```typescript
public readonly queueUrl: string;
```

- *Type:* string

---

##### `serviceCredentials`<sup>Required</sup> <a name="serviceCredentials" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.serviceCredentials"></a>

```typescript
public readonly serviceCredentials: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakewatchDatasourceAutoloader;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader">LakewatchDatasourceAutoloader</a>

---


### LakewatchDatasourceAutoloaderRawTableOutputReference <a name="LakewatchDatasourceAutoloaderRawTableOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.Initializer"></a>

```typescript
import { lakewatchDatasource } from '@cdktn/provider-databricks'

new lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.resetCatalogName">resetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.resetCatalogName"></a>

```typescript
public resetCatalogName(): void
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.resetSchemaName"></a>

```typescript
public resetSchemaName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.catalogName">catalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable">LakewatchDatasourceAutoloaderRawTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.catalogNameInput"></a>

```typescript
public readonly catalogNameInput: string;
```

- *Type:* string

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakewatchDatasourceAutoloaderRawTable;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable">LakewatchDatasourceAutoloaderRawTable</a>

---


### LakewatchDatasourceCreatedByOutputReference <a name="LakewatchDatasourceCreatedByOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.Initializer"></a>

```typescript
import { lakewatchDatasource } from '@cdktn/provider-databricks'

new lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.resetPrincipalType">resetPrincipalType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEmail` <a name="resetEmail" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPrincipalType` <a name="resetPrincipalType" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.resetPrincipalType"></a>

```typescript
public resetPrincipalType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.principalTypeInput">principalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.principalType">principalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy">LakewatchDatasourceCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `principalTypeInput`<sup>Optional</sup> <a name="principalTypeInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.principalTypeInput"></a>

```typescript
public readonly principalTypeInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LakewatchDatasourceCreatedBy;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy">LakewatchDatasourceCreatedBy</a>

---


### LakewatchDatasourceExistingTableOutputReference <a name="LakewatchDatasourceExistingTableOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.Initializer"></a>

```typescript
import { lakewatchDatasource } from '@cdktn/provider-databricks'

new lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.resetCatalog">resetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.resetIncludeExistingRows">resetIncludeExistingRows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.resetSchema">resetSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalog` <a name="resetCatalog" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.resetCatalog"></a>

```typescript
public resetCatalog(): void
```

##### `resetIncludeExistingRows` <a name="resetIncludeExistingRows" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.resetIncludeExistingRows"></a>

```typescript
public resetIncludeExistingRows(): void
```

##### `resetSchema` <a name="resetSchema" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.resetSchema"></a>

```typescript
public resetSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.effectiveCatalog">effectiveCatalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.effectiveName">effectiveName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.effectiveSchema">effectiveSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.catalogInput">catalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.includeExistingRowsInput">includeExistingRowsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.catalog">catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.includeExistingRows">includeExistingRows</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable">LakewatchDatasourceExistingTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectiveCatalog`<sup>Required</sup> <a name="effectiveCatalog" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.effectiveCatalog"></a>

```typescript
public readonly effectiveCatalog: string;
```

- *Type:* string

---

##### `effectiveName`<sup>Required</sup> <a name="effectiveName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.effectiveName"></a>

```typescript
public readonly effectiveName: string;
```

- *Type:* string

---

##### `effectiveSchema`<sup>Required</sup> <a name="effectiveSchema" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.effectiveSchema"></a>

```typescript
public readonly effectiveSchema: string;
```

- *Type:* string

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.catalogInput"></a>

```typescript
public readonly catalogInput: string;
```

- *Type:* string

---

##### `includeExistingRowsInput`<sup>Optional</sup> <a name="includeExistingRowsInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.includeExistingRowsInput"></a>

```typescript
public readonly includeExistingRowsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

---

##### `includeExistingRows`<sup>Required</sup> <a name="includeExistingRows" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.includeExistingRows"></a>

```typescript
public readonly includeExistingRows: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakewatchDatasourceExistingTable;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable">LakewatchDatasourceExistingTable</a>

---


### LakewatchDatasourceOwnerOutputReference <a name="LakewatchDatasourceOwnerOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.Initializer"></a>

```typescript
import { lakewatchDatasource } from '@cdktn/provider-databricks'

new lakewatchDatasource.LakewatchDatasourceOwnerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.resetPrincipalType">resetPrincipalType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEmail` <a name="resetEmail" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPrincipalType` <a name="resetPrincipalType" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.resetPrincipalType"></a>

```typescript
public resetPrincipalType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.principalTypeInput">principalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.principalType">principalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner">LakewatchDatasourceOwner</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `principalTypeInput`<sup>Optional</sup> <a name="principalTypeInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.principalTypeInput"></a>

```typescript
public readonly principalTypeInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LakewatchDatasourceOwner;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner">LakewatchDatasourceOwner</a>

---


### LakewatchDatasourceParsersEffectiveTargetTableOutputReference <a name="LakewatchDatasourceParsersEffectiveTargetTableOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.Initializer"></a>

```typescript
import { lakewatchDatasource } from '@cdktn/provider-databricks'

new lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.resetCatalogName">resetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.resetCatalogName"></a>

```typescript
public resetCatalogName(): void
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.resetSchemaName"></a>

```typescript
public resetSchemaName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.catalogName">catalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTable">LakewatchDatasourceParsersEffectiveTargetTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.catalogNameInput"></a>

```typescript
public readonly catalogNameInput: string;
```

- *Type:* string

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LakewatchDatasourceParsersEffectiveTargetTable;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTable">LakewatchDatasourceParsersEffectiveTargetTable</a>

---


### LakewatchDatasourceParsersList <a name="LakewatchDatasourceParsersList" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.Initializer"></a>

```typescript
import { lakewatchDatasource } from '@cdktn/provider-databricks'

new lakewatchDatasource.LakewatchDatasourceParsersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.get"></a>

```typescript
public get(index: number): LakewatchDatasourceParsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers">LakewatchDatasourceParsers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakewatchDatasourceParsers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers">LakewatchDatasourceParsers</a>[]

---


### LakewatchDatasourceParsersOutputReference <a name="LakewatchDatasourceParsersOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.Initializer"></a>

```typescript
import { lakewatchDatasource } from '@cdktn/provider-databricks'

new lakewatchDatasource.LakewatchDatasourceParsersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.putTargetTable">putTargetTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.resetTargetTable">resetTargetTable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargetTable` <a name="putTargetTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.putTargetTable"></a>

```typescript
public putTargetTable(value: LakewatchDatasourceParsersTargetTable): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.putTargetTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable">LakewatchDatasourceParsersTargetTable</a>

---

##### `resetTargetTable` <a name="resetTargetTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.resetTargetTable"></a>

```typescript
public resetTargetTable(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.effectiveTargetTable">effectiveTargetTable</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference">LakewatchDatasourceParsersEffectiveTargetTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.targetTable">targetTable</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference">LakewatchDatasourceParsersTargetTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.targetTableInput">targetTableInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable">LakewatchDatasourceParsersTargetTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers">LakewatchDatasourceParsers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectiveTargetTable`<sup>Required</sup> <a name="effectiveTargetTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.effectiveTargetTable"></a>

```typescript
public readonly effectiveTargetTable: LakewatchDatasourceParsersEffectiveTargetTableOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference">LakewatchDatasourceParsersEffectiveTargetTableOutputReference</a>

---

##### `targetTable`<sup>Required</sup> <a name="targetTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.targetTable"></a>

```typescript
public readonly targetTable: LakewatchDatasourceParsersTargetTableOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference">LakewatchDatasourceParsersTargetTableOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `targetTableInput`<sup>Optional</sup> <a name="targetTableInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.targetTableInput"></a>

```typescript
public readonly targetTableInput: IResolvable | LakewatchDatasourceParsersTargetTable;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable">LakewatchDatasourceParsersTargetTable</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakewatchDatasourceParsers;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers">LakewatchDatasourceParsers</a>

---


### LakewatchDatasourceParsersTargetTableOutputReference <a name="LakewatchDatasourceParsersTargetTableOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.Initializer"></a>

```typescript
import { lakewatchDatasource } from '@cdktn/provider-databricks'

new lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.resetCatalogName">resetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.resetCatalogName"></a>

```typescript
public resetCatalogName(): void
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.resetSchemaName"></a>

```typescript
public resetSchemaName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.catalogName">catalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable">LakewatchDatasourceParsersTargetTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.catalogNameInput"></a>

```typescript
public readonly catalogNameInput: string;
```

- *Type:* string

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakewatchDatasourceParsersTargetTable;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable">LakewatchDatasourceParsersTargetTable</a>

---


### LakewatchDatasourceProviderConfigOutputReference <a name="LakewatchDatasourceProviderConfigOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.Initializer"></a>

```typescript
import { lakewatchDatasource } from '@cdktn/provider-databricks'

new lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig">LakewatchDatasourceProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakewatchDatasourceProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig">LakewatchDatasourceProviderConfig</a>

---


### LakewatchDatasourceScheduleOutputReference <a name="LakewatchDatasourceScheduleOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.Initializer"></a>

```typescript
import { lakewatchDatasource } from '@cdktn/provider-databricks'

new lakewatchDatasource.LakewatchDatasourceScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resetAtLeastEvery">resetAtLeastEvery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resetComputeGroup">resetComputeGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resetContinuous">resetContinuous</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resetCronExpression">resetCronExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAtLeastEvery` <a name="resetAtLeastEvery" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resetAtLeastEvery"></a>

```typescript
public resetAtLeastEvery(): void
```

##### `resetComputeGroup` <a name="resetComputeGroup" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resetComputeGroup"></a>

```typescript
public resetComputeGroup(): void
```

##### `resetContinuous` <a name="resetContinuous" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resetContinuous"></a>

```typescript
public resetContinuous(): void
```

##### `resetCronExpression` <a name="resetCronExpression" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resetCronExpression"></a>

```typescript
public resetCronExpression(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.atLeastEveryInput">atLeastEveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.computeGroupInput">computeGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.continuousInput">continuousInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.cronExpressionInput">cronExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.atLeastEvery">atLeastEvery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.computeGroup">computeGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.continuous">continuous</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.cronExpression">cronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule">LakewatchDatasourceSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `atLeastEveryInput`<sup>Optional</sup> <a name="atLeastEveryInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.atLeastEveryInput"></a>

```typescript
public readonly atLeastEveryInput: string;
```

- *Type:* string

---

##### `computeGroupInput`<sup>Optional</sup> <a name="computeGroupInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.computeGroupInput"></a>

```typescript
public readonly computeGroupInput: string;
```

- *Type:* string

---

##### `continuousInput`<sup>Optional</sup> <a name="continuousInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.continuousInput"></a>

```typescript
public readonly continuousInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cronExpressionInput`<sup>Optional</sup> <a name="cronExpressionInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.cronExpressionInput"></a>

```typescript
public readonly cronExpressionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `atLeastEvery`<sup>Required</sup> <a name="atLeastEvery" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.atLeastEvery"></a>

```typescript
public readonly atLeastEvery: string;
```

- *Type:* string

---

##### `computeGroup`<sup>Required</sup> <a name="computeGroup" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.computeGroup"></a>

```typescript
public readonly computeGroup: string;
```

- *Type:* string

---

##### `continuous`<sup>Required</sup> <a name="continuous" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.continuous"></a>

```typescript
public readonly continuous: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.cronExpression"></a>

```typescript
public readonly cronExpression: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakewatchDatasourceSchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule">LakewatchDatasourceSchedule</a>

---


### LakewatchDatasourceStatusIngestionJobOutputReference <a name="LakewatchDatasourceStatusIngestionJobOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.Initializer"></a>

```typescript
import { lakewatchDatasource } from '@cdktn/provider-databricks'

new lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.jobId">jobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.lastCompleteTime">lastCompleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.lastErrorMessage">lastErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.lastStartTime">lastStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.lastStatusChangeTime">lastStatusChangeTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.lifecycleState">lifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.pipelineId">pipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.runState">runState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJob">LakewatchDatasourceStatusIngestionJob</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

---

##### `lastCompleteTime`<sup>Required</sup> <a name="lastCompleteTime" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.lastCompleteTime"></a>

```typescript
public readonly lastCompleteTime: string;
```

- *Type:* string

---

##### `lastErrorMessage`<sup>Required</sup> <a name="lastErrorMessage" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.lastErrorMessage"></a>

```typescript
public readonly lastErrorMessage: string;
```

- *Type:* string

---

##### `lastStartTime`<sup>Required</sup> <a name="lastStartTime" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.lastStartTime"></a>

```typescript
public readonly lastStartTime: string;
```

- *Type:* string

---

##### `lastStatusChangeTime`<sup>Required</sup> <a name="lastStatusChangeTime" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.lastStatusChangeTime"></a>

```typescript
public readonly lastStatusChangeTime: string;
```

- *Type:* string

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.lifecycleState"></a>

```typescript
public readonly lifecycleState: string;
```

- *Type:* string

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

---

##### `runState`<sup>Required</sup> <a name="runState" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.runState"></a>

```typescript
public readonly runState: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LakewatchDatasourceStatusIngestionJob;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJob">LakewatchDatasourceStatusIngestionJob</a>

---


### LakewatchDatasourceStatusIngestionPipelineOutputReference <a name="LakewatchDatasourceStatusIngestionPipelineOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.Initializer"></a>

```typescript
import { lakewatchDatasource } from '@cdktn/provider-databricks'

new lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.jobId">jobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastCompleteTime">lastCompleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastErrorMessage">lastErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastStartTime">lastStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastStatusChangeTime">lastStatusChangeTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.lifecycleState">lifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.pipelineId">pipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.runState">runState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipeline">LakewatchDatasourceStatusIngestionPipeline</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

---

##### `lastCompleteTime`<sup>Required</sup> <a name="lastCompleteTime" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastCompleteTime"></a>

```typescript
public readonly lastCompleteTime: string;
```

- *Type:* string

---

##### `lastErrorMessage`<sup>Required</sup> <a name="lastErrorMessage" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastErrorMessage"></a>

```typescript
public readonly lastErrorMessage: string;
```

- *Type:* string

---

##### `lastStartTime`<sup>Required</sup> <a name="lastStartTime" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastStartTime"></a>

```typescript
public readonly lastStartTime: string;
```

- *Type:* string

---

##### `lastStatusChangeTime`<sup>Required</sup> <a name="lastStatusChangeTime" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastStatusChangeTime"></a>

```typescript
public readonly lastStatusChangeTime: string;
```

- *Type:* string

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.lifecycleState"></a>

```typescript
public readonly lifecycleState: string;
```

- *Type:* string

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

---

##### `runState`<sup>Required</sup> <a name="runState" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.runState"></a>

```typescript
public readonly runState: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LakewatchDatasourceStatusIngestionPipeline;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipeline">LakewatchDatasourceStatusIngestionPipeline</a>

---


### LakewatchDatasourceStatusOutputReference <a name="LakewatchDatasourceStatusOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.Initializer"></a>

```typescript
import { lakewatchDatasource } from '@cdktn/provider-databricks'

new lakewatchDatasource.LakewatchDatasourceStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.property.ingestionJob">ingestionJob</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference">LakewatchDatasourceStatusIngestionJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.property.ingestionPipeline">ingestionPipeline</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference">LakewatchDatasourceStatusIngestionPipelineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatus">LakewatchDatasourceStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ingestionJob`<sup>Required</sup> <a name="ingestionJob" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.property.ingestionJob"></a>

```typescript
public readonly ingestionJob: LakewatchDatasourceStatusIngestionJobOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference">LakewatchDatasourceStatusIngestionJobOutputReference</a>

---

##### `ingestionPipeline`<sup>Required</sup> <a name="ingestionPipeline" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.property.ingestionPipeline"></a>

```typescript
public readonly ingestionPipeline: LakewatchDatasourceStatusIngestionPipelineOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference">LakewatchDatasourceStatusIngestionPipelineOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LakewatchDatasourceStatus;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatus">LakewatchDatasourceStatus</a>

---


### LakewatchDatasourceUnityCatalogConnectionOutputReference <a name="LakewatchDatasourceUnityCatalogConnectionOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.Initializer"></a>

```typescript
import { lakewatchDatasource } from '@cdktn/provider-databricks'

new lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.resetConfiguration"></a>

```typescript
public resetConfiguration(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.connector">connector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.effectiveStartTime">effectiveStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.configurationInput">configurationInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.connectionNameInput">connectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.configuration">configuration</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.connectionName">connectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection">LakewatchDatasourceUnityCatalogConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connector`<sup>Required</sup> <a name="connector" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.connector"></a>

```typescript
public readonly connector: string;
```

- *Type:* string

---

##### `effectiveStartTime`<sup>Required</sup> <a name="effectiveStartTime" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.effectiveStartTime"></a>

```typescript
public readonly effectiveStartTime: string;
```

- *Type:* string

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.configurationInput"></a>

```typescript
public readonly configurationInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `connectionNameInput`<sup>Optional</sup> <a name="connectionNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.connectionNameInput"></a>

```typescript
public readonly connectionNameInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.configuration"></a>

```typescript
public readonly configuration: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakewatchDatasourceUnityCatalogConnection;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection">LakewatchDatasourceUnityCatalogConnection</a>

---


### LakewatchDatasourceUpdatedByOutputReference <a name="LakewatchDatasourceUpdatedByOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.Initializer"></a>

```typescript
import { lakewatchDatasource } from '@cdktn/provider-databricks'

new lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.resetPrincipalType">resetPrincipalType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEmail` <a name="resetEmail" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPrincipalType` <a name="resetPrincipalType" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.resetPrincipalType"></a>

```typescript
public resetPrincipalType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.principalTypeInput">principalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.principalType">principalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy">LakewatchDatasourceUpdatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `principalTypeInput`<sup>Optional</sup> <a name="principalTypeInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.principalTypeInput"></a>

```typescript
public readonly principalTypeInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LakewatchDatasourceUpdatedBy;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy">LakewatchDatasourceUpdatedBy</a>

---



