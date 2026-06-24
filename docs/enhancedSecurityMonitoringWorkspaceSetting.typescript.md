# `enhancedSecurityMonitoringWorkspaceSetting` Submodule <a name="`enhancedSecurityMonitoringWorkspaceSetting` Submodule" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EnhancedSecurityMonitoringWorkspaceSetting <a name="EnhancedSecurityMonitoringWorkspaceSetting" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/enhanced_security_monitoring_workspace_setting databricks_enhanced_security_monitoring_workspace_setting}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.Initializer"></a>

```typescript
import { enhancedSecurityMonitoringWorkspaceSetting } from '@cdktn/provider-databricks'

new enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting(scope: Construct, id: string, config: EnhancedSecurityMonitoringWorkspaceSettingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig">EnhancedSecurityMonitoringWorkspaceSettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig">EnhancedSecurityMonitoringWorkspaceSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.putEnhancedSecurityMonitoringWorkspace">putEnhancedSecurityMonitoringWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.resetEtag">resetEtag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.resetSettingName">resetSettingName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEnhancedSecurityMonitoringWorkspace` <a name="putEnhancedSecurityMonitoringWorkspace" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.putEnhancedSecurityMonitoringWorkspace"></a>

```typescript
public putEnhancedSecurityMonitoringWorkspace(value: EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.putEnhancedSecurityMonitoringWorkspace.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace">EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace</a>

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.putProviderConfig"></a>

```typescript
public putProviderConfig(value: EnhancedSecurityMonitoringWorkspaceSettingProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfig">EnhancedSecurityMonitoringWorkspaceSettingProviderConfig</a>

---

##### `resetEtag` <a name="resetEtag" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.resetEtag"></a>

```typescript
public resetEtag(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

##### `resetSettingName` <a name="resetSettingName" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.resetSettingName"></a>

```typescript
public resetSettingName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EnhancedSecurityMonitoringWorkspaceSetting resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.isConstruct"></a>

```typescript
import { enhancedSecurityMonitoringWorkspaceSetting } from '@cdktn/provider-databricks'

enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.isTerraformElement"></a>

```typescript
import { enhancedSecurityMonitoringWorkspaceSetting } from '@cdktn/provider-databricks'

enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.isTerraformResource"></a>

```typescript
import { enhancedSecurityMonitoringWorkspaceSetting } from '@cdktn/provider-databricks'

enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.generateConfigForImport"></a>

```typescript
import { enhancedSecurityMonitoringWorkspaceSetting } from '@cdktn/provider-databricks'

enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a EnhancedSecurityMonitoringWorkspaceSetting resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EnhancedSecurityMonitoringWorkspaceSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EnhancedSecurityMonitoringWorkspaceSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/enhanced_security_monitoring_workspace_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EnhancedSecurityMonitoringWorkspaceSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.enhancedSecurityMonitoringWorkspace">enhancedSecurityMonitoringWorkspace</a></code> | <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference">EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference">EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.enhancedSecurityMonitoringWorkspaceInput">enhancedSecurityMonitoringWorkspaceInput</a></code> | <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace">EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.etagInput">etagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.providerConfigInput">providerConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfig">EnhancedSecurityMonitoringWorkspaceSettingProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.settingNameInput">settingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.settingName">settingName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `enhancedSecurityMonitoringWorkspace`<sup>Required</sup> <a name="enhancedSecurityMonitoringWorkspace" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.enhancedSecurityMonitoringWorkspace"></a>

```typescript
public readonly enhancedSecurityMonitoringWorkspace: EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference">EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.providerConfig"></a>

```typescript
public readonly providerConfig: EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference">EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference</a>

---

##### `enhancedSecurityMonitoringWorkspaceInput`<sup>Optional</sup> <a name="enhancedSecurityMonitoringWorkspaceInput" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.enhancedSecurityMonitoringWorkspaceInput"></a>

```typescript
public readonly enhancedSecurityMonitoringWorkspaceInput: EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace;
```

- *Type:* <a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace">EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace</a>

---

##### `etagInput`<sup>Optional</sup> <a name="etagInput" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.etagInput"></a>

```typescript
public readonly etagInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: EnhancedSecurityMonitoringWorkspaceSettingProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfig">EnhancedSecurityMonitoringWorkspaceSettingProviderConfig</a>

---

##### `settingNameInput`<sup>Optional</sup> <a name="settingNameInput" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.settingNameInput"></a>

```typescript
public readonly settingNameInput: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `settingName`<sup>Required</sup> <a name="settingName" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.settingName"></a>

```typescript
public readonly settingName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EnhancedSecurityMonitoringWorkspaceSettingConfig <a name="EnhancedSecurityMonitoringWorkspaceSettingConfig" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.Initializer"></a>

```typescript
import { enhancedSecurityMonitoringWorkspaceSetting } from '@cdktn/provider-databricks'

const enhancedSecurityMonitoringWorkspaceSettingConfig: enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.enhancedSecurityMonitoringWorkspace">enhancedSecurityMonitoringWorkspace</a></code> | <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace">EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace</a></code> | enhanced_security_monitoring_workspace block. |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.etag">etag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/enhanced_security_monitoring_workspace_setting#etag EnhancedSecurityMonitoringWorkspaceSetting#etag}. |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/enhanced_security_monitoring_workspace_setting#id EnhancedSecurityMonitoringWorkspaceSetting#id}. |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfig">EnhancedSecurityMonitoringWorkspaceSettingProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.settingName">settingName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/enhanced_security_monitoring_workspace_setting#setting_name EnhancedSecurityMonitoringWorkspaceSetting#setting_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `enhancedSecurityMonitoringWorkspace`<sup>Required</sup> <a name="enhancedSecurityMonitoringWorkspace" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.enhancedSecurityMonitoringWorkspace"></a>

```typescript
public readonly enhancedSecurityMonitoringWorkspace: EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace;
```

- *Type:* <a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace">EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace</a>

enhanced_security_monitoring_workspace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/enhanced_security_monitoring_workspace_setting#enhanced_security_monitoring_workspace EnhancedSecurityMonitoringWorkspaceSetting#enhanced_security_monitoring_workspace}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/enhanced_security_monitoring_workspace_setting#etag EnhancedSecurityMonitoringWorkspaceSetting#etag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/enhanced_security_monitoring_workspace_setting#id EnhancedSecurityMonitoringWorkspaceSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: EnhancedSecurityMonitoringWorkspaceSettingProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfig">EnhancedSecurityMonitoringWorkspaceSettingProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/enhanced_security_monitoring_workspace_setting#provider_config EnhancedSecurityMonitoringWorkspaceSetting#provider_config}

---

##### `settingName`<sup>Optional</sup> <a name="settingName" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.settingName"></a>

```typescript
public readonly settingName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/enhanced_security_monitoring_workspace_setting#setting_name EnhancedSecurityMonitoringWorkspaceSetting#setting_name}.

---

### EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace <a name="EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace.Initializer"></a>

```typescript
import { enhancedSecurityMonitoringWorkspaceSetting } from '@cdktn/provider-databricks'

const enhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace: enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/enhanced_security_monitoring_workspace_setting#is_enabled EnhancedSecurityMonitoringWorkspaceSetting#is_enabled}. |

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/enhanced_security_monitoring_workspace_setting#is_enabled EnhancedSecurityMonitoringWorkspaceSetting#is_enabled}.

---

### EnhancedSecurityMonitoringWorkspaceSettingProviderConfig <a name="EnhancedSecurityMonitoringWorkspaceSettingProviderConfig" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfig.Initializer"></a>

```typescript
import { enhancedSecurityMonitoringWorkspaceSetting } from '@cdktn/provider-databricks'

const enhancedSecurityMonitoringWorkspaceSettingProviderConfig: enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/enhanced_security_monitoring_workspace_setting#workspace_id EnhancedSecurityMonitoringWorkspaceSetting#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/enhanced_security_monitoring_workspace_setting#workspace_id EnhancedSecurityMonitoringWorkspaceSetting#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference <a name="EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.Initializer"></a>

```typescript
import { enhancedSecurityMonitoringWorkspaceSetting } from '@cdktn/provider-databricks'

new enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace">EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace;
```

- *Type:* <a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace">EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace</a>

---


### EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference <a name="EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.Initializer"></a>

```typescript
import { enhancedSecurityMonitoringWorkspaceSetting } from '@cdktn/provider-databricks'

new enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfig">EnhancedSecurityMonitoringWorkspaceSettingProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EnhancedSecurityMonitoringWorkspaceSettingProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingProviderConfig">EnhancedSecurityMonitoringWorkspaceSettingProviderConfig</a>

---



